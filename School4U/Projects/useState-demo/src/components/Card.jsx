import React, { useState } from "react";
import ChangeName from "./ChangeName";
import ChangeId from "./ChangeId";
import ChangeCourse from "./ChangeCourse";

const Card = () => {
  const [flagName, setFlagName] = useState(false);
  const [flagId, setFlagId] = useState(false);
  const [flagCourse, setFlagCourse] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    id: 0,
    course: "",
  });

  const [user, setUser] = useState({
    name: "Ronith",
    id: 1,
    course: "React",
  });
  return (
    <>
      <div>
        Details of the user are as follows:
        <br />
        {user.name}
        <br />
        {user.id}
        <br />
        {user.course}
        <br />
        Click on the button to change the Name-
        <button onClick={() => setFlagName(true)}>Change Name</button>
        <br />
        Click on the button to change the Id-
        <button onClick={() => setFlagId(true)}>Change Id</button>
        <br />
        Click on the button to change the Course-
        <button onClick={() => setFlagCourse(true)}>Change Course</button>
      </div>
      {flagName && (
        <ChangeName
          newUser={newUser}
          setNewUser={setNewUser}
          setUser={setUser}
          setFlagName={setFlagName}
        />
      )}
      {flagId && (
        <ChangeId
          newUser={newUser}
          setNewUser={setNewUser}
          setUser={setUser}
          setFlagId={setFlagId}
        />
      )}
      {flagCourse && (
        <ChangeCourse
          newUser={newUser}
          setNewUser={setNewUser}
          setUser={setUser}
          setFlagCourse={setFlagCourse}
        />
      )}
    </>
  );
};

export default Card;
