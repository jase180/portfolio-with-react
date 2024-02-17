import React, { useState, useEffect } from "react"; // Import react and states

// Import all components
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
// import Links from "./component/Links"; to be finished

// Main
function App() {
  //Initialize "about" component to be default page
  const [currentPage, setCurrentPage] = useState("about"); 

  // Render the current page based on currentPage state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "journey":
        return <Journey />;
      case "skills":
        return <Skills />;
      default:
        return <About />;
    }
  };

  // Render page when a link is clicked
  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };

  // const controls = useAnimation(); TO BE REMOVED

  // Add event listener for wheel scroll
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentPage]);


  // Mouse wheel events - page switching (components)
  const handleScroll = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      // Scroll down
      switch (currentPage) {
        case "about":
          setCurrentPage("projects");
          break;
        case "projects":
          setCurrentPage("skills");
          break;
        case "skills":
          setCurrentPage("journey");
          break;
        case "journey":
          setCurrentPage("contact");
          break;
        default:
          break;
      }
    } else {
      // Scroll up
      switch (currentPage) {
        case "projects":
          setCurrentPage("about");
          break;
        case "skills":
          setCurrentPage("projects");
          break;
        case "journey":
          setCurrentPage("skills");
          break;
        case "contact":
          setCurrentPage("journey");
          break;
        default:
          break;
      }
    }
    // controls.start({  TO BE REMOVED
    //   initial: { opacity: 0, y: -50 }, // Initial state (invisible and slightly above)
    //   animate: { opacity: 1, y: 0 },    // Final state (visible and at its original position)
    //   transition: { duration: 0.5 }     // Transition duration
    // });
  };


  return (
    <div className="min-h-screen bg-white-100 flex flex-col justify-center items-center">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white-100 z-10 py-4">
        {/* Pass setCurrentPage function, handleLinkClick function, and currentPage state to Header */}
        <Header setCurrentPage={setCurrentPage} handleLinkClick={handleLinkClick} 
        currentPage={currentPage} />
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 pt-20 pb-8">
        {/* Render current page */}
          <div className="max-w-3xl mx-auto">{renderCurrentPage()}</div>
      </main>
    </div>
  );
}

export default App;
