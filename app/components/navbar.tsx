import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    
      <nav className="bg-transparent text-white mt-3 ">
      <div className="w-full flex justify-start items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-primary-color ml-36">
          EarlyEdge
        </Link>
        <div className="hidden md:flex space-x-6 ml-auto" >
        <Link href="/" className="text-base text-sub-color hover:text-gray-400">Home</Link>
          <Link href="/about" className="text-base text-sub-color hover:text-gray-400">About</Link>
          <Link href="/features" className="text-base text-sub-color hover:text-gray-400">Features</Link>
          <Link href="/support" className="text-base text-sub-color hover:text-gray-400">Help & Support</Link>
          <Link href="/contact" className="text-base text-sub-color hover:text-gray-400">Contact</Link>
          <Link href="/login" className="text-base text-sub-color hover:text-gray-400">Login</Link>
        </div>
        <button className="md:hidden text-black ml-auto">
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
