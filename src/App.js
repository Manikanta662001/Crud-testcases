import React from "react";
import Storage from "./components/Storage";
import Snapshot from "./components/Snapshot";
import TestElements from "./components/TestElements";
import "./App.css";
import TestEvents from "./components/TestEvents";
import TestAsync from "./components/TestAsync";
import Register from "./components/Register";
import Practice from "./components/Practice";
import Another from "./components/Another";
import Apicall from "./components/Apicall";
import List from "./components/List";
import Api2 from "./components/Api2";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Storage />
      <Snapshot />
      <TestElements />
      <TestEvents />
      <TestAsync />
      <Register />
      <Practice />
      <Another />
      <Apicall url={"https://jsonplaceholder.typicode.com/posts"} />
      <List />
      <Api2 />
    </div>
  );
}

export default App;
