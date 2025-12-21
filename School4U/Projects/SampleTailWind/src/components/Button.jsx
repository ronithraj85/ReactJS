import React from "react";

function Button({ title }) {
  return (
    <div>
      <button className="bg-[tomato] rounded-lg px-4 py-2">{title}</button>
    </div>
  );
}

export default Button;
