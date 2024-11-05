import React from "react";
import useFetch from "../hooks/useFetch";

const DataComponent = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log("HOOK:::", { data, error, loading });
  if (loading) {
    return <div>Loading......</div>;
  }
  if (error) return <div>{error}</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default DataComponent;
