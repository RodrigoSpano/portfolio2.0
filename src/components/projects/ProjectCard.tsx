import React from "react";
import { ProjectBase } from "../../utilities/types";
import CardTop from "./subComps/CardTop";
import { motion } from "framer-motion";
import CardText from "./subComps/CardText";
import TechCard from "./subComps/TechCard";

const ProjectCard = ({ project }: { project: ProjectBase }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-[450px] h-[300px] bg-white shadow-lg shadow-zinc-300 rounded-3xl flex flex-col gap-10"
    >
      <CardTop githubUrl={project.githubUrl} deployUrl={project.deploy!} />
      <CardText title={project.title} text={project.description} />
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {project.tech.map((el: string) => (
          <TechCard tech={el} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
