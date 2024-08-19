import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-3 border-t">
      <div className="container mx-auto text-center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} ECLD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
