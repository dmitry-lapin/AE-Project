import React from "react";
import Menu from "./components/menu";

const Header = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-200 text-white">
      <div className="Logo py-5 font-semibold text-lg border border-transparent px-4">
        <p className="text-black text-center">Scenario Generator</p>
      </div>
      <div className="flex-grow border-r border-zinc-300 px-4">
        <Menu />
      </div>
    </div>
  );
}

export default Header;
