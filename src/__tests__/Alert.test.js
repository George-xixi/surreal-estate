import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays error message correctly", () => {
    const { asFragment } = render(<Alert message="Error!" />);
    const errorElement = screen.getByText("Error!");

    expect(asFragment()).toMatchSnapshot();
    expect(errorElement).toBeInTheDocument();
  });

  it("displays success message correctly", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!" success />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Success/).textContent).toBe("Success!");
  });

  it("does not render anything if there is no message prop", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
