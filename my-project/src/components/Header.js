import React from "react";

function Header({ setCurrentPage }) { // passed to App.js
  const handleLinkClick = (page) => { //passed to App.js
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-5xl font-semibold text-gray-800">Jason Lee</h1>
      <nav className="mt-2">
        <ul className="flex">
          <li className="ml-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </li>
          <li className="ml-6">
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </a>
          </li>
          <li className="ml-6">
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </a>
          </li>
          <li className="ml-6">
            <a
              href="#journey"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleLinkClick("journey")}
            >
              Journey
            </a>
          </li>
          <li className="ml-6">
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
