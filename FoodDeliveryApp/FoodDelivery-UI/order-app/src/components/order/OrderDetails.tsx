import { useEffect, useState } from "react";
import { getOrderById } from "../../services/Order.service";
import type { Order } from "../../types/Order";

export default function OrderDetails({ orderId }: { orderId: number }) {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    getOrderById(orderId)
      .then((res) => setOrder(res.data))
      .catch((err) => console.error(err));
  }, [orderId]);

  if (!order) return <p>Loading order details...</p>;

  return (
    <div className="p-6 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Order #{order.id}</h2>
      <ul className="list-disc pl-6">
        {order.items.map((item, idx) => (
          <li key={idx}>
            {item.name} x {item.quantity} — ₹{item.price}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold">Total: ₹{order.totalAmount}</p>
      <p>Status: {order.status}</p>
    </div>
  );
}
