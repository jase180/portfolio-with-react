import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Define the debounce function
function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function Header() {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop - 100);
  };

  // Debounce the scroll event handler with a delay of 300ms
  const debouncedScrollHandler = debounce(() => {
    // Your scroll event handling logic here
    console.log("Scrolled");
  }, 300);

  // Add the scroll event listener using the debounced scroll handler
  React.useEffect(() => {
    window.addEventListener("scroll", debouncedScrollHandler);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [debouncedScrollHandler]);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-100 z-10 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-semibold text-gray-800">Jason Lee</h1>
        <nav className="mt-2">
          <ul className="flex">
            <li className="mr-6">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800"
                onClick={() => scrollToSection("about")}
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to="journey"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800"
                onClick={() => scrollToSection("journey")}
              >
                Journey
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
