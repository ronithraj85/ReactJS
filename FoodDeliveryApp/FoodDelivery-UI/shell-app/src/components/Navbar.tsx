import { Link, useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";
import toast from "react-hot-toast";

export default function Navbar() {
  const role = getUserRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("You have been logged out", {
      duration: 2000,
    });
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="flex space-x-4">
        {role === "CUSTOMER" && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/orders">Orders</Link>
          </>
        )}
        {role === "OWNER" && (
          <>
            <Link to="/restaurant">Restaurant</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}
        {role === "ADMIN" && <Link to="/users">Users</Link>}
      </div>

      {role && (
        <button
          onClick={handleLogout}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      )}
    </nav>
  );
}
