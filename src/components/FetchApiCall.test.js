import { screen, render } from "@testing-library/react";
import FetchApiCall from "./FetchApiCall";

//mock the fetch function
global.fetch = jest.fn();

describe("FetchApiCall Component", () => {
  test("Should render the component", () => {
    render(<FetchApiCall />);
    expect(screen.getByText("Api Call with Fetch")).toBeInTheDocument();
  });

  //api call is success also response from server is success response
  test("trigger Api Call and show the Data", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValueOnce([
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "MK",
          username: "DEV",
          email: "Dev@april.biz",
        },
      ]),
    });
    render(<FetchApiCall />);
    expect(screen.getByText("Loading.....")).toBeInTheDocument();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(screen.getByText("User Data")).toBeInTheDocument();
  });

  //api call is success but response from server is error response
  test("trigger Api Call and show the Error message", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: jest
        .fn()
        .mockResolvedValueOnce({ message: "Something Went Wrong" }),
    });
    render(<FetchApiCall />);
    expect(screen.getByText("Loading.....")).toBeInTheDocument();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(screen.getByText("Something Went Wrong")).toBeInTheDocument();
  });

  //the apicall itself fails
  test("handles network error for Api Call", async () => {
    fetch.mockRejectedValueOnce(new Error('Network Error'));
    render(<FetchApiCall />);
    expect(screen.getByText("Loading.....")).toBeInTheDocument();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(screen.getByText("Network Error")).toBeInTheDocument();
  });
});
