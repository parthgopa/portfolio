import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="overflow-x-hidden w-screen">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
    </div>
  );
}

export default App;
