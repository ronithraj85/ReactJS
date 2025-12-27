import React from "react";

const ChangeCourse = ({ newUser, setNewUser, setUser, setFlagCourse }) => {
  return (
    <div>
      <input
        type="text"
        maxLength={15}
        required
        value={newUser.course}
        onChange={(e) => {
          setNewUser((oldUser) => ({
            ...oldUser,
            course: e.target.value,
          }));
        }}
      ></input>
      <button
        onClick={() => {
          setUser((prevUser) => ({
            ...prevUser,
            course: newUser.course,
          }));
          setFlagCourse(false);
        }}
      >
        Ok
      </button>
    </div>
  );
};

export default ChangeCourse;
