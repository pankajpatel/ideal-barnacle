import { Switch, Route } from "wouter";
import { Home } from "./Home";

export const RoutedPages = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={Home} />
  </Switch>
);
