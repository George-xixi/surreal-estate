import React from "react";
import PropTypes from "prop-types";
import "../styles/property-card.css";

const PropertyCard = ({ details }) => {
  const { title, city, type, bedrooms, bathrooms, price, email } = details;
  const mailTo = `mailto:${email}?subject=Interested%20in%20${title}&body=I%20have%20seen%20your%20property%20on%20Surreal%20Estate%2C%20and%20would%20like%20to%20request%20more%20information%20and%20arrange%20a%20viewing%20please.`;
  return (
    <div className="property-card">
      <h3>{title}</h3>
      <p>
        {city} - {type}
      </p>
      <p>Beds - {bedrooms}</p>
      <p>Baths - {bathrooms}</p>
      <p className="card__price">£{price}</p>
      <a className="mail-to" href={mailTo}>
        Email
      </a>
    </div>
  );
};

PropertyCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;
