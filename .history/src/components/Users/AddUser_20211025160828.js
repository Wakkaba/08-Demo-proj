import React from "react";

export const AdUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">Add user</button>
    </form>
  );
};
