import React from "react";
import { motion } from "framer-motion";

const Projects = ({ projects }) => (
  <motion.section
    id="projects"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="my-20"
  >
    <h2 className="text-4xl font-bold text-center mb-8 text-lavender">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-project p-6 shadow-lg rounded-lg transition-all duration-300 hover:bg-indigo-600"
        >
          <h3 className="text-2xl font-bold text-gray-50 mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          {/* Tech Stack Section */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs font-semibold text-gray-100 bg-indigo-700 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
