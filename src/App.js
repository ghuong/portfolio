import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // adjust dark mode things if needed
  };

  return (
    <main className={`${isDarkMode ? "dark" : ""} relative`}>
      <div className="absolute w-full h-full -z-50 bg-transparent dark:bg-darkmode-background-color transition-colors duration-300"></div>
      <Navbar onToggleDarkMode={toggleIsDarkMode} />
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
