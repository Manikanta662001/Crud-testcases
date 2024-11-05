import { render, fireEvent, screen, waitFor,act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";
jest.useFakeTimers();
describe("Register component testcases", () => {
  it("render correctly or not", () => {
    render(<Register />);
    let element = screen.getByRole("heading", { level: 2 });
    expect(element).toBeInTheDocument();
  });
  it("render correctly or not of subheading", () => {
    render(<Register />);
    let element = screen.getByRole("heading", {
      level: 6,
      name: /Please enter your details below to register yourself./i,
    });
    expect(element).toBeInTheDocument();
  });

  it("we need to show error message when fields or inputs are empty", () => {
    render(<Register />);
    const btnelement = screen.getByRole("button", { name: /Register/i });
    fireEvent.click(btnelement);
    // screen.debug()//to see the structure of the DOM at that moment when we trigger the click event.
    const alert_msg = screen.getByRole("alert");
    expect(alert_msg).toBeInTheDocument();
    expect(alert_msg).toHaveTextContent(/All the fields are required./);
  });
  it("Should not show error message intially or when page loads", () => {
    render(<Register />);
    const alertelement = screen.queryByRole("alert");
    expect(alertelement).not.toBeInTheDocument();
  });
  it("should show success message when the registration is successful.", async () => {
    render(<Register />);

    userEvent.type(screen.getByPlaceholderText("Enter your name"), "Mani");
    userEvent.type(
      screen.getByPlaceholderText("Enter your email"),
      "mani@gmail.com"
    );
    userEvent.type(
      screen.getByPlaceholderText("Enter your password"),
      "Mani@6620"
    );
    const buttonElement = screen.getByRole("button", { name: /Register/i });
    act(()=>{
      userEvent.click(buttonElement);
    });
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent('You have successfully registered');
    act(()=>{
      jest.advanceTimersByTime(3000)
    })
    expect(screen.queryByText('You have successfully registered')).toBeNull();
  });
});
