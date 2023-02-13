import React from "react";
import EduInfo from "./subComps/EduInfo";
import Title from "./subComps/Title";

const EducationContainer = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen w-full py-10 items-center justify-center">
      <Title />
      <EduInfo />
    </div>
  );
};

export default EducationContainer;
