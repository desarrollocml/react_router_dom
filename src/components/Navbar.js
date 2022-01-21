import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function Navbar() {
  const auth = useAuth();
  const handlelogout=()=>{
    auth.logout();
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/categories" activeClassName="active">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/payments" activeClassName="active">
            Payments
          </NavLink>
        </li>
       <li>
          <button onClick={handlelogout}>Logout</button>
        </li>{/*  // To locate the bad setState()
         */}
      </ul>
    </nav>
  );
}
