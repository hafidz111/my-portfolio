import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "../data/skills";

export default function Skill() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12"
          data-aos="fade-up"
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg text-center font-semibold transition transform hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className="mb-4 flex justify-center items-center"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
