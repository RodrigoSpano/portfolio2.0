import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SocialMediaBase } from "../../../utilities/types";
import { motion } from "framer-motion";

const SocialCard = ({ media }: { media: SocialMediaBase }) => {
  return (
    <motion.a
      href={media.url}
      target="_blank"
      whileHover={{ scale: 1.1 }}
      className="flex gap-1 text-zinc-700 items-center cursor-pointer "
    >
      {media.name === "linkedin" ? (
        <FiLinkedin />
      ) : (
        media.name === "github" && <FiGithub />
      )}
      <p className="capitalize">{media.name}</p>
    </motion.a>
  );
};

export default SocialCard;
