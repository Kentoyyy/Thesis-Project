// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg- text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-3xl font-bold">
          Logo
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400" color=''>Home</Link>
          <Link href="/about" className="hover:text-g-400">About</Link>
          <Link href="/features" className="hover:text-gray-400">Features</Link>
          <Link href="/support" className="hover:text-black-400">Help & Support</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          <Link href="/login" className="text-custom-blue hover:text-gray-400">Login</Link>
        </div>
        <button className="md:hidden text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
