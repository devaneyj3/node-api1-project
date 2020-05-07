import React, { useEffect } from "react";
import axios from "axios";

import "./Users.scss";
import User from "../User";

import { useHistory } from "react-router-dom";

const Users = (props) => {
  let history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => props.setPeople(res.data));
  });

  const Delete = (id) => {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then((res) => console.log(res));
  };
  const Edit = (id) => {
    history.push(`/edit-user/${id}`);
  };
  return (
    <section className="users-container">
      {props.people.map((person) => {
        return (
          <User
            key={person.id}
            name={person.name}
            bio={person.bio}
            delete={() => Delete(person.id)}
            edit={() => Edit(person.id)}
          />
        );
      })}
    </section>
  );
};

export default Users;
