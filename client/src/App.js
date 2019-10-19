// /client/App.js

import React, { Component } from "react";
import Nav from "./components/Nav";
//import DB from "./components/DB";
//import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Routing from "./components/Routes/routing";

class App extends Component {
  render() {
    return <Routing></Routing>;
  }
}

export default App;
