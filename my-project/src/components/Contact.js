import React from 'react';
import { motion } from "framer-motion"; // Import motion from Framer Motion

function Contact() {
  return (
    <motion.div
    className="py-8 flex justify-center items-center" 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 max-w-lg w-full"> 
        <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
        <div className="mt-4">
          <p className="text-gray-600">Feel free to reach out to me:</p>

          {/* Contact Form */}
          <form className="mt-4">
            {/* Name box */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name:</label>
              <input type="text" id="name" name="name" className="form-input mt-1 block w-full border border-black" /> {/* Add border class here */}
            </div>
            {/* Email box */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email:</label>
              <input type="email" id="email" name="email" className="form-input mt-1 block w-full border border-black" /> {/* Add border class here */}
            </div>
            {/* Message box */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">Message:</label>
              <textarea id="message" name="message" rows="4" className="form-textarea mt-1 block w-full border border-black"></textarea> {/* Add border class here */}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
