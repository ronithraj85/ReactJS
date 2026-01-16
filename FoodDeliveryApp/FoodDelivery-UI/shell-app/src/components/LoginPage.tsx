import { useNavigate } from "react-router-dom";
import { createMockJwt } from "../utils/mockJwt";
import toast from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role: "CUSTOMER" | "OWNER" | "ADMIN") => {
    const token = createMockJwt(role);
    localStorage.setItem("token", token);

    toast.success(`Logged in as ${role}`, {
      duration: 2000,
    });

    navigate("/"); // triggers LandingPage redirect
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <p className="mb-4">Choose a role to simulate login:</p>
      <div className="flex justify-center space-x-6">
        <button
          onClick={() => handleLogin("CUSTOMER")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Login as Customer
        </button>
        <button
          onClick={() => handleLogin("OWNER")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Login as Owner
        </button>
        <button
          onClick={() => handleLogin("ADMIN")}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}
