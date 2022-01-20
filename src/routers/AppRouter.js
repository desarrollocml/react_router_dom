import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
        <Route exact path="/">{/* con exact la selecciona */}
          <h1>Home</h1>
        </Route>
        <Route path="*">{/* la que no se encuentre */}
          <h1>404 Not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}
