/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <input id="collapsible" className="toggle" type="checkbox" />
      <label htmlFor="collapsible" className="sidebar__header">
        Filter by :
      </label>
      <div className="sidebar__links">
        <h3>City</h3>
        <Link
          className="sidebar__link"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
        <Link
          className="sidebar__link"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>
        <Link
          className="sidebar__link"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
        <Link
          className="sidebar__link"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
        <h3>Price</h3>
        <Link
          className="sidebar__link"
          to={buildQueryString("sort", { price: 1 })}
        >
          high to low
        </Link>
        <Link
          className="sidebar__link"
          to={buildQueryString("sort", { price: -1 })}
        >
          low to high
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
