import React, { useState } from "react";

const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  if (count > 3) {
    throw new Error("Oops! Count exceeded limit.");
  }
  return (
    <div>
      <h1>Buggy Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default BuggyComponent;
