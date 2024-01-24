import React from "react";
import Menu from "./components/menu";

const Header = () => {
  return (
    <div className="px-4 w-fit h-full bg-zinc-200 text-white border-r border-zinc-300">
      <div className="Logo py-5 font-semibold text-lg ">
        <p className="text-black text-center">Scenario Generator</p>
      </div>
      <Menu/>
    </div>
  );
}

export default Header;
