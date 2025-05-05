import React from "react";
import educations from "../data/educations";

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Educations</h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-6 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600 z-0" />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-16 relative z-10 pt-12">
          {educations.map((item, index) => (
            <div
              key={index}
              className="relative sm:w-[48%] text-center sm:text-left"
              data-aos="fade-up"
            ><div
            className="w-5 h-5 bg-blue-600 rounded-full 
                       absolute left-1/2 sm:left-1/2 transform -translate-x-1/2 
                       -top-8 z-20 
                       border-4 border-white dark:border-gray-900 
                       shadow-md"></div>
              <div
      className="w-5 h-5 bg-blue-600 rounded-full 
                 absolute left-1/2 sm:left-1/2 transform -translate-x-1/2 
                 -top-8 z-20 
                 border-4 border-white dark:border-gray-900 
                 shadow-md"
    ></div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.institution}</p>
                <span className="block mt-1 mb-2 text-blue-500 font-medium">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
