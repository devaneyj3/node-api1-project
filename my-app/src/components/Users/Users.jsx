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

  const Delete = (id) => {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then((res) => console.log(res));
  };
  return (
    <section className="users-container">
      {people.map((person) => {
        return (
          <User
            key={person.id}
            name={person.name}
            bio={person.bio}
            delete={() => Delete(person.id)}
          />
        );
      })}
    </section>
  );
};

export default Users;
