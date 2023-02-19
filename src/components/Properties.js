import React from "react";
import "../styles/properties.css";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className="properties">
      <h2 className="properties__heading">Properties</h2>
      <PropertyCard
        details={{
          title: "title for property",
          city: "Manchester",
          type: "Flat",
          bedrooms: 1,
          bathrooms: 2,
          price: 10000,
          email: "test@test.com",
        }}
      />
      <PropertyCard
        details={{
          title: "title for property",
          city: "Manchester",
          type: "Flat",
          bedrooms: 1,
          bathrooms: 2,
          price: 10000,
          email: "test@test.com",
        }}
      />
      <PropertyCard
        details={{
          title: "title for property",
          city: "Manchester",
          type: "Flat",
          bedrooms: 1,
          bathrooms: 2,
          price: 10000,
          email: "test@test.com",
        }}
      />
    </div>
  );
};

export default Properties;
