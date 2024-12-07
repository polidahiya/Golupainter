import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 FurnitureCare. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          {/* Facebook */}
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-theme transition"
          >
            <FaFacebookF className="w-5 h-5" />
          </Link>
          {/* Instagram */}
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-theme transition"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          {/* Twitter */}
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-theme transition"
          >
            <FaTwitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
