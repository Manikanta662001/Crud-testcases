import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("Tests Search compo", () => {
  test("calls the onChange callback handler", () => {
    const onChange = jest.fn();
    render(
      <Search value={""} onchange={onChange}>
        Search :
      </Search>
    );
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "hello" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test("calls the onChange callback handler by userEvent", async () => {
    const onChange = jest.fn();
    render(
      <Search value={""} onchange={onChange}>
        Search :
      </Search>
    );
    await userEvent.type(screen.getByRole("textbox"), "Javascript");
    expect(onChange).toHaveBeenCalledTimes(10);
  });
  test("with new Props using rerender", async () => {
    const onChange = jest.fn();
    const { rerender } = render(
      <Search value={"hello"} onchange={onChange}>
        Search :
      </Search>
    );
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toHaveDisplayValue("hello");
    rerender(
      <Search value={"world"} onchange={onChange}>
        Search :
      </Search>
    );
    expect(inputBox).toHaveDisplayValue("world");
  });
});
