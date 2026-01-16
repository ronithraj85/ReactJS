import { useEffect, useState } from "react";
import { getUserById } from "../../services/User.service";
import type { User } from "../../types/User";

export default function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserById(userId)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [userId]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="p-6 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {user.address || "N/A"}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Status:</strong> {user.status}
        </p>
      </div>
    </div>
  );
}
