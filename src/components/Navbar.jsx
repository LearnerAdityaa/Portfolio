// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="sticky top-0 left-0 right-0 z-50 bg-black text-white px-8 md:px-16 lg:px-24">
//       <div className="container py-2 flex justify-center md:justify-between items-center">
//         <div className="text-2xl font-bold hidden md:inline">
//           <a href="#" aria-label="Go to Home">
//             <h3 id="logo">
//               {" "}
//               <i> ADITYA</i>
//             </h3>
//           </a>
//         </div>
//         <div className="space-x-6">
//           <a href="#home" className="hover:text-gray-400" aria-label="Home">
//             Home
//           </a>
//           <a
//             href="#about"
//             className="hover:text-gray-400"
//             aria-label="About Me"
//           >
//             About Me
//           </a>
//           <a
//             href="#service"
//             className="hover:text-gray-400"
//             aria-label="Services"
//           >
//             Services
//           </a>
//           <a
//             href="#project"
//             className="hover:text-gray-400"
//             aria-label="Project"
//           >
//             Project
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-gray-400"
//             aria-label="Contact"
//           >
//             Contact
//           </a>
//         </div>
//         <a
//           href="#contact"
//           className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//           aria-label="Contact Me"
//         >
//           Contact Me
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#" aria-label="Go to Home">
            <h3 id="logo">
              {" "}
              <i>ADITYA</i>
            </h3>
          </a>
        </div>
        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        {/* Menu Items */}
        <div
          className={`space-x-6 md:flex items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:space-x-6 absolute md:static left-0 right-0 bg-black md:bg-transparent p-4 md:p-0 top-full md:top-auto`}
        >
          <a
            href="#home"
            className="hover:text-gray-400 block md:inline"
            aria-label="Home"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 block md:inline"
            aria-label="About Me"
          >
            About Me
          </a>
          <a
            href="#service"
            className="hover:text-gray-400 block md:inline"
            aria-label="Services"
          >
            Services
          </a>
          <a
            href="#project"
            className="hover:text-gray-400 block md:inline"
            aria-label="Project"
          >
            Project
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 block md:inline"
            aria-label="Contact"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hidden md:inline"
            aria-label="Contact Me"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
