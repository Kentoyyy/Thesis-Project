import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa';

const FooterNav = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaGoogle size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaYoutube size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mb-4">
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              News
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Our Team
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
