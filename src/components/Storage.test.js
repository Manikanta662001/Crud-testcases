import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Storage from "./Storage";

describe("Check CRUD operations", () => {
  test("Should Show heading on page load", () => {
    render(<Storage />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });
  test("Check CRUD  Operations working",() => {
    render(<Storage />);
    //create testcase using fireEvent and userEvent
    const newUserInput = screen.getByPlaceholderText("Enter user name");
    //fireEvent.change(newUserInput, { target: { value: "ram" } });
    userEvent.type(screen.getByLabelText("Username:"),"ram")
    expect(screen.getByDisplayValue("ram")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByText("ram")).toBeInTheDocument();

    //update testcase
    fireEvent.click(screen.getByTestId("edit-button1"));
    const updateUserInput = screen.getByPlaceholderText("Enter user name");
    //fireEvent.change(updateUserInput, { target: { value: "lion" } });
    userEvent.clear(updateUserInput)
    userEvent.type(updateUserInput,"lion")
    expect(screen.getByDisplayValue("lion")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Update"));
    expect(screen.getByText("lion")).toBeInTheDocument();

    //Delete testcase
    window.confirm = jest.fn(() => false);
    fireEvent.click(screen.getByTestId("delete-button1"));
    expect(screen.getByText("lion")).toBeInTheDocument();

    window.confirm = jest.fn(() => true);
    fireEvent.click(screen.getByTestId("delete-button1"));
    expect(screen.queryByText("lion")).toBeNull();
    // screen.debug()

    //Reading data testcase
    const searchInput = screen.getByPlaceholderText("search for users");
    fireEvent.change(searchInput, { target: { value: "vamsi" } });
    expect(searchInput).toHaveValue("vamsi");
    expect(screen.getByText(/No data available/)).toBeInTheDocument();
  });
  test("should show alert if text is empty and if we submit", () => {
    render(<Storage />);
    const originalAlert = window.alert;
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(mockAlert).toHaveBeenCalledWith("enter a valid username");
    expect(mockAlert).toHaveBeenCalledTimes(1);
  });
});
