// Journey.js

import React from 'react';
import { motion } from "framer-motion"; // Import motion from Framer Motion

function Journey() {
  return (
    <motion.div
    className="py-8 flex justify-center items-center" 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800">My Journey</h2>
      <div className="mt-4">
        <p className="text-gray-600">Here's a brief overview of my life story:</p>
        <ul className="mt-2">
          <li><strong>2011 - 2015:</strong> Moved to US from Hong Kong to study Civil Engineering in University of Illinois at Urbana-Champaign.</li>
          <li><strong>2015:</strong> Started working as a civil engineer</li>
          <li><strong>2020:</strong> Heart arrest prompting me to reconsider my life.</li>
          <li><strong>2021 - Present:</strong> Started learning self-taught to become a software engineer</li>
        </ul>
      </div>
    </div>
    </motion.div>
  );
}

export default Journey;
