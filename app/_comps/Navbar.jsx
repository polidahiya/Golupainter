import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-800">
            FurnitureCare
          </a>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-theme">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-theme">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-theme">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-theme">
              Contact Us
            </a>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-theme">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
