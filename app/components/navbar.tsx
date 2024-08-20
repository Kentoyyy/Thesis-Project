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
      <div className="w-full flex justify-between items-center py-5 px-28">
        <Link href="/" className="text-xl font-extrabold text-black font-title">
          EarlyEdge
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-6 ml-auto mr-14 font-semibold items-center`}
        >
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
    </nav>
  );
};

export default Navbar;
