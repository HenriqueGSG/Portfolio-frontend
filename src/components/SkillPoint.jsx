import React from "react";

const SkillPoint = ({ bgColor, borderColor }) => {
  return (
    <div
      className={`${bgColor} ${borderColor} w-4 h-4 border-b-4 rounded-full absolute top-0 right-0`}
    ></div>
  );
};

export default SkillPoint;
