import { useEffect, useState } from "react";
import { getOrdersByUser } from "../../services/Order.service";
import type { Order } from "../../types/Order";
import OrderCard from "./OrderCard";

export default function OrderList({ userId }: { userId: number }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrdersByUser(userId)
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
