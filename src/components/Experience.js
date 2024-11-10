// src/components/Experience.js
import React from "react";
import { FaBuilding } from "react-icons/fa"; // Icon for added visual appeal

const Experience = ({ experience }) => (
  <section id="experience" className="experience-section py-12 px-4 lg:px-0 text-center">
    <h2 className="text-4xl font-semibold text-indigo-600 mb-12">Experience</h2>
    
    {/* Update the grid configuration here */}
    <div className="experience-list grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {experience.map((job, index) => (
        <div
          key={index}
          className="experience-card relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-lg p-6 text-left transform transition duration-300 hover:-translate-y-1 hover:scale-105"
        >
          <div className="icon-bg absolute -top-5 -left-5 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md">
            <FaBuilding className="text-indigo-700" size={20} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">{job.company}</h3>
          <p className="text-sm font-medium text-pink-200 mb-2">
            {job.role} - <span className="text-xs font-light">{job.period}</span>
          </p>
          <ul className="list-inside mt-2 text-white space-y-1 text-sm">
            {job.tasks.map((task, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 text-pink-200 font-bold">•</span>
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
