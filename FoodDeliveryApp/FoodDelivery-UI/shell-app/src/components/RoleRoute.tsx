import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";
import type { JSX } from "react";

export default function RoleRoute({
  role,
  children,
}: {
  role: string;
  children: JSX.Element;
}) {
  const userRole = getUserRole();

  if (!userRole) {
    return <Navigate to="/unauthorized" />;
  }

  return userRole === role ? children : <Navigate to="/unauthorized" />;
}
