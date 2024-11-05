import React, { useState } from "react";
import axios from "axios";

function Apicall(props) {
  const [posts, setposts] = useState(null);
  const [error, seterror] = useState("");
  const handleApicall = async () => {
    let response;
    try {
      response = await axios.get(props.url);
      if (response.status === 400) {
        throw new Error(response.data.message);
      }
      setposts(response.data);
    } catch (err) {
      seterror(err.message);
    }
  };
  console.log(error, posts, "1717");

  return (
    <div>
      <button onClick={handleApicall}>Api call</button>
      {error && (
        <span
          className="error"
          data-testId={"error-span"}
          style={{ color: "red" }}
        >
          {error}
        </span>
      )}
      <ul>
        {posts?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Apicall;
