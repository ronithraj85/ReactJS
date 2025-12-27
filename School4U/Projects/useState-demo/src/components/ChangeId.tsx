import React from "react";

const ChangeId = ({ newUser, setNewUser, setUser, setFlagId }) => {
  return (
    <div>
      <input
        type="text"
        maxLength={3}
        required
        value={newUser.id}
        onChange={(e) => {
          setNewUser((oldUser) => ({
            ...oldUser,
            id: e.target.value,
          }));
        }}
      ></input>
      <button
        onClick={() => {
          setUser((prevUser) => ({
            ...prevUser,
            id: newUser.id,
          }));
          setFlagId(false);
        }}
      >
        Ok
      </button>
    </div>
  );
};

export default ChangeId;
