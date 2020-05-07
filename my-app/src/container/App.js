import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

import Nav from "../components/Nav/Nav";
import CreateUser from "../components/Create-User";
import EditForm from "../components/EditForm";
import "./App.scss";
import Users from "../components/Users/Users";

function App() {
  const [people, setPeople] = useState([]);
  return (
    <div className="container">
      <Nav />
      <Route
        exact
        path="/users"
        render={() => <Users people={people} setPeople={setPeople} />}></Route>
      <Route path="/create-user" component={CreateUser}></Route>
      <Route
        path="/edit-user/:id"
        render={(props) => (
          <EditForm setPeople={setPeople} {...props} />
        )}></Route>
      <Redirect from="/" to="/users" />
    </div>
  );
}

export default App;
