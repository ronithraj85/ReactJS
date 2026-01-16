import UserProfile from "./components/user/UserProfile";
import UsersTable from "./components/user/UserTable";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Service</h1>

      {/* Example usage for testing */}
      <div className="mb-6">
        <UserProfile userId={1} />
      </div>

      <div className="mt-6">
        <UsersTable />
      </div>
    </div>
  );
}
