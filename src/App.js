import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";

function App() {
  return (
    <main className="text-gray-400 body-font">
      <div className="h-screen w-screen flex flex-col"> {/* About(+nav) fills screen */}
        <Navbar />
        <About />
      </div>
      <Projects />
      <Skills />
      <Education />
      <Work />
      <Contact />
    </main>
  );
}

export default App;
