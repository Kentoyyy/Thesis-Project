"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';

// Modal Component for Terms and Conditions
const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          {/* Add more content as needed */}
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center flex-grow px-6 py-12">
        <div className="flex flex-col bg-white rounded-xl shadow-lg max-w-4xl w-full p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Sign up as Parent</h2>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Parent Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="parent-name">
                Parent's Name
              </label>
              <input
                type="text"
                id="parent-name"
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                placeholder="Enter parent's name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="parent-contact">
                Parent's Contact Number
              </label>
              <input
                type="text"
                id="parent-contact"
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                placeholder="Enter parent's contact number"
              />
            </div>

            {/* Child Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="child-name">
                Child's Name
              </label>
              <input
                type="text"
                id="child-name"
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                placeholder="Enter child's name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="child-age">
                Child's Age
              </label>
              <input
                type="number"
                id="child-age"
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                placeholder="Enter child's age"
              />
            </div>

            {/* Login Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                placeholder="********"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="inline-flex items-center mt-4">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-3 text-gray-700">
                  I agree with the{' '}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Terms and Conditions
                  </button>{' '}
                  and Privacy Policy.
                </span>
              </label>
            </div>

            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-6 shadow-md"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default RegisterPage;
