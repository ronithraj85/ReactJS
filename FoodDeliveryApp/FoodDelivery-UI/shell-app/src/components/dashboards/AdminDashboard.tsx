import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  useEffect(() => {
    toast.success("Admin privileges granted", {
      style: { background: "#f97316", color: "white" }, // orange
      duration: 2500,
    });
  }, []);

  return (
    <div className="p-10 min-h-screen bg-orange-50">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        Welcome, Admin 🛡️
      </h1>
      <p className="mb-6">System overview:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>User management table</li>
        <li>System health metrics</li>
        <li>Quick moderation tools</li>
      </ul>
    </div>
  );
}
