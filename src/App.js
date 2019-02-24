import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./App.css";
import Navbar from "./components/layout/navbar/navbar";
import Dashboard from "./components/dashboard/dashboard";
import PojectDetails from "./components/pojects/poject_details/poject_details";
import { Signin } from "./components/auth/signin/signin";
import Signup from "./components/auth/signup/signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App grey lighten-4">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route  path="/poject/:id" component={PojectDetails} />
            <Route  path="/signin" component={Signin} />
            <Route  path="/signup" component={Signup} />
          </Switch>
=        </div>
      </BrowserRouter>
    );
  }
}

export default App;
