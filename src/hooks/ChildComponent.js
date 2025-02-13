import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  console.log("PROPS::::", props);
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));
  return <input placeholder="Enter Your Name" ref={inputRef} />;
});

export default ChildComponent;
