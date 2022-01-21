import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null;
//const user = {id:1,username:"luis50"}
export default function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();
  const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component></Component>
      ) : (
        <Redirect to={{pathname:"/login",state:{from:location}}}></Redirect>
      )}
    </Route>
  );
}
