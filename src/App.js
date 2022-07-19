import React, { useState } from "react";
import UserInput from "./components/USER/UserInput";
import UsersList from "./components/USER/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addHandler = (username, userage) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <UserInput onAddUser={addHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
