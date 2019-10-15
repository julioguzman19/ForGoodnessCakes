// client/src/App.js
import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <h2>For Goodness Cakes</h2>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
