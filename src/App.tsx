import HeaderContainer from "./components/header/HeaderContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";

function App() {
  return (
    <div className="min-h-screen min-w-full bg-zinc-100">
      <NavbarContainer />
      <HeaderContainer />
    </div>
  );
}

export default App;
