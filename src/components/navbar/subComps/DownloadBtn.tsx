import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";

const DownloadBtn = () => {
  return (
    <motion.a
      download
      href="/assets/cv.pdf"
      whileHover={{ scale: 1.1 }}
      className="flex gap-2 absolute left-10 top-5 items-center cursor-pointer font-mono   "
    >
      <BsDownload />
      <p>Download CV</p>
    </motion.a>
  );
};

export default DownloadBtn;
