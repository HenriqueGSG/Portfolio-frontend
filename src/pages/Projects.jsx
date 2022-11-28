import React from "react";
import { useLocation } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";

const Projects = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return (
    <div className="w-full  h-auto flex flex-col px-4 ">
      <div className="h-6 text-white flex w-full items-center">
        <span className="pr-1">projects</span>
        <VscChevronRight className="text-lg" />
        <FaReact className="mx-2" style={{ color: "#3d7699" }} />
        <span>{state.data.nameProject}.jsx</span>
      </div>
      <div className="flex gap-x-2">
        <span className="text-gray-500 mr-6">1</span>
        <span className=" text-vs-code-text-pink">import</span>
        <span className=" text-vs-code-text-blue">React</span>
        <span className=" text-vs-code-text-pink">from</span>
        <span className=" text-vs-code-text-orange">"react"</span>
      </div>
      <div className="flex gap-x-2">
        <span className="text-gray-500 mr-6">2</span>

        <span className=" text-vs-code-text-pink">import</span>
        <span className=" text-vs-code-text-blue">
          {state.data.nameProject}
        </span>
        <span className=" text-vs-code-text-pink">from</span>
        <span className=" text-vs-code-text-orange">"projects"</span>
      </div>
      <span className=" text-vs-code-text-green flex">
        <span className="text-gray-500 mr-6">3</span>
        // These are the tools used in the project
      </span>
      <div className="flex gap-x-2">
        <span className="text-gray-500 mr-6">4</span>

        <span className=" text-vs-code-text-pink">import</span>
        <span className=" text-vs-code-text-blue flex gap-x-1">
          <span className=" text-vs-code-text-yellow-darker">{"{"}</span>
          {state.data.tech}
          <span className=" text-vs-code-text-yellow-darker">{"}"}</span>
        </span>

        <span className=" text-vs-code-text-pink">from</span>
        <span className=" text-vs-code-text-orange">"technologies"</span>
      </div>
      <div className="flex gap-x-2">
        <span className="text-gray-500 mr-6">5</span>

        <span className=" text-vs-code-text-pink">import</span>
        <span className=" text-vs-code-text-blue flex gap-x-1">
          <span className=" text-vs-code-text-yellow-darker">{"{"}</span>
          {state.data.hosting}
          <span className=" text-vs-code-text-yellow-darker">{"}"}</span>
        </span>

        <span className=" text-vs-code-text-pink">from</span>
        <span className=" text-vs-code-text-orange">"hosting"</span>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-2 text-lg">
          <span className="text-gray-500 mr-6">6</span>

          <span className=" text-vs-code-text-blue-darker">const</span>
          <span className=" text-vs-code-text-yellow">Project</span>
          <span className="text-white">=</span>
          <span className=" text-vs-code-text-yellow-darker">{"( )"}</span>
          <span className=" text-vs-code-text-blue-darker">{"=>"}</span>
          <span className=" text-vs-code-text-yellow-darker">{"{"}</span>
        </div>
        <div>
          <span className="text-gray-500 mr-6">7</span>

          <span className=" ml-6 text-vs-code-text-pink text-lg">
            return {"("}
          </span>
        </div>
      </div>
      <div className="w-full h-full px-10">
        <iframe
          className="my-5"
          src={state.data.urlProject}
          height="800px"
          width="100%"
          title="description"
        ></iframe>
      </div>
      <div className="pl-5">
        <span className=" text-vs-code-text-pink text-lg">{")"}</span>
      </div>
    </div>
  );
};

export default Projects;
