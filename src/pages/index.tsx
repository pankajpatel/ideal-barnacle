import { Link, Switch, Route } from "wouter";
import { Home } from "./Home";

export const RoutedPages = () => {
  return (
    <div>
      <h1>Routed Pages</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={Home} />
      </Switch>
    </div>
  );
};
