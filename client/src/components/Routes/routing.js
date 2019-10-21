import React from "react";
import DB from "../DB";
import Title from "../Title";
import Menu from "../Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import "./style.css";

export default function NestingExample() {
  return (
    <Router>
      <div>
        <Title />
        <Link to="/" class="t">
          Home
        </Link>

        <Link to="/topics"> Order Now</Link>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2></h2>
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Your Order</h2>

      <div></div>

      <Switch>
        <Route exact path={path}>
          <h4 style={{ color: "black" }}>Please Choose From Our Menu : </h4>
          <Menu />
          <DB />
        </Route>
        <Route path={`${path}/:topicId`}></Route>
      </Switch>
    </div>
  );
}
