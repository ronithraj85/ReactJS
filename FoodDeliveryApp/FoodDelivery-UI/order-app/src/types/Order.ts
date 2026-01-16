export interface Order {
  id: number;
  customerId: number;
  restaurantId: number;
  items: { name: string; quantity: number; price: number }[];
  totalAmount: number;
  status: "PENDING" | "CONFIRMED" | "DELIVERED" | "CANCELLED";
  createdAt: string;
}
