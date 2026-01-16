import { Navigate, useLocation } from "react-router-dom";
import { getUserRole } from "../utils/auth";
import Layout from "./Layout";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const role = getUserRole();

  if (!role) {
    toast.error("Please login to continue", { duration: 2000 });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  <Navbar />;
  return <Layout>{children}</Layout>;
}
