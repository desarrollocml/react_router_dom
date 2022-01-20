import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Switch>{/* selecciona la primera ruta que coincide */}
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
        <Route path="/">{/* si home estubiese al principio, la eligiria siempre */}
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}
