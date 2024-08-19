import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent text-black mt-5">
      <div className="w-full flex justify-start items-center py-5 px-8">
        <Link href="/" className="text-xl font-extrabold text-black ml-32 font-title">
          EarlyEdge
        </Link>
        <div className="hidden md:flex space-x-6 ml-auto mr-14 font-semibold ">
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
