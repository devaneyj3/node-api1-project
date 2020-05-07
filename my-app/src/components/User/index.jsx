import React from "react";

import "./User.scss";

const User = (props) => {
  return (
    <section className="User">
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </section>
  );
};

export default User;
