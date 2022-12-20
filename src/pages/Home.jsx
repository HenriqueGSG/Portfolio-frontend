import React from "react";
import { Skills } from "../components/index";

const Home = () => {
  return (
    <div className="flex items-center w-full ">
      <div className="w-3/6 text-white"> EDITOR</div>
      <div className="flex flex-col w-3/6 min-h-screen bg-white bg-gradient-to-r from-vs-code-nav-files-top to-main-bg ">
        <div className="flex flex-col items-center w-full p-5 text-white border-b-2 gap-y-1">
          <img
            className="object-cover bg-black border-4 rounded-full shadow-lg h-72 w-72"
            src="https://drive.google.com/uc?export=view&id=103LDTcScymnkvTeOFuWXsCsDrIMW0IsM"
            alt=""
          />
          <h1 className="text-3xl font-semibold">Henrique Guarnieri</h1>
          <span className="text-2xl text-neutral-200">Idade: 25</span>
          <span className="text-2xl text-neutral-200">
            Cidade: Piracicaba/SP
          </span>
        </div>
        <div className="w-full h-full p-3 text-white ">
          <div className="flex items-center pb-2 border-b-4">
            <h2 className="text-3xl font-semibold ">Skills:</h2>
            <div className="flex justify-center w-full px-10 gap-x-3">
              <div className="flex gap-x-2">
                <div className="w-6 h-6 bg-red-600 border-b-4 border-red-900 rounded-full shadow-lg"></div>
                <span>1 project</span>
              </div>
              <div className="flex gap-x-2">
                <div className="w-6 h-6 bg-yellow-300 border-b-4 border-yellow-700 rounded-full shadow-lg"></div>
                <span>2-3 projects</span>
              </div>
              <div className="flex gap-x-2">
                <div className="w-6 h-6 bg-green-400 border-b-4 border-green-700 rounded-full shadow-lg "></div>
                <span> 4+ projects</span>
              </div>
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Home;
