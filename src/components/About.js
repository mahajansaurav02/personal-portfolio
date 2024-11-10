// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = ({ description }) => (
  <motion.section
    id="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="my-20 text-center max-w-3xl mx-auto p-8 bg-dark-card rounded-lg shadow-xl"
  >
    <h2 className="text-4xl font-bold mb-4 text-coral">About Me</h2>
    <p className="text-lg text-slate-200">{description}</p>
  </motion.section>
);

export default About;
