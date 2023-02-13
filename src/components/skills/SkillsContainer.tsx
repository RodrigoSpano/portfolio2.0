import { SkillDB } from "../../DB/skillsDB";
import { SKillsBase } from "../../utilities/types";
import SkillCard from "./subComps/SkillCard";

const SkillsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-10 gap-10">
      <h3 id="skills" className="text-6xl font-bold text-zinc-800">
        My Skills
      </h3>
      <div className="flex gap-10 max-w-[1400px] flex-wrap items-center justify-center">
        {SkillDB.map((el: SKillsBase) => (
          <SkillCard key={Math.random()} name={el.name} path={el.path} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
