import React from "react";
import { Skills } from "../components/index";
import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiReact,
  SiFirebase,
  SiRailway,
  SiNetlify,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="w-full flex   items-center ">
      <div className="w-3/6 text-white"> EDITOR</div>
      <div className="w-3/6 bg-white min-h-screen flex flex-col bg-gradient-to-r from-vs-code-nav-files-top to-main-bg ">
        <div className="  w-full  text-white flex flex-col items-center p-5 gap-y-1">
          <img
            className="h-72 w-72 bg-black rounded-full object-cover shadow-lg border-4"
            src="https://drive.google.com/uc?export=view&id=103LDTcScymnkvTeOFuWXsCsDrIMW0IsM"
            alt=""
          />
          <h1 className="text-3xl font-semibold">Henrique Guarnieri</h1>
          <span className=" text-2xl text-neutral-200 ">Idade: 25</span>
          <span className=" text-2xl text-neutral-200 ">
            Cidade: Piracicaba/SP
          </span>
        </div>
        <div className=" text-white w-full h-full p-3 ">
          <h2 className=" text-3xl font-semibold border-b-4 ">Skills:</h2>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Home;
