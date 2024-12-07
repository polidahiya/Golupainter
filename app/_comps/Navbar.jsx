import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            FurnitureCare
          </Link>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-theme">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-theme">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-theme">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-theme">
              Contact Us
            </Link>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-theme">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
