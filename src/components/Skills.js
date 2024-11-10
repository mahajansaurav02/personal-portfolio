// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";

const Skills = ({ skills }) => (
  <motion.section
    id="skills"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="my-16 text-center"
  >
    <h2 className="text-4xl font-bold mb-6 text-pink-300">Skills</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-custom  text-gray-800 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 text-white"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
