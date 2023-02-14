import { EducationBase } from "../../../utilities/types";
import TextCard from "./TextCard";
import { Educacion, Education } from "../../../DB/Education";
import { useSelector } from "react-redux";
import { RootState } from "../../../utilities/redux/store";

const EduInfo = () => {
  const state = useSelector((state: RootState) => state.language.active);
  return (
    <div>
      <h4 className="font-semibold font-montserrat md:text-lg lg:text-xl xl:text-2xl">
        {state === "english"
          ? "|CODERHOUSE ~ FullStack Developer ~ 2021-2022"
          : state === "spanish"
          ? "|CODERHOUSE ~ Desarrollador FullStack ~ 2021-2022"
          : null}
      </h4>
      {state === "english"
        ? Education.map((el: EducationBase) => (
            <TextCard key={Math.random()} course={el} />
          ))
        : state === "spanish"
        ? Educacion.map((el: EducationBase) => (
            <TextCard key={Math.random()} course={el} />
          ))
        : null}
    </div>
  );
};

export default EduInfo;
