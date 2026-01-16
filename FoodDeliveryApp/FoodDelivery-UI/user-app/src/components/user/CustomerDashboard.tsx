import { getUserRole } from "../../../../shell-app/src/utils/auth";
import { Navigate } from "react-router-dom";

export default function CustomerDashboard() {
  const role = getUserRole();
  if (role !== "CUSTOMER") {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div className="p-10">
      {role === "CUSTOMER" && (
        <h1 className="text-3xl font-bold mb-6">Welcome, Customer 👤</h1>
      )}
      <p className="text-gray-700 mb-4">
        Here’s a quick look at your activity:
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Recent Orders summary</li>
        <li>Quick “Reorder” button</li>
        <li>Profile shortcuts</li>
      </ul>
    </div>
  );
}
