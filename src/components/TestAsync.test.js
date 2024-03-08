import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  screen,
  act,
} from "@testing-library/react";
import TestAsync from "./TestAsync";

jest.useFakeTimers();

afterEach(cleanup);
describe("Tests for TestAsync", () => {
  it("increment after 2 seconds by clicking button", async () => {
    render(<TestAsync />);
    expect(screen.getByTestId("count").textContent).toBe("0");
    const incbtn = screen.getByTestId("Arrow-up");
    fireEvent.click(incbtn);
    // act(() => {
    //   jest.advanceTimersByTime(2000);
    // });
    // expect(screen.getByTestId("count")).toHaveTextContent(1)
    await waitFor(
      () => {
        const countElement = screen.getByTestId("count");
        expect(countElement).toHaveTextContent(1);
      },
      { timeout: 2500 }
    );
  });
  test("should be disabled", () => {
    render(<TestAsync />);
    const decbtn = screen.getByTestId("Arrow-down");
    expect(decbtn).toHaveAttribute("disabled");
    expect(decbtn).toBeDisabled();
  });
});
