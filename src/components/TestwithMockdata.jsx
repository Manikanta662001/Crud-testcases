import React, { useState } from "react";
const TestWithMockData = ({ data }) => {
  const [elements, setElements] = useState(data);
  const [toggleTextVisible, setToggleTextVisible] = useState(false);
  return (
    <div>
      <h3> List </h3>
      {elements?.map((item) => (
        <div data-testid="record" key={item.id}>
          {item.id}: {item.name}
        </div>
      ))}
      <button
        onClick={() => {
          setElements([
            ...elements,
            {
              id: 4,
              name: "divya",
            },
          ]);
        }}
      >
        Add to List
      </button>
      {toggleTextVisible && <p>Text Visible</p>}
      <button onClick={() => setToggleTextVisible(!toggleTextVisible)}>
        Toggle text
      </button>
    </div>
  );
};
export default TestWithMockData;
