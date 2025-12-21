import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-300 py-5">
      <footer className="max-w-[60rem] pb-9 grid grid-cols-5 text-xl text-black m-auto ">
        <h1 className="text-3xl">
          <span className="font-extrabold text-[tomato]">B</span>rand
        </h1>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold mb-3">Company1</h1>
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integrations</a>
          <a href="">Portfolio</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold mb-3">Company2</h1>
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integrations</a>
          <a href="">Portfolio</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold mb-3">Company3</h1>
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integrations</a>
          <a href="">Portfolio</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold mb-3">Company4</h1>
          <a href="">Features</a>
          <a href="">Use Cases</a>
          <a href="">Integrations</a>
          <a href="">Portfolio</a>
        </div>
      </footer>
      <div className="w-full h-[1px] bg-[green]"></div>
      <div className="max-w-[60] pt-3 m-auto flex justify-between">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, aut.
        </p>
        <div className="flex gap-5">
          <a href="" className="font-bold">
            T
          </a>
          <a href="" className="font-bold">
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
