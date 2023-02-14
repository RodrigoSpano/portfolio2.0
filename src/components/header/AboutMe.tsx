import { useSelector } from "react-redux";
import { RootState } from "../../utilities/redux/store";

const AboutMe = () => {
  const state = useSelector((state: RootState) => state.language.active);

  return (
    <p className=" text-sm max-w-[400px] sm:max-w-[500px] md:text-lg md:max-w-[700px] lg:text-xl lg:max-w-[900px] xl:text-3xl text-zinc-700 font-normal xl:max-w-[1200px] ">
      {state === "english"
        ? "Since I was very young I have been passionate about technology, always wanting to learn more and improve my knowledge in order to improve myself every day and give my best."
        : "Desde muy joven he sido un apasionado de la tecnología, siempre con ganas de aprender más y mejorar mis conocimientos para poder superarme cada día y dar lo mejor de mí."}
    </p>
  );
};

export default AboutMe;
