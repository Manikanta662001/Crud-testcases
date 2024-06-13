import { render, screen, fireEvent } from "@testing-library/react";
import AllEvents from "./AllEvents";

describe("AllEvents.js file testcases", () => {
  it("Check for header", () => {
    render(<AllEvents />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });
  it("Change event and blur event", () => {
    render(<AllEvents />);
    const inputbox = screen.getByLabelText("Name:");
    expect(inputbox).toBeRequired();
    expect(inputbox).toHaveAttribute('required');
    expect(inputbox).not.toHaveAttribute('disabled');
    fireEvent.change(inputbox, { target: { value: "mani" } });
    expect(inputbox).toHaveValue("mani");
    expect(inputbox).toHaveClass("capital");
    fireEvent.blur(inputbox);
    expect(inputbox).toHaveValue("MANI");
    fireEvent.change(inputbox, { target: { value: "alpha" } });
    fireEvent.click(screen.getByRole("button", { name: "Change Boolean" }));
    expect(inputbox).toHaveValue("alpha");
  });
  it("Focus event ", () => {
    render(<AllEvents />);
    const locationBox = screen.getByLabelText("Location:");
    fireEvent.focus(locationBox);
    expect(locationBox).toHaveDisplayValue("HYB");
    expect(locationBox).toHaveClass("loc focused");
    fireEvent.change(locationBox, { target: { value: 'BLR' } });
    expect(locationBox.value).toBe("BLR");
    fireEvent.blur(locationBox);
    expect(locationBox).not.toHaveClass("loc focused");
  });
  it("Select tag testing", () => {
    render(<AllEvents />);
    const selectBox = screen.getByLabelText("Select State:");
    fireEvent.click(selectBox);
    const allOptions = screen.getAllByRole("option");
    expect(allOptions).toHaveLength(7);
    expect(allOptions.length).toBe(7);
    // `fireEvent.click` on options doesn't change value directly
    //fireEvent.click(allOptions[2]);
    expect(screen.queryByText("Selected State:")).toBeNull();
    fireEvent.change(selectBox, { target: { value: "TS" } });
    expect(selectBox.value).toBe("TS");
    expect(screen.getByText("Selected State:TS")).toBeInTheDocument();
  });
  it("Radio buttons testing", () => {
    render(<AllEvents />);
    const malebtn = screen.getByLabelText("Male");
    const femalebtn = screen.getByLabelText("Female");
    expect(malebtn).not.toBeChecked();
    expect(femalebtn).not.toBeChecked();
    fireEvent.click(malebtn);
    expect(malebtn).toBeChecked();
    expect(femalebtn).not.toBeChecked();
    fireEvent.click(femalebtn);
    expect(malebtn).not.toBeChecked();
    expect(femalebtn).toBeChecked();
  });
  it("toBeDisabled", () => {
    render(<AllEvents />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });
  it("toBeTruthy", () => {
    const sum = 2 + 8;
    expect(sum).toBeTruthy();
    expect(sum).toBeGreaterThan(8);
    expect(sum).toBeLessThan(11);
  });
  it("KeyDown event", () => {
    render(<AllEvents />);
    const keyDownInput = screen.getByPlaceholderText('Enter Something.....')
    fireEvent.keyDown(keyDownInput, { key: 'A' });
    expect(keyDownInput.value).toBe('A')
  })
  it('KeyUp event', () => {
    render(<AllEvents />);
    const keyUpInput = screen.getByPlaceholderText('Enter Something.....');
    fireEvent.keyUp(keyUpInput, { key: 'B' });
    expect(screen.getByText('Key Released: B')).toBeInTheDocument();
  });
});
