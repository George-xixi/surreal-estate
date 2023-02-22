import React, { useState } from "react";
import addProperty from "../requests/addProperty";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handleAddProperty = (e) => {
    e.preventDefault();
    setAlert({ message: "", isSuccess: false });
    addProperty(fields, setAlert);
  };
  const handleFieldChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-property">
      <h2 className="add-property__heading">Add Property</h2>
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddProperty} className="add-property__form">
        <div className="form__title">
          <label htmlFor="title" data-testId="first-label">
            <p>Give your listing a title</p>
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form__selector selector__city">
          <label htmlFor="city">
            <p>City</p>
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="form__selector selector__type">
          <label htmlFor="type">
            <p>Type</p>
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="form__number-input number__beds">
          <label htmlFor="bedrooms">
            <p>Beds</p>
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              inputMode="numeric"
              min={0}
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form__number-input number__baths">
          <label htmlFor="bathrooms">
            <p>Baths</p>
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              inputMode="numeric"
              min={0}
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form__number-input number__price">
          <label htmlFor="price">
            <p>Price</p>
            <input
              id="price"
              name="price"
              type="number"
              inputMode="numeric"
              min={0}
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form__email-input">
          <label htmlFor="email">
            <p>Email</p>
            <input
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form__button">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
