import { getUserRole } from "../../../../shell-app/src/utils/auth";
import { Navigate } from "react-router-dom";

export default function OwnerDashboard() {
  const role = getUserRole();
  if (role !== "OWNER") {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div className="p-10">
      {role === "OWNER" && (
        <h1 className="text-3xl font-bold mb-6">Welcome, Owner 🧑‍🍳</h1>
      )}
      <p className="text-gray-700 mb-4">
        Here’s a quick look at your restaurant:
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Menu management</li>
        <li>Restaurant profile</li>
        <li>Order tracking</li>
      </ul>
    </div>
  );
}
