// /client/App.js
<<<<<<< HEAD
import React, { Component } from "react";
import Nav from "./components/Nav";
import DB from "./components/DB";
=======
import React, { Component } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Routing from './components/Routes/routing';


>>>>>>> b74c8c49fe028c0046e99afe8491d5c5003fc327

class App extends Component {
  render() {
<<<<<<< HEAD
    return (
      <div>
        <Nav />
        <DB />
      </div>
    );
=======
    
    return (
      <Routing></Routing>
    )
>>>>>>> b74c8c49fe028c0046e99afe8491d5c5003fc327
  }
}

export default App;
