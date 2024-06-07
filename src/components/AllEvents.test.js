import { render, screen, fireEvent } from "@testing-library/react";
import AllEvents from "./AllEvents";

describe("AllEvents.js file testcases", () => {
  it("Check for header", () => {
    render(<AllEvents />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
  it("Change event and blur event", () => {
    render(<AllEvents />);
    const inputbox = screen.getByLabelText("Name:");
    fireEvent.change(inputbox, { target: { value: "mani" } });
    expect(inputbox).toHaveValue("mani");
    expect(inputbox).toHaveClass('capital');
    fireEvent.blur(inputbox);
    expect(inputbox).toHaveValue("MANI");
    fireEvent.change(inputbox, { target: { value: "alpha" } });
    fireEvent.click(screen.getByRole("button", { name: "Change Boolean" }));
    expect(inputbox).toHaveValue("alpha");
  });
});
