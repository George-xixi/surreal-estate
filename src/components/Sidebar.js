import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const Sidebar = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="sidebar__form" onSubmit={handleSearch}>
        <label htmlFor="search">
          <h3 className="sidebar-search__header">Search for a property</h3>
          <input
            id="search"
            name="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <h3 className="sidebar-filter__header">Filter by :</h3>
      <div className="sidebar__links">
        <div className="sidebar__links__city">
          <h4>Filter City</h4>
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
        </div>
        <div className="sidebar__links__price">
          <h4>Price</h4>
          <Link
            className="sidebar__link"
            to={buildQueryString("sort", { price: 1 })}
          >
            High to low
          </Link>
          <Link
            className="sidebar__link"
            to={buildQueryString("sort", { price: -1 })}
          >
            Low to high
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
