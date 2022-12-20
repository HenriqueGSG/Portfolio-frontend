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
  SiVite,
} from "react-icons/si";

import { SkillPoint } from "./index";
import { HiBolt } from "react-icons/hi2";

const Skills = () => {
  const greenPoints = {
    bgColor: "bg-green-400 ",
    borderColor: "border-green-700",
  };
  const yellowPoints = {
    bgColor: "bg-yellow-300 ",
    borderColor: "border-yellow-700 ",
  };
  const redPoints = { bgColor: "bg-red-600 ", borderColor: "border-red-900 " };

  return (
    <div className="flex flex-col gap-3 pl-2 mt-3 text-5xl ">
      <div className="flex flex-col pb-4 border-b-2 ">
        <span className="text-3xl ">Languages</span>
        <div className="flex flex-wrap items-center gap-5 m-2 ml-2">
          <div className="relative flex items-center gap-2 py-2 w-52 ">
            <SiJavascript className="hover:text-vs-code-text-yellow-darker" />
            <span className="text-2xl font-extrabold">JavaScript</span>
            <SkillPoint
              bgColor={greenPoints["bgColor"]}
              borderColor={greenPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-2 py-2 pl-4 border-l-2 w-52 ">
            <SiPython className="hover:text-vs-code-1" />
            <span className="text-2xl font-extrabold">Python</span>
            <SkillPoint
              bgColor={greenPoints["bgColor"]}
              borderColor={greenPoints["borderColor"]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col pb-3 mt-2 border-b-2">
        <span className="text-3xl">Frameworks</span>

        <div className="flex flex-wrap items-center gap-5 mt-2 ml-2 ">
          <div className="relative flex items-center gap-2 py-2 w-52 ">
            <SiReact className="hover:text-vs-code-1" />
            <span className="text-2xl font-extrabold">React</span>
            <SkillPoint
              bgColor={greenPoints["bgColor"]}
              borderColor={greenPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-2 py-2 pl-4 border-l-2 w-52 ">
            <SiDjango className="hover:text-green-700" />
            <span className="text-2xl font-extrabold">Django</span>
            <SkillPoint
              bgColor={greenPoints["bgColor"]}
              borderColor={greenPoints["borderColor"]}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-3 mt-2 border-b-2">
        <span className="text-3xl">Hosting</span>
        <div className="flex flex-wrap items-center gap-5 mt-2 ml-2 ">
          <div className="relative flex items-center gap-2 py-2 w-52 ">
            <SiNetlify className="hover:text-teal-500" />
            <span className="text-2xl font-extrabold">Netlify</span>
            <SkillPoint
              bgColor={yellowPoints["bgColor"]}
              borderColor={yellowPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-2 py-2 pl-4 border-l-2 w-52 ">
            <SiRailway />
            <span className="text-2xl font-extrabold">Railway</span>
            <SkillPoint
              bgColor={yellowPoints["bgColor"]}
              borderColor={yellowPoints["borderColor"]}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-3 mt-2 border-b-2">
        <span className="text-3xl">CSS</span>
        <div className="flex flex-wrap items-center gap-5 mt-2 ml-2 ">
          <div className="relative flex items-center gap-2 py-2 w-52 ">
            <SiTailwindcss className="hover:text-vs-code-2" />
            <span className="text-2xl font-extrabold">Tailwind</span>
            <SkillPoint
              bgColor={greenPoints["bgColor"]}
              borderColor={greenPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-2 py-2 pl-4 border-l-2 w-52 ">
            <SiBootstrap className="hover:text-violet-700 " />
            <span className="text-2xl font-extrabold ">BootStrap</span>
            <SkillPoint
              bgColor={redPoints["bgColor"]}
              borderColor={redPoints["borderColor"]}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-3 mt-2 border-b-2">
        <span className="text-3xl">Other</span>
        <div className="flex flex-wrap items-center mt-2 ml-2 gap-y-5 gap-x-5">
          <div className="relative flex items-center gap-2 py-2 w-52 ">
            <SiFirebase className="hover:text-vs-code-text-yellow-darker" />
            <span className="text-2xl font-extrabold">Firebase</span>
            <SkillPoint
              bgColor={yellowPoints["bgColor"]}
              borderColor={yellowPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-3 py-2 pl-2 border-l-2 w-52 ">
            <HiBolt className="hover:text-vs-code-1 " />
            <span className="text-2xl font-extrabold ">StackBlitz</span>
            <SkillPoint
              bgColor={yellowPoints["bgColor"]}
              borderColor={yellowPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-3 py-2 pl-4 border-l-2 w-52 ">
            <SiGithub />
            <span className="text-2xl font-extrabold ">Github</span>
            <SkillPoint
              bgColor={greenPoints["bgColor"]}
              borderColor={greenPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-3 py-2 pl-4 w-52">
            <img
              className="w-12 h-12"
              src="https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=syncfusion"
            />
            <span className="text-2xl font-extrabold ">SyncFusion</span>
            <SkillPoint
              bgColor={redPoints["bgColor"]}
              borderColor={redPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-3 py-2 pl-4 border-l-2 w-52">
            <img
              className="w-12 h-12"
              src="https://www.chartjs.org/img/chartjs-logo.svg"
            />
            <span className="text-2xl font-extrabold ">ChartJs</span>
            <SkillPoint
              bgColor={redPoints["bgColor"]}
              borderColor={redPoints["borderColor"]}
            />
          </div>
          <div className="relative flex items-center gap-3 py-2 pl-4 border-l-2 w-52 ">
            <SiVite />
            <span className="text-2xl font-extrabold ">Vite</span>
            <SkillPoint
              bgColor={yellowPoints["bgColor"]}
              borderColor={yellowPoints["borderColor"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
