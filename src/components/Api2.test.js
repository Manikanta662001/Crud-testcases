import { screen, cleanup, render, waitFor } from "@testing-library/react";
import Api2 from "./Api2";
import axios from "axios";

jest.mock("axios");
describe("Tests for Api2 component", () => {
  beforeEach(() => {
    axios.get.mockReset();
  });
  afterEach(cleanup);

  test("Should call fetchAllUsers function", () => {
    render(<Api2 />);
    const getSpy = jest.spyOn(axios, "get");
    expect(getSpy).toBeCalled();
  });
  test("fetch successfully data from an api", async () => {
    const response = {
      data: [
        { id: 1, name: "mani" },
        { id: 2, name: "ram" },
        { id: 3, name: "king" },
      ],
    };
    axios.get.mockResolvedValueOnce(response);
    render(<Api2 />);
    await waitFor(() => {
      const header = screen.getByRole("heading", { level: 1 });
      expect(header).toBeInTheDocument();
      const li = screen.getAllByRole("listitem");
      expect(li).toHaveLength(3);
      expect(screen.getByText("mani")).toBeInTheDocument();
    });
  });
  test("fetch data with an error", async () => {
    const response = { message: "something went wrong" };
    axios.get.mockRejectedValueOnce(response);
    render(<Api2 />);
    // await expect(screen.queryByText(/something went wrong/i)).toBeInTheDocument()
    await waitFor(() => {
      const errmsg = screen.getByText(/something went wrong/i);
      expect(errmsg).toBeInTheDocument();
      expect(
        screen.getByText("No users found", { exact: true })
      ).toBeInTheDocument();
    });
  });
});
