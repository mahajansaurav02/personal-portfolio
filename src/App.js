// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { portfolioData } from "./data";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App bg-noise-pattern text-white">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
      <Profile  />
        <About description={portfolioData.about.description} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Contact contact={portfolioData.contact} />
      </main>
    </div>
  );
}

export default App;
