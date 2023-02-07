import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders app correctly", () => {
    const { asFragment } = render(<App />);
    const h1Element = screen.getByText("Surreal Estate");

    expect(asFragment()).toMatchSnapshot();
    expect(h1Element).toBeInTheDocument();
  });
});
