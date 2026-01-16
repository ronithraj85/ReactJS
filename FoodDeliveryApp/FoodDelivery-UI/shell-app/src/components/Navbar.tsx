import { Link, useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";
import toast from "react-hot-toast";

export default function Navbar() {
  const role = getUserRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show loading toast
    const loadingToast = toast.loading("Logging out...");

    setTimeout(() => {
      localStorage.removeItem("token");

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Role-specific logout toast
      if (role === "CUSTOMER") {
        toast.success("🛒 Logged out — see you soon, Customer", {
          style: { background: "#2563eb", color: "#fff" },
        });
      } else if (role === "OWNER") {
        toast.success("🍴 Logged out — restaurant dashboard closed", {
          style: { background: "#16a34a", color: "#fff" },
        });
      } else if (role === "ADMIN") {
        toast.success("🔒 Admin logged out — system secured", {
          style: { background: "#7e22ce", color: "#fff" },
        });
      } else {
        toast.success("✅ Logged out successfully", {
          style: { background: "#374151", color: "#fff" },
        });
      }

      navigate("/login");
    }, 1000); // simulate short delay
  };

  return (
    <nav className="flex flex-wrap gap-6 bg-gray-800 text-white p-4">
      {/* links */}
      <button onClick={handleLogout} className="hover:text-red-400 ml-auto">
        Logout
      </button>
    </nav>
  );
}
