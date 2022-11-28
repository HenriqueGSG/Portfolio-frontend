import React from "react";
import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiReact,
  SiFirebase,
  SiRailway,
  SiNetlify,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";

import { HiBolt } from "react-icons/hi2";
const Skills = () => {
  return (
    <div className="flex flex-col  text-6xl pl-2 gap-3 mt-3  ">
      <div className="border-b-2 pb-4  flex flex-col ">
        <span className="text-3xl ">Languages</span>
        <div className="flex items-center  gap-5 ml-5 mt-2">
          <div className="flex items-center gap-2 ">
            <SiJavascript className="hover:text-vs-code-text-yellow-darker" />
            <span className="text-3xl font-extrabold">JavaScript</span>
          </div>
          <div className="flex items-center gap-2 border-l-2 pl-4 ">
            <SiPython className="hover:text-vs-code-1" />
            <span className="text-3xl font-extrabold">Python</span>
          </div>
        </div>
      </div>
      <div className="border-b-2 pb-3 flex flex-col mt-2">
        <span className="text-3xl">Frameworks</span>

        <div className="flex items-center gap-5 ml-5 mt-2  ">
          <div className="flex items-center gap-2  ">
            <SiReact className="hover:text-vs-code-1" />
            <span className="text-3xl font-extrabold">React</span>
          </div>
          <div className="flex items-center gap-2  border-l-2 pl-4">
            <SiDjango className="hover:text-green-700" />
            <span className="text-3xl font-extrabold">Django</span>
          </div>
        </div>
      </div>

      <div className="border-b-2 pb-3 flex flex-col mt-2">
        <span className="text-3xl">Hosting</span>
        <div className="flex items-center gap-5 ml-5 mt-2 ">
          <div className="flex items-center gap-2 ">
            <SiNetlify className="hover:text-teal-500" />
            <span className="text-3xl font-extrabold">Netlify</span>
          </div>
          <div className="flex items-center gap-2 border-l-2 pl-4">
            <SiRailway />
            <span className="text-3xl font-extrabold">Railway</span>
          </div>
        </div>
      </div>

      <div className="border-b-2 pb-3 flex flex-col mt-2">
        <span className="text-3xl">CSS</span>
        <div className="flex items-center gap-5 ml-5 mt-2 ">
          <div className="flex items-center gap-2 ">
            <SiTailwindcss className="hover:text-vs-code-2" />
            <span className="text-3xl font-extrabold">Tailwind</span>
          </div>
          <div className="flex items-center gap-2 border-l-2 pl-4 ">
            <SiBootstrap className="hover:text-violet-700 " />
            <span className="text-3xl font-extrabold ">BootStrap</span>
          </div>
        </div>
      </div>

      <div className="border-b-2 pb-3 flex flex-col mt-2">
        <span className="text-3xl">Other</span>
        <div className="flex flex-wrap items-center gap-5 ml-5 mt-2">
          <div className="flex items-center gap-2 ">
            <SiFirebase className="hover:text-vs-code-text-yellow-darker" />
            <span className="text-3xl font-extrabold">Firebase</span>
          </div>
          <div className="flex items-center gap-3  border-l-2 pl-2">
            <HiBolt className="hover:text-vs-code-1  " />
            <span className="text-3xl font-extrabold  ">StackBlitz</span>
          </div>
          <div className="flex items-center gap-3 border-l-2 pl-4">
            <SiGithub />
            <span className="text-3xl font-extrabold ">Github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
