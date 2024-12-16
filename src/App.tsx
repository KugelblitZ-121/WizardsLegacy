import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Poster from "./pages/PosterSection";
import Section2 from "./pages/TeamSection";
import Trailer from "./pages/TrailerSection";
import Gameplay from "./pages/GameplaySection";
import Comics from "./pages/ComicsSection";
//import Section6 from "./pages/Section6";

function App() {
  return (
    <div className="flex flex-col bg-secondary-200">
      <NavBar />
      <Poster />
      {/* <div className="w-full h-2"></div> */}
      <Trailer />
      <Gameplay />
      <Comics />
      <Section2 />
      <div className="w-full h-2"></div>
      <Footer />
    </div>
  );
}

export default App;
