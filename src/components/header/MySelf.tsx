import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import { RootState } from "../../utilities/redux/store";

const MySelf = () => {
  const state = useSelector((state: RootState) => state.language.active);

  return (
    <div className="flex flex-col gap-2 font-bold text-xl md:text-4xl xl:text-6xl text-zinc-800 pl-5 xl:pl-0">
      <h1>
        {state === "english"
          ? "Hi, I'm Rodrigo Spano"
          : "Hola, soy Rodrigo Spano"}
      </h1>
      <div className="flex text-sky-600">
        {state === "spanish" ? <h2 className="pr-3">Desarrollador</h2> : null}
        <Typewriter
          options={{
            strings: ["FullStack", "Backend", "Frontend"],
            autoStart: true,
            loop: true,
          }}
        />
        {state === "english" ? <h2>Developer</h2> : null}
      </div>
    </div>
  );
};

export default MySelf;
