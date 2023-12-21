import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { Navbar, Sidebar, Explorer, NavOpenFiles } from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex w-full  h-auto ">
          <div
            className=" min-h-full   bg-files-color flex"
            style={{ width: "450px" }}
          >
            <Sidebar />

            <Explorer />
          </div>
          <div className=" w-full h-auto bg-main-bg ">
            <NavOpenFiles />
            <Routes>
              <Route path="/Portfolio-frontend" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectName" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
