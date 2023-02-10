import { CgCode, CgCodeSlash } from "react-icons/cg";
import { LinksProps } from "../../../utilities/types";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const LinksCard = ({ text, path }: LinksProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: [0.9, 1.1] }}
      className=" hover:underline decoration-sky-600 flex gap-2 items-center text-2xl cursor-pointer"
    >
      <CgCode />
      <Link to={path} smooth={true} duration={400} className="font-mono">
        {text}
      </Link>
      <CgCodeSlash />
    </motion.div>
  );
};

export default LinksCard;