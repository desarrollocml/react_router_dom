import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import Navbar from "../pages/Navbar";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/Contact" component={ContactPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
