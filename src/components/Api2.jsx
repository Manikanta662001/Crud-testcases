import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Api2() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>List of Users</h1>
      {error && <div>{error}</div>}
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </>
  );
}
