import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div>
       <Navbar/>
       <Home/>
       <Skills/>
       <Projects/>
       <About/>
       <Contact/>
    </div>
  );
}

export default App;
