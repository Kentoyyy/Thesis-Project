"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import logo from '../../public/images/logoelcdl.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClassNames = (path: string) =>
    `text-sm font-medium ${ // Adjusted the font size to text-base
      pathname === path 
        ? 'text-primary underline underline-offset-4 decoration-primary' 
        : 'text-gray-800'
    } hover:text-primary transition duration-300`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full flex justify-between items-center py-4 px-5 md:px-10 lg:px-28">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <Link href="/" className="text-xl font-bold text-gray-900 ml-3">
            EarlyEdge
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <HiOutlineX className="text-2xl text-gray-800" /> : <HiOutlineMenu className="text-3xl text-gray-800" />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={linkClassNames('/')}>
            Home
          </Link>
          <Link href="/about" className={linkClassNames('/about')}>
            About
          </Link>
          <Link href="/disabilities" className={linkClassNames('/disabilities')}>
            Detection Test
          </Link>
          <Link href="/machinemodel" className={linkClassNames('/machinemodel')}>
            ML Model
          </Link>
          <Link href="/resources" className={linkClassNames('/resources')}>
            Resources
          </Link>
          <Link href="/contact" className={linkClassNames('/contact')}>
            Contact
          </Link>
          <Link href="/login" className={linkClassNames('/login')}>
            Login
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-70 ${isOpen ? 'flex' : 'hidden'} md:hidden`}>
        <div className="bg-white w-64 h-full flex flex-col p-8 space-y-6 shadow-lg">
          <button onClick={toggleMenu} aria-label="Close Menu" className="self-end">
            <HiOutlineX className="text-3xl text-gray-800" />
          </button>
          <Link href="/" onClick={toggleMenu} className={linkClassNames('/')}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu} className={linkClassNames('/about')}>
            About
          </Link>
          <Link href="/disabilities" onClick={toggleMenu} className={linkClassNames('/disabilities')}>
            Detection Test
          </Link>
          <Link href="/machinemodel" onClick={toggleMenu} className={linkClassNames('/machinemodel')}>
            ML Model
          </Link>
          <Link href="/resources" onClick={toggleMenu} className={linkClassNames('/resources')}>
            Resources
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
