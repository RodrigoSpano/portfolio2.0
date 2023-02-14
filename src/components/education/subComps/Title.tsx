import { useSelector } from "react-redux";
import { RootState } from "../../../utilities/redux/store";

const Title = () => {
  const state = useSelector((state: RootState) => state.language.active);
  return (
    <h3
      id="education"
      className=" text-2xl md:text-4xl lg:text-6xl font-bold font-montserrat text-center"
    >
      {state === "english"
        ? "Education & Certificates"
        : state === "spanish"
        ? "Educación y Certificados"
        : null}
    </h3>
  );
};

export default Title;
