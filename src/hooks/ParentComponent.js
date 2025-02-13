import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const inputRef = useRef();
  return (
    <div>
      <h1>useImperativeHandle hook</h1>
      <ChildComponent name={'mani'} ref={inputRef} />
      <button onClick={()=>inputRef.current.focusInput()}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
