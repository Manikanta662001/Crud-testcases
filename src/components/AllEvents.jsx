import React, { useState } from "react";

const AllEvents = () => {
  const [name, setName] = useState("");
  const [capitalText, setCapitalText] = useState(true);
  const handleClick = () => {
    setCapitalText(!capitalText);
  };
  const handleBlur = () => {
    if (capitalText) {
      setName(name.toUpperCase());
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <h1>All Events</h1>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          className={capitalText && 'capital'}
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur()}
        />
        <button onClick={() => handleClick()}>Change Boolean</button>
      </form>
    </div>
  );
};

export default AllEvents;
