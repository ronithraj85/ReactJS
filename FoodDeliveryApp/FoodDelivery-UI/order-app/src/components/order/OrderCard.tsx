import type { Order } from "../../types/Order";

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h3 className="font-semibold">Order #{order.id}</h3>
      <p>
        Status:
        <span
          className={`px-2 py-1 rounded text-sm ${
            order.status === "DELIVERED"
              ? "bg-green-200"
              : order.status === "PENDING"
              ? "bg-yellow-200"
              : order.status === "CANCELLED"
              ? "bg-red-200"
              : "bg-gray-200"
          }`}
        >
          {order.status}
        </span>
      </p>
      <p>Total: ₹{order.totalAmount}</p>
    </div>
  );
}
