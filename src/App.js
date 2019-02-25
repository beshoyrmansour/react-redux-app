import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/navbar/navbar";
import { Signin } from "./components/auth/signin/signin";
import Signup from "./components/auth/signup/signup";

import Dashboard from "./components/dashboard/dashboard";

import PojectDetails from "./components/pojects/poject_details/poject_details";
import CreatePoject from "./components/pojects/create_poject/create_poject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App grey lighten-4">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/poject/new" component={CreatePoject} />
              <Route path="/poject/:id" component={PojectDetails} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
