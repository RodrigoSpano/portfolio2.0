import { LinksProps } from "../../utilities/types";
import DownloadBtn from "./subComps/DownloadBtn";
import LinksCard from "./subComps/LinksCard";

const NavbarContainer = () => {
  let linksArr: LinksProps[] = [
    { text: "about", path: "about" },
    { text: "skills", path: "skills" },
    { text: "projects", path: "projects" },
    { text: "education", path: "education" },
    { text: "contact", path: "contact" },
  ];

  return (
    <div className="relative w-screen h-[80px] flex flex-col-reverse md:flex-row justify-end px-10 select-none ">
      <DownloadBtn />
      <div className="flex justify-center flex-wrap gap-5 pt-5 md:pt-0 md:gap-2 xl:gap-20 ">
        {linksArr.map((el: LinksProps) => (
          <LinksCard key={Math.random()} text={el.text} path={el.path} />
        ))}
      </div>
    </div>
  );
};

export default NavbarContainer;
