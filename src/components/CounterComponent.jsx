import React from "react";
import useCounter from "../hooks/useCounter";

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterComponent;
