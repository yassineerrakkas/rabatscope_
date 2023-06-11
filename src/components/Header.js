import React from "react";
import "./../App.css";
const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src={require("../images/logo-bw-side.png")}
        alt="logo"
      />
      <a href="#">
        <button className="login">Login</button>
      </a>
      <a href="#">
        <button className="signin">Sign Up</button>
      </a>
    </header>
  );
};

export default Header;
