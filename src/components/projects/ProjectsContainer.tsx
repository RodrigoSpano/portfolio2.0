import React from "react";
import ProjectCard from "./ProjectCard";
import { Projects } from "../../DB/projectsDB";
import { ProjectBase } from "../../utilities/types";

const ProjectsContainer = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen items-center justify-center py-10">
      <h3 id="projects" className="font-bold text-6xl text-zinc-800">
        Some of my own projects
      </h3>
      <div className="flex flex-wrap gap-5 max-w-[1000px]">
        {Projects.map((el: ProjectBase) => (
          <ProjectCard project={el} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
