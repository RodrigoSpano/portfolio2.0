import { FiFolder, FiGithub } from "react-icons/fi";
import { CiShare1 } from "react-icons/ci";

const CardTop = ({
  githubUrl,
  deployUrl,
}: {
  githubUrl: string;
  deployUrl: string;
}) => {
  return (
    <div className="flex items-center justify-between pt-4 px-10">
      <FiFolder className="text-sky-700 text-3xl" />
      <div className="flex gap-5 text-2xl text-zinc-700">
        <a target="_blank" href={githubUrl}>
          <FiGithub className=" hover:text-sky-600 cursor-pointer" />
        </a>
        <a
          target="_blank"
          href={deployUrl}
          aria-disabled={deployUrl ? true : false}
        >
          <CiShare1
            className={`${
              deployUrl
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
