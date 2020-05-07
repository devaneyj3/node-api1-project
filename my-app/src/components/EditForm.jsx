import React, { useState } from "react";

import { Alert, Button } from "reactstrap";

import "./Create-User/Create-User.scss";
import axios from "axios";

const EditForm = (props) => {
  const [data, setData] = useState({ name: "", bio: "" });
  const [message, setMessage] = useState("");

  const { id } = props.match.params;

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5000/api/users/${id}`, data).then((res) => {
      console.log(res.data);
      props.setPeople([res.data]);
      setMessage(`You have Edited ${res.data.name}`);
    });
    setData({ name: "", bio: "" });
  };
  return (
    <>
      <h1>Edit a User</h1>
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
          <Button color="success" type="submit">
            Edit User
          </Button>
        </form>
      </section>
    </>
  );
};
export default EditForm;
