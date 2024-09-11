import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Apicall from "./Apicall";

const url = "https://jsonplaceholder.typicode.com/posts";
// Mock Axios module
jest.mock("axios");
describe("Apicall Component", () => {
  it("fetches and displays data on button click", async () => {
    // Mock data to be returned by Axios
    const mockData = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];

    // Mock Axios get method
    axios.get.mockResolvedValueOnce({ data: mockData, status: 200 });

    // Render the component
    render(<Apicall url={url} />);

    // Click the button to trigger the API call
    userEvent.click(screen.getByRole("button"));

    // Wait for the data to be displayed
    await waitFor(() => {
      const items = screen.getAllByRole("listitem");
      screen.debug();
      expect(items).toHaveLength(2);
    });
    // Check if the API call result is rendered
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  });

  it("fetches and displays error message on button click", async () => {
    // Mock Axios get method
    axios.get.mockResolvedValueOnce({
      data: { message: "Something Went Wrong" },
      status: 400,
    });

    // Render the component
    render(<Apicall url={url} />);

    // Click the button to trigger the API call
    userEvent.click(screen.getByRole("button"));

    // Wait for the error message to be displayed
    await waitFor(() => {
      const errorMessage = screen.getByText(/Something Went Wrong/);
      expect(errorMessage).toBeInTheDocument();
      const element = screen.getByTestId("error-span");
      expect(element).toBeVisible();
      expect(element).toHaveClass("error");
      expect(element).toHaveStyle({ color: "red" });
    });
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  });

  it("handles API error and displays error message", async () => {
    // Mock Axios get method to simulate an error
    axios.get.mockRejectedValueOnce({ message: "API error" });

    // Render the component
    render(<Apicall url={url} />);

    // Click the button to trigger the API call
    userEvent.click(screen.getByText("Api call"));
    screen.debug();

    // Wait for the error message to be displayed
    await waitFor(() => {
      const errorMessage = screen.getByText(/API error/);
      expect(errorMessage).toBeInTheDocument();
      const element = screen.getByTestId("error-span");
      expect(element).toBeVisible();
      expect(element).toHaveClass("error");
      expect(element).toHaveStyle({ color: "red" });
    });
    expect(screen.queryAllByRole("listitem")).toStrictEqual([]);
    // Ensure that the list is not rendered
    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
    //
    expect(24 + 2).toStrictEqual(26);
    expect(24 + 2).toEqual(26);
    expect(24 + 2).toBe(26);
  });
});
