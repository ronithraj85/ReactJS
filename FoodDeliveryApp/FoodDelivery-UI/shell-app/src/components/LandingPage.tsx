import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function LandingPage() {
  const role = getUserRole();

  if (role === "CUSTOMER") {
    return <Navigate to="/customer-dashboard" replace />;
  }

  if (role === "OWNER") {
    return <Navigate to="/owner-dashboard" replace />;
  }

  if (role === "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }

  // fallback if no role
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <p className="text-gray-600">Please log in to continue.</p>
    </div>
  );
}
