"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Icons for menu and close

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-black mt-5">
      <div className="w-full flex justify-between items-center py-5 px-5 md:px-10 lg:px-28">
        <Link href="/" className="text-xl font-extrabold text-black font-title">
          EarlyEdge
        </Link>
        <div className="md:hidden">
          {/* Button to toggle the mobile menu */}
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
          </button>
        </div>
        <div className={`hidden md:flex md:space-x-6 ml-auto mr-14 font-semibold items-center`}>
          {/* Desktop menu links */}
          <Link href="/" className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            About
          </Link>
          <Link href="/features" className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Features
          </Link>
          <Link href="/support" className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Help & Support
          </Link>
          <Link href="/contact" className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Contact
          </Link>
          <Link href="/login" className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Login
          </Link>
        </div>
      </div>
      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? 'flex' : 'hidden'} md:hidden`}>
        <div className="bg-white w-2/3 h-full flex flex-col p-5 space-y-4">
          <Link href="/" onClick={toggleMenu} className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu} className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            About
          </Link>
          <Link href="/features" onClick={toggleMenu} className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Features
          </Link>
          <Link href="/support" onClick={toggleMenu} className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Help & Support
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Contact
          </Link>
          <Link href="/login" onClick={toggleMenu} className="text-sm text-black hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-black transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
