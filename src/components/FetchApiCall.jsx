import React, { useEffect, useState } from "react";

const FetchApiCall = () => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrMsg] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        if (!response.ok){
            throw new Error(result.message);
        }
        setData(result);
      } catch (error) {
        setErrMsg(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Api Call with Fetch</h1>
      {errorMsg ? (
        <p>{errorMsg}</p>
      ) : data.length ? (
        <p>User Data</p>
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
};

export default FetchApiCall;
