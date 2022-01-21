import useAuth from "../auth/useAuth";

export default function DashboardPage() {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div>
      <h1>DashboardPage</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
