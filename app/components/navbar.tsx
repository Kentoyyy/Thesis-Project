"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import logo from '../../public/images/logoelcdl.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClassNames = (path: string) =>
    `text-sm ${pathname === path ? 'text-[#0D7C66] underline underline-offset-8 decoration-[#0D7C66]' : 'text-black'
    } hover:underline hover:underline-offset-8 hover:decoration-gray-600 focus:underline focus:underline-offset-8 focus:decoration-green-600 active:underline active:underline-offset-8 active:decoration-red-600 transition duration-300`;

  return (
    <nav className="sticky top-0 z-50 bg-white text-black shadow-md">
      <div className="w-full flex justify-between items-center py-5 px-5 md:px-10 lg:px-28">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <Link href="/" className="text-xl font-bold text-black font-title ml-2">
            EarlyEdge
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
          </button>
        </div>
        <div className="hidden md:flex md:space-x-6 ml-auto mr-14 font-semibold items-center">
          <Link href="/" className={linkClassNames('/')}>
            Home
          </Link>
          <Link href="/about" className={linkClassNames('/about')}>
            About
          </Link>
          <Link href="/features" className={linkClassNames('/features')}>
            Features
          </Link>
          <Link href="/contact" className={linkClassNames('/contact')}>
            Contact
          </Link>
          <Link href="/login" className={linkClassNames('/login')}>
            Login
          </Link>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? 'flex' : 'hidden'} md:hidden`}>
        <div className="bg-white w-2/3 h-full flex flex-col p-5 space-y-4">
          <Link href="/" onClick={toggleMenu} className={linkClassNames('/')}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu} className={linkClassNames('/about')}>
            About
          </Link>
          <Link href="/features" onClick={toggleMenu} className={linkClassNames('/features')}>
            Features
          </Link>
          <Link href="/contact" onClick={toggleMenu} className={linkClassNames('/contact')}>
            Contact
          </Link>
          <Link href="/login" onClick={toggleMenu} className={linkClassNames('/login')}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
