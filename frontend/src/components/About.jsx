import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import certifications from "../data/certifications";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-4" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'm a passionate designer and developer with 1 year of experience
            creating beautiful and functional digital experiences.
          </p>
          <div className="flex space-x-4 text-2xl text-gray-600 dark:text-gray-300">
            <a
              href="https://github.com/hafidz111"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <FaGithub className="text-gray-600 dark:text-gray-300 hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/hafidzq/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <FaLinkedin className="text-blue-600 hover:text-blue-800" />
            </a>
          </div>
        </div>
        <div
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          data-aos="fade-left"
        >
          <img
            loading="lazy"
            src="https://i.pinimg.com/736x/83/47/d8/8347d82f981225c121cdf2aa5b21a779.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-16 max-w-5xl mx-auto px-4" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={cert.id * 100}
            >
              <h4 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                {cert.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {cert.issuer}, {cert.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
