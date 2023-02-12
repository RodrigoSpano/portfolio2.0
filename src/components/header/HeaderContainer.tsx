import AboutMe from "./AboutMe";
import MySelf from "./MySelf";
import Picture from "./Picture";

const HeaderContainer = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-center gap-10 pt-20"
    >
      <div className="flex gap-32 items-center">
        <MySelf />
        <Picture />
      </div>
      <div className="w-full flex items-center justify-center">
        <AboutMe />
      </div>
    </div>
  );
};

export default HeaderContainer;
