import { getUserRole } from "../../../../shell-app/src/utils/auth";
import { Navigate } from "react-router-dom";

export default function OrderList({ userId }) {
  const role = getUserRole();
  if (role !== "CUSTOMER") {
    console.log("user", userId);
    return <Navigate to="/unauthorized" replace />;
  }
  return (
    <div className="p-10">
      {role === "CUSTOMER" && (
        <h1 className="text-3xl font-bold mb-6">Welcome back, Customer 👤</h1>
      )}
      <p className="text-gray-700 mb-4">Here are your recent orders:</p>
      {/* Example table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Item</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">101</td>
            <td className="border p-2">Paneer Butter Masala</td>
            <td className="border p-2">2026-01-10</td>
            <td className="border p-2">Delivered</td>
            <td className="border p-2">
              <button className="text-blue-600">Reorder</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">102</td>
            <td className="border p-2">Chicken Biryani</td>
            <td className="border p-2">2026-01-12</td>
            <td className="border p-2">Pending</td>
            <td className="border p-2">
              <button className="text-blue-600">Reorder</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">103</td>
            <td className="border p-2">Veg Pizza</td>
            <td className="border p-2">2026-01-14</td>
            <td className="border p-2">Cancelled</td>
            <td className="border p-2">
              <button className="text-blue-600">Reorder</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
