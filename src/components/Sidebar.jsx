import React from "react";
import { VscFiles, VscGithub } from "react-icons/vsc";
import { GrLinkedinOption } from "react-icons/gr";
import { SlSocialLinkedin } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div
      className="  bg-main-sidebar h-full min-h-screen text-white flex flex-col items-center justify-start gap-8 pt-3"
      style={{ width: "80px" }}
    >
      <VscFiles className="w-9 h-9" />
      <VscGithub className="w-9 h-9" />
      {/* <GrLinkedinOption className="w-9 h-9" /> */}
      <SlSocialLinkedin className="w-9 h-9" />
    </div>
  );
};

export default Sidebar;
