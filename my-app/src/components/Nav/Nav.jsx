import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = (props) => {
  return (
    <section>
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/create-user">Create User</Link>
      </nav>
    </section>
  );
};

export default Nav;
