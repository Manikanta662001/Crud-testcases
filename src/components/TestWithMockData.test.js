import { screen, render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestWithMockData from "./TestwithMockdata";

describe("Testcases for TestwithMockData component", () => {
  const mockData = [
    { id: 1, name: "person1", age: 22 },
    { id: 2, name: "person2", age: 23 },
    { id: 3, name: "person3", age: 20 },
    { id: 4, name: "person4", age: 33 },
  ];

  beforeEach(() => {});
  afterEach(cleanup);

  it("initially it will show heading and it will not show that testid div", () => {
    render(<TestWithMockData data={[]} />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    //if we didn't pass any data there will be nothing printed
    const elements = screen.queryAllByTestId("record");
    expect(elements).toHaveLength(0);
  });

  it("Should render with data", () => {
    render(<TestWithMockData data={mockData} />);
    expect(screen.getByText(/person1/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("record").length).toBe(4);
  });

  it("should show number of times the div is mapping", () => {
    render(<TestWithMockData data={mockData} />);
    const containerArray = screen.getAllByTestId("record");
    expect(containerArray).toHaveLength(4);
  });

  it("New item should be added on button Click", async () => {
    render(<TestWithMockData data={mockData} />);
    const containerArray = screen.getAllByTestId("record");
    expect(containerArray).toHaveLength(4);

    const btn = screen.getByRole("button", { name: /Add to List/ });
    userEvent.click(btn);
    await waitFor(() => {
      expect(screen.getAllByTestId("record")).toHaveLength(5);
      expect(screen.getByText(/divya/)).toBeInTheDocument();
    });
  });

  it("if toggleTextVisible is false it will not show text", () => {
    render(<TestWithMockData data={mockData} />);
    expect(screen.queryByText(/Text Visible/)).not.toBeInTheDocument();
  });

  it("if toggleTextVisible is true it will show text", async () => {
    render(<TestWithMockData data={mockData} />);
    const togglebtn = screen.getByRole("button", { name: /Toggle text/ });
    userEvent.click(togglebtn);
    waitFor(() => {
      expect(screen.getByText(/Text Visible/)).toBeInTheDocument();
    });
  });
});
