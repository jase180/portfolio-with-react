// Contact.js

import React from 'react';
import { motion } from "framer-motion"; // Import motion from Framer Motion

function Contact() {
  return (
    <motion.div
    className="py-8"
    initial={{ opacity: 0, y: -50 }} // Initial state (invisible and slightly above)
    animate={{ opacity: 1, y: 0 }}    // Final state (visible and at its original position)
    transition={{ duration: 0.5 }}
  >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
        <div className="mt-4">
          <p className="text-gray-600">Feel free to reach out to me:</p>
          {/* Contact Form */}
          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name:</label>
              <input type="text" id="name" name="name" className="form-input mt-1 block w-full border border-black" /> {/* Add border class here */}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email:</label>
              <input type="email" id="email" name="email" className="form-input mt-1 block w-full border border-black" /> {/* Add border class here */}
            </div>
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


import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header"; // Import Header component
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Journey from "../components/Journey";
import Skills from "../components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-red-100">
      {/* Header */}
      <Header /> {/* Use Header component */}

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20 pb-8">
        {/* About Section */}
        <motion.section id="about" className="py-8" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="max-w-3xl mx-auto">
            <About />
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" className="py-8" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="max-w-3xl mx-auto">
            <Projects />
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section id="skills" className="py-8" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="max-w-3xl mx-auto">
            <Skills />
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section id="journey" className="py-8" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="max-w-3xl mx-auto">
            <Journey />
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" className="py-8" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="max-w-3xl mx-auto">
            <Contact />
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;



// // App.js

// import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll"; // Import Link and animateScroll from react-scroll
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Journey from "./components/Journey";
// import Skills from "./components/Skills";

// function App() {
//   return (
//     <div className="min-h-full bg-red-100">
//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-blue-100 z-10 py-4">
//         <div className="container mx-auto px-4">
//           <h1 className="text-5xl font-semibold text-gray-800">Jason Lee</h1>
//           <nav className="mt-2">
//             <ul className="flex">
//               {/* Use Link components instead of regular anchor links */}
//               <li className="mr-6"><Link to="about" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800">About</Link></li>
//               <li className="mr-6"><Link to="projects" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800">Projects</Link></li>
//               <li className="mr-6"><Link to="skills" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800">Skills</Link></li>
//               <li className="mr-6"><Link to="journey" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800">Journey</Link></li>
//               <li><Link to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800">Contact</Link></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 pt-20 pb-8">
//         <section id="about" className="py-8">
//           <About />
//         </section>
//         <section id="projects" className="py-8">
//           <Projects />
//         </section>
//         <section id="skills" className="py-8">
//           <Skills />
//         </section>
//         <section id="journey" className="py-8">
//           <Journey />
//         </section>
//         <section id="contact" className="py-8">
//           <Contact />
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="fixed bottom-0 left-0 w-full bg-white shadow z-10 py-4">
//         <div className="container mx-auto px-4">
//           <p className="text-gray-600">&copy; 2024 My Portfolio</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
