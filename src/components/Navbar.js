import React from "react";
import { Link } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <BiHomeHeart className="home-icon" aria-label="Home icon" />
      <h1>surreal estate</h1>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">view properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">add property</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
