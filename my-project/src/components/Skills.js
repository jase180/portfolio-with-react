// Skills.js

import React from 'react';
import { motion } from "framer-motion"; // Import motion from Framer Motion

function Skills() {
  return (
    <motion.div
    className="py-8 flex justify-center items-center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Programming Languages</h3>
        <p className="text-gray-600">Python, Java, JavaScript</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">Frontend Technologies</h3>
        <p className="text-gray-600">HTML, CSS, JavaScript (including frameworks like React), Tailwind CSS, Bootstrap</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">Backend Frameworks</h3>
        <p className="text-gray-600">Flask</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">Database</h3>
        <p className="text-gray-600">SQL</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">Languages</h3>
        <p className="text-gray-600">Fluent in English and Chinese (Mandarin/Cantonese), proficient in reading and writing Chinese characters</p>
      </div>
    </div>
    </motion.div>
  );
}

export default Skills;
