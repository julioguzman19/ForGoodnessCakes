import React from "react";
import DB from "../DB";
<<<<<<< HEAD
=======
import Menu from "../Menu";
import Title from "../Title";
import HomeBody from "../HomeBody";
import "./style.css";
>>>>>>> dev

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

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
    <switch>
      <div id="home">
        <HomeBody />
      </div>
    </switch>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
<<<<<<< HEAD
      <h2>Your Order</h2>
      
    
      <Switch>
        <Route exact path={path}>
          <h4 style={{color: "green"}}>Please Choose From Our Menu : </h4>

=======
      <Switch>
        <Route exact path={path}>
          <Menu />
>>>>>>> dev
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
