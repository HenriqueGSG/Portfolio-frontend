import React from "react";
import { NavLink } from "react-router-dom";
import { VscChevronRight, VscChevronDown, VscEllipsis } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";

const Explorer = () => {
  const activeLink = "  py-1  text-white bg-main-hover-link  px-3  ";
  const normalLink =
    "  py-1 text-grey-700 text-white hover:bg-main-hover-link px-3 ";
  return (
    <div className="w-full min-h-screen overflow-auto text-white flex flex-col items-start">
      <div className="px-4 py-2 h-10 w-full flex justify-between items-center">
        <span className=" text-sm">EXPLORER</span>

        <VscEllipsis className="text-lg" />
      </div>

      <div className="flex flex-col w-full">
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to="/"
        >
          <div className=" flex items-center">
            <FaReact className="w-4 h-4 mr-1" style={{ color: "#3d7699" }} />
            Home.jsx
          </div>
        </NavLink>

        <div className=" mt-1 flex flex-col  justify-center">
          <div className="flex items-center mb-1 px-3">
            <VscChevronDown className="w-5 h-5 mr-1" /> projects
          </div>
          <div className="flex flex-col ">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={{ pathname: "/projects/dashedu" }}
              state={{
                data: {
                  urlProject: "https://dashedu.netlify.app",
                  nameProject: "DashEdu",
                  tech: "Django, Tailwind, Synfuntion, ",
                  hosting: "Netifly, Railway",
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
              <div className="flex items-center pl-5 gap-x-2 ">
                <FaReact className="w-4 h-4  " style={{ color: "#3d7699" }} />
                DashEdu.jsx
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={{ pathname: "/projects/depinfo" }}
              state={{
                data: {
                  urlProject: "https://flourishing-kheer-941a41.netlify.app",
                  nameProject: "DepInfo",
                  tech: "Django, Tailwind, Chartjs",
                  hosting: "Netifly, Railway",
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
              <div className="flex items-center pl-5 gap-x-2 ">
                <FaReact className="w-4 h-4  " style={{ color: "#3d7699" }} />
                DepInfo.jsx
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={{ pathname: "/projects/yoututo" }}
              state={{
                data: {
                  urlProject: "https://react-in2elr.stackblitz.io",
                  nameProject: "Yoututo",
                  tech: "Firebase, Bootstrap",
                  hosting: "Stackblitz",
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
              <div className="flex items-center pl-5 gap-x-2 ">
                <FaReact className="w-4 h-4  " style={{ color: "#3d7699" }} />
                Yoututo.jsx
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={{ pathname: "/projects/fiscalizacand" }}
              state={{
                data: {
                  urlProject: "https://react-ndvwma.stackblitz.io",
                  nameProject: "FiscalizaCandi",
                  tech: "Bootstrap",
                  hosting: "Stackblitz",
                  techObject: ["React", "StackBlitz"],
                },
              }}
            >
              <div className="flex items-center pl-5 gap-x-2 ">
                <FaReact className="w-4 h-4  " style={{ color: "#3d7699" }} />
                FiscalizaCandi.jsx
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={{ pathname: "/projects/fromUsersVote" }}
              state={{
                data: {
                  urlProject: "https://fromusersvote.netlify.app",
                  nameProject: "FromUsersVote",
                  tech: "Tailwind, React, Django, ",
                  hosting: "Netifly",
                  techObject: [
                    "Vite",
                    "React",
                    "Tailwind",
                    "Netlify",
                    "Django",
                    "Firebase",
                  ],
                },
              }}
            >
              <div className="flex items-center pl-5 gap-x-2 ">
                <FaReact className="w-4 h-4  " style={{ color: "#3d7699" }} />
                FromUsersVote.jsx
              </div>
            </NavLink>
          </div>
        </div>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to="/abouta"
        >
          <div className=" mt-1 flex items-center">
            <VscChevronRight className="w-5 h-5 mr-1" /> About
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Explorer;
