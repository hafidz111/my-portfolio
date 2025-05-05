import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ toggleDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Portfolio.
        </div>

        <div className="hidden md:flex items-center space-x-6 text-gray-600 dark:text-gray-300">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-gray-900 dark:hover:text-white capitalize"
            >
              {section}
            </a>
          ))}
          
          <button
            onClick={toggleDark}
            className="p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            🌙/☀️
          </button>
        </div>

        <button
          className="md:hidden text-2xl text-gray-600 dark:text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-4">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white capitalize"
              onClick={() => setOpen(false)}
            >
              {section}
            </a>
          ))}

          <button
            onClick={toggleDark}
            className="p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            🌙/☀️
          </button>
        </div>
      )}
    </nav>
  );
}
