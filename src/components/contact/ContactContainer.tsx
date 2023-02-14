import { useSelector } from "react-redux";
import { RootState } from "../../utilities/redux/store";
import SocialContainer from "./subComps/SocialContainer";

const ContactContainer = () => {
  const state = useSelector((state: RootState) => state.language.active);

  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center pb-10 gap-5">
      <h3
        id="contact"
        className=" text-2xl md:text-4xl lg:text-6xl font-montserrat font-bold"
      >
        {state === "english"
          ? "Get in Touch"
          : state === "spanish"
          ? "Contactame"
          : null}
      </h3>
      <p className=" md:text-lg xl:text-xl text-center font-cairo flex gap-1 flex-wrap text-zinc-700 items-center justify-center ">
        {state === "english"
          ? "My inbox is always open. You can contact me by"
          : state === "spanish"
          ? "Mi mail esta siempre abierto. Puedes contactarme mediante"
          : null}
        <strong className=" text-center text-black">
          rorrospano17@gmail.com
        </strong>
      </p>
      <SocialContainer />
    </div>
  );
};

export default ContactContainer;
