export interface User {
  id: number;
  name: string;
  email: string;
  role: "CUSTOMER" | "OWNER" | "ADMIN";
  status: "ACTIVE" | "INACTIVE";
  phone?: string;
  address?: string;
}
