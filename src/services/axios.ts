import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refresh_token");

      if (refreshToken) {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
            { refresh_token: refreshToken }
          );

          const accessToken = response.data.access_token;
          // Set new access token in cookies
          Cookies.set("access_token", accessToken, {
            expires: 1 / 24, // 1 hour
            secure: true,
            sameSite: "Strict",
            path: "/",
          });

          // Retry the original request with new token

          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        } catch {
          // If refresh fails, clear cookies and reject
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          return Promise.reject(error.response?.data || error.message);
        }
      }
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export default api;
