/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <input id="collapsible" className="toggle" type="checkbox" />
      <label htmlFor="collapsible" className="sidebar__header">
        Filter by :
      </label>
      <div className="sidebar__div">
        <Link className="sidebar__link" to={`/?query={"city": "Manchester"}`}>
          Manchester
        </Link>
        <Link className="sidebar__link" to={`/?query={"city": "Liverpool"}`}>
          Liverpool
        </Link>
        <Link className="sidebar__link" to={`/?query={"city": "Leeds"}`}>
          Leeds
        </Link>
        <Link className="sidebar__link" to={`/?query={"city": "Sheffield"}`}>
          Sheffield
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
