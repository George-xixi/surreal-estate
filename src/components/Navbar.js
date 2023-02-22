import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/fa";
import { BiHomeHeart } from "react-icons/bi";
import "../styles/navbar.css";

const Navbar = ({ onLogin, userID, onLogout }) => {
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
      <div className="fb-button">
        {userID ? (
          <button className="fb-logout-button" type="button" onClick={onLogout}>
            Sign out
          </button>
        ) : (
          <FacebookLogin
            appId="519196123675566"
            callback={onLogin}
            userID={userID}
            cssClass="my-facebook-button-class"
            icon={<FaFacebookF className="fb-icon" />}
          />
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};

export default Navbar;
