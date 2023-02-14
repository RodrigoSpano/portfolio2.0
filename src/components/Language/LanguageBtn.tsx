import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeLang } from "../../utilities/redux/slices/langSlice";

const LanguageBtn = () => {
  const [langAct, setLangAct] = React.useState<string>("english");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (langAct === "english") {
      setLangAct("spanish");
    } else if (langAct === "spanish") {
      setLangAct("english");
    }
  };

  React.useEffect(() => {
    dispatch(changeLang(langAct));
  }, [langAct]);

  let nameForView =
    langAct === "english" ? "ENG" : langAct === "spanish" && "ESP";

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer font-semibold hover:text-zinc-500 text-zinc-800 bottom-10 right-5 fixed"
    >
      {nameForView}
    </motion.div>
  );
};

export default LanguageBtn;
