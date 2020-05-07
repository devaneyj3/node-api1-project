import React from "react";
import { Route, Redirect } from "react-router-dom";

import Nav from "../components/Nav/Nav";
import CreateUser from "../components/Create-User";
import "./App.scss";
import Users from "../components/Users/Users";

function App() {
  return (
    <div className="container">
      <Nav />
      <Route exact path="/users" component={Users}></Route>
      <Route path="/create-user" component={CreateUser}></Route>
      <Redirect from="/" to="/users" />
    </div>
  );
}

export default App;
