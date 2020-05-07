import React from "react";

import { Button } from "reactstrap";

import "./User.scss";

const User = (props) => {
  return (
    <section className="User">
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <Button color="primary">Edit</Button>
      <Button color="danger" onClick={props.delete}>
        Delete
      </Button>
    </section>
  );
};

export default User;
