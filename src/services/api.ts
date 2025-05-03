import {
  Admin,
  Alumni,
  DocumentRequest,
  DocumentType,
  Payment,
  PaymentGateway,
  Profile,
} from "@/types";
import api from "./axios";

type LoginAdmin = {
  email: string;
  password: string;
};

/*****************************************
                   AUTH
 ****************************************/

export async function loginAdmin(data: LoginAdmin) {
  const response = await api.post("auth/login/admin", data);
  return response.data;
}

export async function getProfile() {
  const response = await api.get<Profile>("auth/me");
  return response.data;
}

/*****************************************
                   ADMINS
 ****************************************/

export async function getAdmins() {
  const response = await api.get<Admin[]>("admins");
  return response.data;
}

/*****************************************
                   USERS
 ****************************************/

export async function getUsers() {
  const response = await api.get<Alumni[]>("users");
  return response.data;
}

/*****************************************
           DOCUMENT REQUESTS
 ****************************************/
export async function getDocumentRequests() {
  const response = await api.get<DocumentRequest[]>("document_requests");
  return response.data;
}

/*****************************************
           PAYMENT GATEWAYS
 ****************************************/
export async function getPaymentGateways() {
  const response = await api.get<PaymentGateway[]>("payment_gateways");
  return response.data;
}

/*****************************************
           DOCUMENT TYPES
 ****************************************/
export async function getDocumentTypes() {
  const response = await api.get<DocumentType[]>("document_types");
  return response.data;
}

/*****************************************
           PAYMENTS
 ****************************************/
export async function getPayments() {
  const response = await api.get<Payment[]>("payments");
  return response.data;
}
