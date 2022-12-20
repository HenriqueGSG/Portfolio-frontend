import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavOpenFiles = () => {
  // ggggggg
  const activeLink =
    "    text-white bg-main-hover-link h-full flex  items-center ";
  const normalLink =
    "   text-grey-700 text-white hover:bg-main-hover-link h-full  flex  items-center";
  return (
    <div className="flex items-center w-full h-10 bg-vs-code-nav-files-top">
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to="/"
      >
        <div className="flex px-3 ">Home.jsx</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={{ pathname: "/projects/depinfo" }}
        state={{
          data: {
            urlProject: "https://flourishing-kheer-941a41.netlify.app",
            nameProject: "DepInfo",
            tech: "Django, Tailwind, Chartjs",
            techObject: [
              "React",
              "Tailwind",
              "Netlify",
              "Railway",
              "Django",
              "SyncFusion",
            ],
          },
        }}
      >
        <div className="flex px-3 ">DepInfo</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={{ pathname: "/projects/dashedu" }}
        state={{
          data: {
            urlProject: "https://dashedu.netlify.app",
            nameProject: "DashEdu",
            tech: "Django, Tailwind, Synfuntion, ",
            techObject: [
              "Vite",
              "React",
              "Tailwind",
              "Netlify",
              "Railway",
              "Django",
              "Chartjs",
            ],
          },
        }}
      >
        <div className="flex px-3 ">DashEdu</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={{ pathname: "/projects/yoututo" }}
        state={{
          data: {
            urlProject: "https://react-in2elr.stackblitz.io",
            nameProject: "Yoututo",
            tech: "Firebase, Bootstrap",
            techObject: [
              "React",
              "Netlify",
              "BootStrap",
              "StackBlitz",
              "Firebase",
            ],
          },
        }}
      >
        <div className="flex px-3 ">Yoututo</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={{ pathname: "/projects/fiscalizacand" }}
        state={{
          data: {
            urlProject: "https://react-ndvwma.stackblitz.io",
            nameProject: "Yoututo",
            tech: "Firebase, Bootstrap",
            techObject: ["React", "StackBlitz"],
          },
        }}
      >
        <div className="flex px-3 ">FiscalizaCand</div>
      </NavLink>
    </div>
  );
};

export default NavOpenFiles;
