import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";

function App() {
  return (
    <main>
      <div className="absolute w-full h-full bg-transparent blur-2xl -z-10">
        <div className="absolute rounded-full -z-50 bg-color-second w-44 h-44"></div>
        <div className="absolute rounded-full -z-50 bg-color-second w-28 h-28 top-40 right-28"></div>
        <div className="absolute rounded-full -z-50 bg-color-main w-12 h-12 bottom-24 left-[60%]"></div>
      </div>
      <Navbar />
      <About />
      <Work />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
