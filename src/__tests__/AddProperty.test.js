import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders AddProperty page correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Add Property");
    const formFirstQuestion = screen.getByText("Give your listing a title");

    expect(asFragment()).toMatchSnapshot();
    expect(headingElement).toBeInTheDocument();
    expect(formFirstQuestion).toHaveAttribute("for", "title");
  });
});
