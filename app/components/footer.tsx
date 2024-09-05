import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa';

const FooterNav = () => {
  return (
    <nav className="bg-white-400   text-white py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4">
          <a href="#" className="text-black hover:text-gray-400">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
         
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mb-4">
          <li>
            <a href="/" className="text-black hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-black hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/disabilities" className="text-black hover:text-gray-400">
              Detection
            </a>
          </li>
          <li>
            <a href="/machinemodel" className="text-black hover:text-gray-400">
              ML Model
            </a>
          </li>
          <li>
            <a href="/resources" className="text-black hover:text-gray-400">
              Resources
            </a>
          </li>
          <li>
            <a href="/contact" className="text-black hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright Text */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Designed by Ken Alcantara
        </p>
      </div>
    </nav>
  );
};

export default FooterNav;

