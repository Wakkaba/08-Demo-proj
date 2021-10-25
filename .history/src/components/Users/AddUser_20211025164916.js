import React, { useState } from "react";
import "./AddUser.css";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";

export const AdUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (e) => {
    
    setEnteredUsername(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
   
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
    if (enteredUsername.trim().length === 0) {
      return;
    }
     if (enteredAge < 1) {
      return;
    }
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          value={enteredUsername}
          onChange={userNameChangeHandler}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age</label>
        <input
          value={enteredAge}
          onChange={userAgeChangeHandler}
          id="age"
          type="number"
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};
