import useAuth from "../auth/useAuth";

export default function PaymentsPage() {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div>
      <h1>PaymentsPage</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
