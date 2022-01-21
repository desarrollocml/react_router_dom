import { useHistory } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function LoginPage() {
  const auth = useAuth();
  const history = useHistory();
  const handleLogin = () => {
    auth.login();
    history.push("/dashboard");
  };
 
  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={handleLogin}>Sigin</button>
      
    </div>
  );
}
