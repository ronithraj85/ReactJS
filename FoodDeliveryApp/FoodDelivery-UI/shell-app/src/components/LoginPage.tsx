import { useNavigate } from "react-router-dom";
import { createMockJwt } from "../utils/mockJwt";
import toast from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role: "CUSTOMER" | "OWNER" | "ADMIN") => {
    // Show loading toast
    const loadingToast = toast.loading("Authenticating...");

    setTimeout(() => {
      const token = createMockJwt(role);
      localStorage.setItem("token", token);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Role-specific success toast
      if (role === "CUSTOMER") {
        toast.success("🛒 Welcome back, Customer — your dashboard is ready!", {
          style: { background: "#2563eb", color: "#fff" },
        });
      } else if (role === "OWNER") {
        toast.success("🍴 Welcome, Owner — restaurant dashboard loaded!", {
          style: { background: "#16a34a", color: "#fff" },
        });
      } else if (role === "ADMIN") {
        toast.success("🔒 Admin logged in — system controls unlocked!", {
          style: { background: "#f88158", color: "#fff" },
        });
      }

      navigate("/");
    }, 1000); // simulate short delay
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
