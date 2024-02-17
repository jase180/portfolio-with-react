// About.js

import React from 'react';
import { motion } from "framer-motion"; // Import motion from Framer Motion

function About() {

  return (
    <motion.div
    className="py-8 flex justify-center items-center" 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
      <div className="mt-4">
        <p>Hey there, I'm Jason.</p>
        <p className="mt-4"></p>
        <p>Self-taught, aspiring Software Engineer.</p>
        <p>Hong Kong native, University of Illinois at Urbana-Champaign-educated civil engineer.</p>
        <p>Passionate about tech, transitioning careers, finding joy in continued learning.</p>
        <p className="mt-4"></p>
        <p>Let's connect and collaborate!</p>
      </div>
    </div>
    </motion.div>    
  );
}

export default About;
