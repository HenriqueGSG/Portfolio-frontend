import React from "react";
import { DiVisualstudio } from "react-icons/di";

const Navbar = () => {
  return (
    <div className="h-9 w-full bg-main-nav flex justify-between items-center text-white px-4 ">
      <DiVisualstudio className="text-vs-code w-7 h-7  text-vs-code-2" />
      <h1 className="text-neutral-400">Henrique Guarnieri</h1>
      <h1>Others links</h1>
    </div>
  );
};

export default Navbar;
