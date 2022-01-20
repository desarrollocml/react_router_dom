import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null;
const user = {id:1,username:"luis50"}
export default function PrivateRoute({component:Component,
     ...rest}) {
        // const {user,logn,logout}=useAuth()
         const auth =useAuth()
  return (
      <Route {...rest} >
          {
           auth.isLogged()
           ?   
           <Component></Component>
           :
           <Redirect to="/login"></Redirect>
          }
      </Route>
  )
}
