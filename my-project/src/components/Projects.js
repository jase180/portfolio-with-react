// Projects.js
import React from 'react';
import { motion } from "framer-motion"; // Import motion from Framer Motion


function Projects() {
  return (
    <motion.div
    className="py-8 flex justify-center items-center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
      <div className="mt-4">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Portfolio Page:</span>
          <p className="text-gray-600">React JS, Tailwind CSS</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold mr-2">Subreddit search with Reddit API:</span>
          <p className="text-gray-600">Python script ran on Django and React</p>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Projects;
