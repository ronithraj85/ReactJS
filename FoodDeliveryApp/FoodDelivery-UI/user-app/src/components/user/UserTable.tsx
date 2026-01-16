import { useEffect, useState } from "react";
import { getUsers } from "../../services/User.service";
import type { User } from "../../types/User";

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="px-4 py-2">{u.name}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">{u.role}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    u.status === "ACTIVE" ? "bg-green-200" : "bg-gray-300"
                  }`}
                >
                  {u.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
