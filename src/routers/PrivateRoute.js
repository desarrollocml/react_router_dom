import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

//const user = null;
const user = {id:1,username:"luis50"}
export default function PrivateRoute({component:Component,
     ...rest}) {
  return (
      <Route {...rest} >
          {
           user
           ?   
           <Component></Component>
           :
           <Redirect to="/login"></Redirect>
          }
      </Route>
  )
}
