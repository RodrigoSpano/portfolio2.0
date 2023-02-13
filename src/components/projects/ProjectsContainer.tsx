import React from "react";
import ProjectCard from "./ProjectCard";
import { Projects } from "../../DB/projectsDB";
import { ProjectBase } from "../../utilities/types";

const ProjectsContainer = () => {
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen items-center justify-center py-10">
      <h3
        id="projects"
        className="font-bold text-2xl lg:text-4xl xl:text-6xl text-zinc-800 font-montserrat text-center"
      >
        Some of my own projects
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-5 max-w-[1000px]">
        {Projects.map((el: ProjectBase) => (
          <ProjectCard key={Math.random()} project={el} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
