import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Users.scss";
import User from "../User";

const Users = (props) => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setPeople(res.data));
  });
  return (
    <section className="users-container">
      {people.map((person) => {
        return <User name={person.name} bio={person.bio} />;
      })}
    </section>
  );
};

export default Users;
