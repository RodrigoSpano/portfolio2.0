import { CgCode, CgCodeSlash } from "react-icons/cg";
import { LinksProps } from "../../../utilities/types";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const LinksCard = ({ text, path }: LinksProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: [1.2, 0.9, 1] }}
      className=" hover:underline decoration-sky-600 flex gap-2 font-mono text-zinc-700 items-center text-sm md:text-lg lg:text-xl xl:text-2xl cursor-pointer"
    >
      <CgCode />
      <Link to={path} smooth={true} duration={500} className="pb-1">
        {text}
      </Link>
      <CgCodeSlash />
    </motion.div>
  );
};

export default LinksCard;
