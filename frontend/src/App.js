import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark.toString());
  }, [dark]);

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar toggleDark={() => setDark((prev) => !prev)} />
      <Hero />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
