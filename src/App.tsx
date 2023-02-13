import HeaderContainer from "./components/header/HeaderContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import ProjectsContainer from "./components/projects/ProjectsContainer";
import SkillsContainer from "./components/skills/SkillsContainer";

function App() {
  return (
    <div className="select-none overflow-hidden min-h-screen min-w-full bg-zinc-100">
      <div className="h-screen">
        <NavbarContainer />
        <HeaderContainer />
      </div>
      <SkillsContainer />
      <ProjectsContainer />
    </div>
  );
}

export default App;
