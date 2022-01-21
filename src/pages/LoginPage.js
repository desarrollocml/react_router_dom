import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function LoginPage() {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const previusObjectURl = location.state?.from;
  console.log("-->",previusObjectURl)
  const handleLogin = () => {
    auth.login();
    history.push(previusObjectURl|| "/dashboard");
    //si previusObjectURl es undefined redirige 
    //a otra ruta, ej:/dashboard
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={handleLogin}>Sigin</button>
    </div>
  );
}
