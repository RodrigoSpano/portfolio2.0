import { LinksProps } from "../../utilities/types";
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
    <div className="w-screen h-[80px] flex justify-end px-10 select-none ">
      <div className="flex gap-20 items">
        {linksArr.map((el: LinksProps) => (
          <LinksCard text={el.text} path={el.path} />
        ))}
      </div>
    </div>
  );
};

export default NavbarContainer;
