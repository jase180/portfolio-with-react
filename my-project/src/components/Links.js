// Links.js

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
        <li>Email: jase180@email.com</li>
          <li>Github: <a href="https://github.com/jase180" className="text-blue-500 hover:underline">https://github.com/jase180</a></li>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
