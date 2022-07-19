import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./UserInput.module.css";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [addUser, setAddUser] = useState("");
  const [addAge, setAddAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (addUser.trim().length === 0 || addAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (Number(addAge) < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(addUser, addAge);
    setAddUser("");
    setAddAge("");
  };

  const usernameChangeHandler = (event) => {
    setAddUser(event.target.value);
  };

  const userageChangeHandler = (event) => {
    setAddAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={addUser}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={addAge}
            onChange={userageChangeHandler}
          />
          {<Button type="submit">Add User</Button>}
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
