import React from "react";

const Terminal = () => {
  return (
    <div className="h-3/5 w-3/5 bg-zinc-900 flex flex-col justify-center items-top relative">
      <div className="  bg-black h-8 w-full flex items-center pl-2 text-sm">
        <span className="text-white">Command Prompt</span>
      </div>
      <div className="h-full  text-white">
        <p className=" w-96">Microsoft Windows [Version 10.0.19044.2251]</p>
        <p className=" w-96">(c) Microsoft Corporation. All rights reserved.</p>
        <div className="flex mt-5 ">
          <p>C:\Portfolio\HenriqueGuarnieri{">"}</p>
          <input className=" bg-transparent outline-none" />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
