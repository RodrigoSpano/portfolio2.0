import { SkillDB } from "../../DB/skillsDB";
import { SKillsBase } from "../../utilities/types";
import SkillCard from "./subComps/SkillCard";
import { useSelector } from "react-redux";
import { RootState } from "../../utilities/redux/store";

const SkillsContainer = () => {
  const state = useSelector((state: RootState) => state.language.active);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-10 gap-10">
      <h3
        id="skills"
        className="  text-2xl lg:text-4xl xl:text-6xl font-bold text-zinc-800 font-montserrat"
      >
        {state === "english"
          ? "My Skills"
          : state === "spanish"
          ? "Tecnologias"
          : null}
      </h3>
      <div className="flex gap-5 md:gap-10 max-w-[1400px] flex-wrap items-center justify-center">
        {SkillDB.map((el: SKillsBase) => (
          <SkillCard key={Math.random()} name={el.name} path={el.path} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
