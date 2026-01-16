import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = getUserRole();
    if (role === "CUSTOMER") navigate("/profile");
    else if (role === "OWNER") navigate("/restaurant");
    else if (role === "ADMIN") navigate("/users");
    else navigate("/login"); // fallback if no token
  }, [navigate]);

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Food Delivery App</h1>
      <p className="text-lg text-gray-700 mb-8">
        Redirecting you to your dashboard...
      </p>
    </div>
  );
}
