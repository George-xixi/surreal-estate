import "../styles/navbar.css";
import { BiHomeHeart } from "react-icons/bi";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <BiHomeHeart className="home-icon" aria-label="Home icon" />
      <h1>surreal estate</h1>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="/">view properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="/">add property</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
