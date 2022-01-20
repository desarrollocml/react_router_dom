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
        <Route path="/about">
          <AboutPage></AboutPage>
        </Route>
        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="*">
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </Router>
  );
}
