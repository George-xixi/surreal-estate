/* eslint-disable no-console */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import Sidebar from "./Sidebar";
import "../styles/properties.css";

const Properties = ({ userID }) => {
  const { search } = useLocation();
  const [alert, setAlert] = useState({ message: "" });
  const [properties, setProperties] = useState([]);
  const handleSaveProperty = (propertyID) => {
    try {
      axios.post("http://localhost:4000/api/v1/Favourite", {
        propertyListing: propertyID,
        fbUserId: userID,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
        .then(({ data }) => setProperties(data));
    } catch (e) {
      setAlert({
        message: "There was an error with your search. Please try again later.",
      });
    }
  }, [search]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/v1/PropertyListing")
        .then(({ data }) => setProperties(data));
    } catch (e) {
      setAlert({ message: "Server error. Please try again later." });
      console.log(e);
    }
  }, []);

  return (
    <div className="properties">
      <h2 className="properties__heading">Properties</h2>
      <div className="properties__search">
        <Sidebar />
      </div>
      <Alert message={alert.message} />
      <div className="properties__results">
        {properties.map((property) => (
          <div key={property._id} className="card-div">
            <PropertyCard
              key={property._id}
              details={property}
              userID={userID}
              onSaveProperty={handleSaveProperty}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Properties;
