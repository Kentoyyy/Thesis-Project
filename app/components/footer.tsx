import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-3 border-t">
      <div className="max-w-screen-xl mx-auto px-4 text-center flex flex-col items-center md:flex-row md:justify-between md:items-center">
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} ECLD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
