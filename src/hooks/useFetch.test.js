import useFetch from "./useFetch";
import { renderHook } from "@testing-library/react";

describe("useFetch hook", () => {
  test("should show loading state", async () => {
    const { result } = renderHook(() =>
      useFetch("https://jsonplaceholder.typicode.com/todos")
    );
    const { loading, data, error } = result.current;
    expect(loading).toBe(true);
    expect(data).toEqual([]);
    expect(error).toBe("");
  });

  test("should show data", async () => {
    const { result } = renderHook(() =>
      useFetch("https://jsonplaceholder.typicode.com/todos")
    );
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { loading, data, error } = result.current;
    expect(loading).toBe(false);
    expect(data).not.toEqual([]);
    expect(error).toBe("");
  });
  
  test("should show error message", async () => {
    const { result } = renderHook(() =>
      useFetch("https://jsonplaceholder.typicode.c/todos")
    );
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { loading, data, error } = result.current;
    console.log("RESULT:::::", result);
    expect(loading).toBe(false);
    expect(data).toEqual([]);
    expect(error).toBe("Network request failed");
  });
});
