import type { User } from "../../types/User";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h3 className="font-semibold">{user.name}</h3>
      <p>{user.email}</p>
      <span className="text-sm text-gray-600">{user.role}</span>
    </div>
  );
}
