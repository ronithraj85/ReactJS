import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="max-w-[55rem] m-auto text-center py-[10rem]">
      <h1 className="text-6xl font-bold">
        The best way to{" "}
        <span className="bg-amber-300 rounded-2xl px-3">Review</span> Creative
        Assests
      </h1>
      <p className="text-lg my-9">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est blanditiis
        dicta doloribus asperiores, cumque et sit delectus quidem neque
        voluptatum eos commodi dolorum fugit aliquam itaque magni sint laborum
        tempora?
      </p>
      <div className="text-3xl">
        <Button title={"Join subscription"} />
      </div>
    </div>
  );
}

export default Hero;
