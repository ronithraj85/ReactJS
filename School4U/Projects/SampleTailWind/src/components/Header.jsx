import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="bg-red-300 py-5">
      <header className="max-w-[60rem] flex items-center justify-between text-xl text-black m-auto ">
        <h1 className="text-3xl">
          <span className="font-extrabold text-[tomato]">B</span>rand
        </h1>
        <div className="flex items-center gap-7">
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integrations</a>
          <a href="">Portfolio</a>
        </div>
        <Button title={"Join waitlist"} />
      </header>
    </div>
  );
}

export default Header;
