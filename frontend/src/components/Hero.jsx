import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20"
    >
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
          Hi, I’m <span className="text-blue-500">Hafidz</span> 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Android Developer & UI/UX Enthusiast. Turning ideas into impactful
          digital experiences.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition"
          >
            View Projects
          </a>
          <a
            href="/cv_hafidz.pdf"
            download
            className="border border-blue-500 text-blue-500 hover:bg-blue-100 px-6 py-3 rounded-full transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3 rounded-full transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
