// /client/App.js
import React, { Component } from "react";
import Routing from "./components/Routes/routing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

class App extends Component {
  render() {
    return <Routing></Routing>;
  }
}

export default App;
