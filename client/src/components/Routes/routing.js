import React from "react";
import DB from "../DB";
import Menu from "../Menu";
import Title from "../Title";
import HomeBody from "../HomeBody";
import "./style.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import "./style.css";
import LoginForm from "../LoginForm/loginform";


export default function NestingExample() {
  return (
    <Router>
      <div>
        <Title />

        <div id="menu">
          <Link to="/">Home</Link>

          <Link to="/topics"> Order Now</Link>
        </div>

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
<<<<<<< HEAD
    <div>
      <LoginForm />
      
    </div>
=======
    <switch>
      <div id="home">
        <HomeBody />
      </div>
    </switch>
>>>>>>> 6ee7d6619b1e88f5faf5b3f0655288787a524f01
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Menu />
          <DB />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topics />
        </Route>
        <Route path={`${path}/:topicId`}></Route>
      </Switch>
    </div>
  );
}
