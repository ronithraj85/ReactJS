export interface Restaurant {
  id: number;
  name: string;
  email: string;
  cuisine: string;
  address: string;
  phone?: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  available: boolean;
}
