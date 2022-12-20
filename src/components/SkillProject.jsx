import React from "react";
import {
  SiBootstrap,
  SiDjango,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiNetlify,
  SiPython,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { HiBolt } from "react-icons/hi2";

const SkillProject = ({ techs }) => {
  const test_frame = {
    Vite: <SiVite />,

    React: <SiReact />,
    JavaScript: <SiJavascript />,
    BootStrap: <SiBootstrap />,
    Firebase: <SiFirebase />,
    Django: <SiDjango />,
    Python: <SiPython />,
    Tailwind: <SiTailwindcss />,
    Netlify: <SiNetlify />,
    Railway: <SiRailway />,
    StackBlitz: <HiBolt />,
    Github: <SiGithub />,
    SyncFusion: (
      <img
        className="w-9 h-9"
        src="https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=syncfusion"
      />
    ),
    Chartjs: (
      <img
        className="w-9 h-9"
        src="https://www.chartjs.org/img/chartjs-logo.svg"
      />
    ),
  };

  const frameworkMap = techs.map((item) => {
    console.log(test_frame[item]);
    return (
      <div className="flex  items-center flex-col">
        <span className="text-4xl">{test_frame[item]}</span>
        <span>{item}</span>
      </div>
    );
  });
  console.log(test_frame);
  return (
    <div className="flex w-full  justify-center gap-x-4 text-2xl text-white bg-vs-code-nav-files-top py-3 shadow-lg shadow-zinc-900">
      {frameworkMap}
    </div>
  );
};

export default SkillProject;
