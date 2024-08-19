import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent text-white mt-3">
      <div className="w-full flex justify-start items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-primary-color ml-36 font-title">
          EarlyEdge
        </Link>
        <div className="hidden md:flex space-x-6 ml-auto mr-14 font-semibold">
          <Link href="/" className="text-base text-sub-color hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-current transition duration-300">Home</Link>
          <Link href="/about" className="text-base text-sub-color hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-current transition duration-300">About</Link>
          <Link href="/features" className="text-base text-sub-color hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-current transition duration-300">Features</Link>
          <Link href="/support" className="text-base text-sub-color hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-current transition duration-300">Help & Support</Link>
          <Link href="/contact" className="text-base text-sub-color hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-current transition duration-300">Contact</Link>
          <Link href="/login" className="text-base text-sub-color hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-current transition duration-300">Login</Link>
        </div>
        <button className="md:hidden text-black ml-auto">
          {/* Menu button content */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
