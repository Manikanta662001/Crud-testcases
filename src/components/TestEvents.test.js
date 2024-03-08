import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import TestEvents from "./TestEvents";

afterEach(cleanup);
describe("Tests for TestEvents compo", () => {
  it("increment by clicking button", () => {
    render(<TestEvents />);
    const incbtn = screen.getByTestId("Arrow-up");
    fireEvent.click(incbtn);
    expect(screen.getByRole("heading")).toHaveTextContent(1);
  });
  it("decrement by clicking button", () => {
    render(<TestEvents />);
    const decbtn = screen.getByTestId("Arrow-down");
    fireEvent.click(decbtn);
    expect(screen.getByRole("heading")).toHaveTextContent(-1);
  });
});
