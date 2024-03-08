import { render, cleanup } from "@testing-library/react";
import Snapshot from "./Snapshot";

afterEach(cleanup);
describe("SNAPSHOT", () => {
  test("take snapshot and matches with it", () => {
    const { asFragment } = render(<Snapshot />);
    expect(asFragment(<Snapshot />)).toMatchSnapshot();
  });
});

describe("truthy and falsy", () => {
  test("truthy value must be true", () => {
    expect(true).toBe(true);
  });
  test("falsy value must be false", () => {
    expect(false).toBe(false);
  });
});
