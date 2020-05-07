import React, { useState } from "react";

import "./Create-User.scss";

const CreateUser = (props) => {
  const [data, setData] = useState({ name: "", bio: "" });

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(`Your submitting ${data.name} and ${data.bio}`);
    setData({ name: "", bio: "" });
  };
  return (
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
  );
};

export default CreateUser;
