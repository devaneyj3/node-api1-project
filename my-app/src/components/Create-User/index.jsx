import React, { useState } from "react";

import { Alert } from "reactstrap";

import "./Create-User.scss";
import Axios from "axios";

const CreateUser = (props) => {
  const [data, setData] = useState({ name: "", bio: "" });
  const [message, setMessage] = useState("");

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(`Your submitting ${data.name} and ${data.bio}`);
    Axios.post("http://localhost:5000/api/users", data).then((res) => {
      console.log(res.data);
      setMessage(`You have added ${data.name}`);
    });
    setData({ name: "", bio: "" });
  };
  return (
    <>
      {message ? <Alert color="success">{message}</Alert> : null}
      <section className="form-container">
        <form onSubmit={submit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={change}
            value={data.name}
          />
          <input
            type="textarea"
            name="bio"
            placeholder="Enter Bio"
            onChange={change}
            value={data.bio}
          />
          <input type="submit" value="Add User" />
        </form>
      </section>
    </>
  );
};

export default CreateUser;
