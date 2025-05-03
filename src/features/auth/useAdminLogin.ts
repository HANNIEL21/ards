import { loginAdmin } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Cookies from "js-cookie";

export function useAdminLogin() {
  return useMutation({
    mutationKey: ["login", "admin"],
    mutationFn: loginAdmin,
    onSuccess: (data) => {
      toast.success("Login successful!");

      // Set the access and refresh tokens in cookies
      Cookies.set("access_token", data.access_token, {
        secure: true,
        sameSite: "Strict",
        expires: 1 / 24,
        path: "/",
      });
      Cookies.set("refresh_token", data.refresh_token, {
        secure: true,
        sameSite: "Strict",
        expires: 7,
        path: "/",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
