import { EducationBase } from "../../../utilities/types";
import TextCard from "./TextCard";
import { Education } from "../../../DB/Education";

const EduInfo = () => {
  return (
    <div>
      <h4 className="font-semibold font-montserrat md:text-lg lg:text-xl xl:text-2xl">
        |CODERHOUSE ~ FullStack Developer ~ 2021-2022
      </h4>
      {Education.map((el: EducationBase) => (
        <TextCard key={Math.random()} course={el} />
      ))}
    </div>
  );
};

export default EduInfo;
