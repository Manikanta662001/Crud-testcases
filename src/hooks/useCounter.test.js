import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter Hook", () => {
  test("Count should be zero on page load and other functions", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(3);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(2);
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
