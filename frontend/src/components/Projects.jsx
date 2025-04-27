import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import projectsData from "../data/projects";

export default function Projects() {
  const [projects] = useState(projectsData);
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    AOS.refresh();
  }, [projects]);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const handleToggle = () => {
    setShowAll(!showAll);

    setTimeout(() => {
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={projectsRef}
    >
      <h2
        className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
        data-aos="fade-up"
      >
        Featured Projects
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {displayedProjects.map((p, i) => (
          <div
            key={p.id}
            className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <img
              loading="lazy"
              src={p.imageUrl}
              alt={p.title}
              className="rounded mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{p.description}</p>
            <a
              href={p.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={handleToggle}
            className="bg-black hover:bg-gray-800 text-white py-2 px-6 rounded text-sm transition"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      )}
    </section>
  );
}
