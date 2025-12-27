import React from "react";

const ChangeName = ({ newUser, setNewUser, setUser, setFlagName }) => {
  return (
    <div>
      <input
        type="text"
        maxLength={10}
        required
        value={newUser.name}
        onChange={(e) => {
          setNewUser((oldUser) => ({
            ...oldUser,
            name: e.target.value,
          }));
        }}
      ></input>
      <button
        onClick={() => {
          setUser((prevUser) => ({
            ...prevUser,
            name: newUser.name,
          }));
          setFlagName(false);
        }}
      >
        Ok
      </button>
    </div>
  );
};

export default ChangeName;
