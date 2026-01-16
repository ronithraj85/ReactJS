import { useState } from "react";
import toast from "react-hot-toast";

interface Order {
  id: number;
  item: string;
  date: string;
  status: "Delivered" | "Pending" | "Cancelled";
}

const mockOrders: Order[] = [
  {
    id: 101,
    item: "Paneer Butter Masala",
    date: "2026-01-10",
    status: "Delivered",
  },
  { id: 102, item: "Chicken Biryani", date: "2026-01-12", status: "Pending" },
  { id: 103, item: "Veg Pizza", date: "2026-01-14", status: "Cancelled" },
];

export default function CustomerOrders() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const handleReorder = (order: Order) => {
    toast.success(`Reordered: ${order.item}`, {
      style: { background: "#2563eb", color: "white" }, // blue theme
      duration: 2000,
    });
    // In real app: call API to place order again
  };

  return (
    <div className="p-10 min-h-screen bg-blue-50">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Your Orders 🛒</h1>
      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Item</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-blue-50">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.item}</td>
              <td className="p-3">{order.date}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-3">
                <button
                  onClick={() => handleReorder(order)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Reorder
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
