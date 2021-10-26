import React, { useState, useRef } from "react";
import "./AddUser.css";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import { Wrapper } from "../Helpers/Wrapper";


export const AddUser = (props) => {
  //const [enteredUsername, setEnteredUsername] = useState("");
  //const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageRef = useRef();

  // const userNameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };

  // const userAgeChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredAge = nameInputRef.current.value


    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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

    props.onAddUser(enteredName, enteredAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            ref={nameInputRef}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age</label>
          <input
            ref={ageRef}
            id="age"
            type="number"
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
