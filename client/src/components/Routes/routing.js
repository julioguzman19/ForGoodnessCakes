import React from "react";
import DB from "../DB";
import Menu from "../Menu";
import Main from "../Main";

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

export default function NestingExample() {
  return (
    <Router>
       <div>

          <div>
          <h1>For GoodNess Cakes</h1>
          </div>

          <div id="menu">
           <Link to="/">Home</Link>
          
            <Link to="/topics"> Order Now</Link>
          </div>

        <Link to="/topics"> Order Now</Link>
        <hr />
        <HomeBody />
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
      <Main />

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
      <Switch>
        <Route exact path={path}>
          <Menu />
          <DB />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${path}/:topicId`}></Route>
      </Switch>
    </div>
  );
}
