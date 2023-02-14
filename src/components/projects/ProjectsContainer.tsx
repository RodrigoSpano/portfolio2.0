import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import { Projects } from "../../DB/projectsDB";
import { Projectos } from "../../DB/projectosDB";
import { ProjectBase } from "../../utilities/types";
import { RootState } from "../../utilities/redux/store";

const ProjectsContainer = () => {
  const state = useSelector((state: RootState) => state.language.active);

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen items-center justify-center pt-20">
      <h3
        id="projects"
        className="font-bold text-2xl lg:text-4xl xl:text-6xl text-zinc-800 font-montserrat text-center"
      >
        {state === "english"
          ? "Some of my own projects"
          : state === "spanish"
          ? "Algunos de mis projectos"
          : null}
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-5 max-w-[1000px]">
        {state === "english"
          ? Projects.map((el: ProjectBase) => (
              <ProjectCard key={Math.random()} project={el} />
            ))
          : state === "spanish"
          ? Projectos.map((el: ProjectBase) => (
              <ProjectCard key={Math.random()} project={el} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ProjectsContainer;
