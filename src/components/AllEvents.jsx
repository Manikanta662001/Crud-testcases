import React, { useState } from "react";
const options = ["", "AP", "TS", "MH", "NP", "KA", "TN"];
const AllEvents = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState({ text: "", focused: false });
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [keyPressed,setKeyPressed] = useState('')
  const [keyReleased,setkeyReleased] = useState('')
  const [capitalText, setCapitalText] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setCapitalText(!capitalText);
  };
  const handleBlur = () => {
    if (capitalText) {
      setName(name.toUpperCase());
    }
  };
  const handleFocus = () => {
    setLocation({ text: "HYB", focused: true });
  };
  const handleSelect = (e) => {
    setState(e.target.value);
  };
  const handleRadio = (e) => {
    setGender(e.target.value);
  };
  const handleKeyDown = (e)=>{
    console.log("KEY::::",e.key,typeof e.key)
    setKeyPressed(e.key);
  }
  const handleKeyUp = (event) => {
    setkeyReleased(event.key);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <h1>All Events</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            required={true}
            className={capitalText && "capital"}
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur()}
          />
          <button onClick={(e) => handleClick(e)}>Change Boolean</button>
        </div>
        <div>
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter Your Location"
            value={location.text}
            className={location.focused && "loc focused"}
            onChange={(e) => setLocation({ ...location, text: e.target.value })}
            onFocus={handleFocus}
            onBlur={() => setLocation({ ...location, focused: false })}
          />
        </div>
        <div>
          <label htmlFor="states">Select State: </label>
          <select
            name="states"
            id="states"
            onChange={(e) => {
              handleSelect(e);
            }}
            value={state}
          >
            {options.map((op, ind) => {
              return (
                <option value={op} key={op + ind}>
                  {op}
                </option>
              );
            })}
          </select>
          <p>{state && `Selected State:${state}`}</p>
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                id="gender"
                value={"Male"}
                onChange={handleRadio}
                checked={gender === "Male"}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                id="gender"
                value={"Female"}
                onChange={handleRadio}
                checked={gender === "Female"}
              />{" "}
              Female
            </label>
          </div>
        </div>
        <div>
          <button disabled>Submit</button>
        </div>
        <div>
          <label htmlFor="key">keyUp & keyDown: </label>
          <input type="text" placeholder="Enter Something....." onKeyDown={handleKeyDown} value={keyPressed|| keyReleased} onKeyUp={handleKeyUp}/>
          <p>Key Pressed: {keyPressed}</p>
          <p>Key Released: {keyReleased}</p>
        </div>
      </form>
    </div>
  );
};

export default AllEvents;
