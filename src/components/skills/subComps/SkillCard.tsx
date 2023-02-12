import { motion } from "framer-motion";

const SkillCard = ({ path, name }: { path: string; name: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col w-[250px] h-[250px] bg-zinc-200 shadow-zinc-400 shadow-lg items-center justify-center gap-10 rounded-2xl hover:bg-sky-500 duration-300 ease-in transition-all text-zinc-70 hover:text-zinc-100"
    >
      <img src={path} alt={name} className="w-[80px]" />
      <p className="0 capitalize text-2xl font-semibold">{name}</p>
    </motion.div>
  );
};

export default SkillCard;
