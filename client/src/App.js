// /client/App.js
<<<<<<< HEAD

import React, { Component } from "react";
import Nav from "./components/Nav";
//import DB from "./components/DB";
//import axios from "axios";
=======
import React, { Component } from 'react';
import axios from 'axios';
>>>>>>> 9d6e181bf4f6915c1940438d372dd70d8829e628

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
<<<<<<< HEAD
import Routing from "./components/Routes/routing";

class App extends Component {
  render() {
    return <Routing></Routing>;
  }
=======
import Routing from './components/Routes/routing';



class App extends Component {
  render() {
    return (
      <Routing></Routing>
    )
  };
>>>>>>> 9d6e181bf4f6915c1940438d372dd70d8829e628
}

export default App;
