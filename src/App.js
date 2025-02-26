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
import TestWithMockData from "./components/TestwithMockdata";
import Api2 from "./components/Api2";
import AllEvents from "./components/AllEvents";
import FetchApiCall from "./components/FetchApiCall";
import DataComponent from "./components/DataComponent";
import CounterComponent from "./components/CounterComponent";
import BuggyComponent from "./components/error-boundary/BuggyComponent";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/error-boundary/ErrorFallback";
import ParentComponent from "./hooks/ParentComponent";
import TextCompo from "./components/translations/TextCompo";
import DangerouslySetInnerHtmlCompo from "./components/DangerouslySetInnerHtmlCompo";
function App() {
  const handleReset = () => {
    console.log("RESETING:::::");
  };
  console.log("Hello from My Side!");
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
      <TestWithMockData data={[]} />
      <Api2 />
      <AllEvents />
      <FetchApiCall />
      <DataComponent />
      <CounterComponent />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
        <BuggyComponent />
      </ErrorBoundary>
      <ParentComponent />
      <TextCompo />
      <DangerouslySetInnerHtmlCompo />
    </div>
  );
}

export default App;
