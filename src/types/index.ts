export type Role = "SUPER_ADMIN" | "ADMIN" | "REGISTRAR" | "USER";

/**
 * Internal - Within River state university
 * Domestic - Outside Rivers State University but within Nigeria
 * Foreign - Outside Nigeria
 */
export type DocumentRequestType = "INTERNAL" | "DOMESTIC" | "FOREIGN";

export type PaymentStatus = "PENDING" | "SUCCESSFUL" | "FAILED";

export type DocumentRequestStatus =
  | "PENDING"
  | "PROCESSING"
  | "APPROVED"
  | "DELIVERED"
  | "FAILED";

export type Profile = {
  id: string;
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;
  password: string;
  role: Role;
  refresh_token: string;
  refresh_token_expiry: string;
  last_login: string;
  is_online: boolean;
  created_at: string;
  updated_at: string;
};

export type Admin = {
  id: string;
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  password: string;
  role: Role;
  refresh_token?: string;
  refresh_token_expiry?: string;
  last_login?: string;
  is_online: boolean;
  created_at: string;
  updated_at: string;
};

export type Alumni = {
  id: string;
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  matric_number: string;
  gender?: "MALE" | "FEMALE";
  date_of_birth?: string;
  phone_number?: string;
  address?: string;
  faculty_id?: string;
  department_id?: string;
  password?: string;
  role: Role;
  refresh_token?: string;
  refresh_token_expiry?: string;
  last_login?: string;
  is_online?: boolean;
  created_at: string;
  updated_at: string;
  data?: any;
};

export type DocumentType = {
  id: string;
  name: string;
  description?: string;
  price: number;
  processing_fee: number;
  internal_price: number;
  domestic_price: number;
  foreign_price: number;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
};

export type DocumentRequest = {
  id: string;
  user_id: string;
  user?: Partial<Alumni>;
  document_type_id: string;
  document_type: Partial<DocumentType>;
  recipient_name?: string;
  recipient_email?: string;
  recipient_phone?: string;
  recipient_address?: string;
  reference_number: string;
  type: DocumentRequestType;
  status: DocumentRequestStatus;
  notes: string;
  created_at: string;
  updated_at: string;
};

export type PaymentGateway = {
  id: string;
  name: string;
  image?: string;
  secret_key?: string;
  public_key?: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

export type Payment = {
  id: string;
  user_id: string;
  user?: Partial<Alumni>;
  request_id: string;
  request?: Partial<DocumentRequest>;
  payment_gateway_id: string;
  payment_gateway?: Partial<PaymentGateway>;
  amount: number;
  status: PaymentStatus;
  reference?: string;
  access_code?: string;
  created_at: string;
  updated_at: string;
};
