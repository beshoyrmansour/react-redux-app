import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom"

import "./App.css";
import Navbar from "./components/layout/navbar/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
