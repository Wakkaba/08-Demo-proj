import React, { useState } from "react";
import "./AddUser.css";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import { Wrapper} from "../Helpers/Wrapper";


export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter valid age > 0",
      });
      return;
    }

    setEnteredUsername("");
    setEnteredAge("");
    props.onAddUser(enteredUsername, enteredAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onHide={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </div>
  );
};
