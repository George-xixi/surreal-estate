import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders Navbar correctly", () => {
    const { asFragment } = render(<Navbar />);
    const headingElement = screen.getByText("surreal estate");
    const viewPropertiesLink = screen.getByText("view properties");
    const addPropertyLink = screen.getByText("add property");

    expect(asFragment()).toMatchSnapshot();
    expect(headingElement).toBeInTheDocument();
    expect(viewPropertiesLink).toBeInTheDocument();
    expect(addPropertyLink).toBeInTheDocument();
  });
});
