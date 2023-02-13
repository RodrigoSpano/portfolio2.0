import Typewriter from "typewriter-effect";

const MySelf = () => {
  return (
    <div className="flex flex-col gap-2 font-bold text-xl md:text-4xl xl:text-6xl text-zinc-800 pl-5 xl:pl-0">
      <h1>Hi, I'm Rodrigo Spano</h1>
      <div className="flex text-sky-600">
        <Typewriter
          options={{
            strings: ["FullStack", "Backend", "Frontend"],
            autoStart: true,
            loop: true,
          }}
        />
        <h2>Developer</h2>
      </div>
    </div>
  );
};

export default MySelf;
