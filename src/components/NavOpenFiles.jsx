import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavOpenFiles = () => {
  // ggggggg
  const activeLink =
    "    text-white bg-main-hover-link h-full flex  items-center ";
  const normalLink =
    "   text-grey-700 text-white hover:bg-main-hover-link h-full  flex  items-center";
  return (
    <div className="w-full h-10 bg-vs-code-nav-files-top flex  items-center">
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to="/"
      >
        <div className="  px-3 flex ">Home.jsx</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={{ pathname: "/projects/depinfo" }}
        state={{
          data: {
            urlProject: "https://flourishing-kheer-941a41.netlify.app",
            nameProject: "DepInfo",
            tech: "Django, Tailwind, Chartjs",
          },
        }}
      >
        <div className="  px-3 flex ">DepInfo</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={{ pathname: "/projects/dashedu" }}
        state={{
          data: {
            urlProject: "https://dashedu.netlify.app",
            nameProject: "DashEdu",
            tech: "Django, Tailwind, Synfuntion, ",
          },
        }}
      >
        <div className="  px-3 flex ">DashEdu</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={{ pathname: "/projects/yoututo" }}
        state={{
          data: {
            urlProject: "https://react-in2elr.stackblitz.io",
            nameProject: "Yoututo",
            tech: "Firebase, Bootstrap",
          },
        }}
      >
        <div className="  px-3 flex ">Yoututo</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={{ pathname: "/projects/fiscalizacand" }}
        state={{
          data: {
            urlProject: "https://react-ndvwma.stackblitz.io",
            nameProject: "Yoututo",
            tech: "Firebase, Bootstrap",
          },
        }}
      >
        <div className="  px-3 flex ">FiscalizaCand</div>
      </NavLink>
    </div>
  );
};

export default NavOpenFiles;
