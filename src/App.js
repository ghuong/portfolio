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
      <div className="absolute w-full h-screen -z-20">
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second transition-colors duration-300 w-44 h-44"></div>
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second transition-colors duration-300 w-28 h-28 top-36 right-28"></div>
        <div className="absolute rounded-full bg-color-main w-12 h-12 bottom-24 left-[60%]"></div>
      </div>
      <div className="absolute w-full h-full -z-50 bg-transparent dark:bg-darkmode-background-color transition-colors duration-300"></div>
      <div className="absolute w-full h-full bg-transparent -z-10 backdrop-blur-2xl dark:backdrop-blur-[50px]"></div>
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
