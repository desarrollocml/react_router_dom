import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CategoriesPage from "../pages/CategoriesPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Navbar from "../components/Navbar";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/Contact" component={ContactPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile/:username" component={ProfilePage} />
        <Route exact path="/categories" component={CategoriesPage} />

        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />

        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/payments" component={PaymentsPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
