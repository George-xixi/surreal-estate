import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "1 Bed Flat",
    city: "Manchester",
    type: "Flat",
    bedrooms: 1,
    bathrooms: 2,
    price: 1000,
    email: "george@clubpenguin.com",
  };

  it("renders title correctly", () => {
    const { asFragment } = render(<PropertyCard details={validProps} />);
    const titleElement = screen.getByText("1 Bed Flat");

    expect(asFragment()).toMatchSnapshot();
    expect(titleElement).toBeInTheDocument();
  });

  it("renders city correctly", () => {
    const { asFragment } = render(<PropertyCard details={validProps} />);
    const cityElement = screen.getByText(/Manchester/);

    expect(asFragment()).toMatchSnapshot();
    expect(cityElement).toHaveTextContent("Manchester - Flat");
  });

  it("renders type correctly", () => {
    const { asFragment } = render(<PropertyCard details={validProps} />);
    const typeElement = screen.getByText(/ - Flat/);

    expect(asFragment()).toMatchSnapshot();
    expect(typeElement).toHaveTextContent("Manchester - Flat");
  });

  it("renders bedrooms correctly", () => {
    const { asFragment } = render(<PropertyCard details={validProps} />);
    const bedElement = screen.getByText("Beds - 1");

    expect(asFragment()).toMatchSnapshot();
    expect(bedElement).toBeInTheDocument();
  });

  it("renders bathrooms correctly", () => {
    const { asFragment } = render(<PropertyCard details={validProps} />);
    const bathElement = screen.getByText("Baths - 2");

    expect(asFragment()).toMatchSnapshot();
    expect(bathElement).toBeInTheDocument();
  });

  it("renders price correctly", () => {
    const { asFragment } = render(<PropertyCard details={validProps} />);
    const priceElement = screen.getByText(/1000/);

    expect(asFragment()).toMatchSnapshot();
    expect(priceElement).toHaveTextContent("£1000");
  });

  it("renders email correctly", () => {
    const { asFragment } = render(<PropertyCard details={validProps} />);
    const emailElement = screen.getByText("Email");

    expect(asFragment()).toMatchSnapshot();
    expect(emailElement).toHaveAttribute("href");
  });
});
