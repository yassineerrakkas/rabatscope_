import React from "react";
import "./../App.css";
const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav_links">
          <li>
            <a href="#">Théâtre</a>
          </li>
          <li>
            <a href="#">Musique</a>
          </li>
          <li>
            <a href="#">Opera</a>
          </li>
          <li>
            <a href="#">Ballet</a>
          </li>
          <li>
            <a href="#">Evenements</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
