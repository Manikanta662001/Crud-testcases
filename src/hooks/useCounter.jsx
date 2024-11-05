import React, { useState } from "react";

const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount((prevC) => prevC + 1);
  const decrement = () => setCount((prevC) => prevC - 1);
  const reset = () => setCount((prevC) => prevC - prevC);
  return { count, increment, decrement, reset };
};

export default useCounter;
