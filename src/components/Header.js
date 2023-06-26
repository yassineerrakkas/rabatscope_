import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="header">
      <Link to="/Home">
        <img class="logo" src={require("../images/logo-bw-side.png")} />
      </Link>

      <div>
        <Link to="/Login">
          <button class="login">Login</button>
        </Link>

        <Link to="Register">
          <button class="signin">Register</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
