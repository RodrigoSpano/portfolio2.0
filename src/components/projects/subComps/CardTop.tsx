import { FiFolder, FiGithub } from "react-icons/fi";
import { CiShare1 } from "react-icons/ci";
import { ProjectBase } from "../../../utilities/types";

const CardTop = ({ project }: { project: ProjectBase }) => {
  return (
    <div className="flex items-center justify-between pt-4 px-10">
      <FiFolder className="text-sky-700 text-2xl lg:text-3xl" />
      <div className="flex gap-5 text-2xl text-zinc-700">
        <a target="_blank" href={project.githubUrl}>
          <FiGithub className=" hover:text-sky-600 cursor-pointer" />
        </a>
        <a
          target="_blank"
          href={project.deploy}
          aria-disabled={project.deploy ? true : false}
        >
          <CiShare1
            className={`${
              project.deploy
                ? "hover:text-sky-600 cursor-pointer"
                : "cursor-not-allowed"
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default CardTop;
