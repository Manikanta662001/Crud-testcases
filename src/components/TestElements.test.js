import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import TestElements from "./TestElements";

afterEach(cleanup);
describe("Tests for TestElements", () => {
  it("Should be equal to 0:", () => {
    render(<TestElements />);
    expect(screen.getByTestId("count")).toHaveTextContent(0);
  });

  it("Increment by 1 if click button", () => {
    render(<TestElements />);
    fireEvent.click(screen.getByText("Increment"));
    screen.debug();
    // expect(screen.getByTestId("count")).toHaveTextContent(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(1);
  });

  it("incrementbtn Should be enabled :", () => {
    render(<TestElements />);
    const incrementbtn = screen.getByText("Increment");
    // expect(incrementbtn).not.toHaveAttribute("disabled");
    expect(incrementbtn).not.toBeDisabled();
  });
  it("decrementbtn Should be disabled :", () => {
    render(<TestElements />);
    const decrementbtn = screen.getByText("Decrement");
    // expect(decrementbtn).toHaveAttribute('disabled')
    expect(decrementbtn).toBeDisabled();
  });
});
