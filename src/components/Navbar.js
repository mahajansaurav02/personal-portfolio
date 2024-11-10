import React, { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling (Install react-scroll package if not installed)

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-teal-900 bg-opacity-70 backdrop-blur-lg sticky top-0 z-10 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        {/* Logo and Heading */}
        <h1
  className="text-3xl font-bold tracking-widest cursor-pointer text-yellow-200 bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"
  style={{
    fontFamily: "'Poppins', sans-serif",
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  }}
>
  Saurav's Space
</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu for Desktop */}
        <div className={`space-x-8 text-lg ${isMobileMenuOpen ? "block" : "hidden"} lg:flex`}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="hover:text-orange-400 transition-all duration-300 font-semibold cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
