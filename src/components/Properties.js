/* eslint-disable no-console */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

const Properties = () => {
  const [alert, setAlert] = useState({ message: "" });
  const [properties, setProperties] = useState([]);
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
      <Alert message={alert.message} />
      {properties.map((property) => (
        <div key={property._id} className="card-div">
          <PropertyCard key={property._id} details={property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
