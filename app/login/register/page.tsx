"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import logo from '../../../public/images/logoelcdl.png';

// Modal Component for Terms and Conditions
const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto relative p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Terms and Conditions</h2>
        <p className="text-gray-700 mb-4">**Last Updated:** [Insert Date]</p>
        <p className="text-gray-700 mb-4">By using our Service, you agree to the following terms:</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Purpose</h3>
        <p className="text-gray-700 mb-4">
          Our Service uses machine learning to help identify potential learning disabilities in children.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Use of the Service</h3>
        <p className="text-gray-700 mb-4">
          You must be at least 18 years old or have parental consent to use our Service.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Privacy and Security</h3>
        <p className="text-gray-700 mb-4">
          We protect your data in accordance with our Privacy Policy.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Disclaimer</h3>
        <p className="text-gray-700 mb-4">
          The Service does not provide medical diagnoses and should not replace professional advice.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Liability</h3>
        <p className="text-gray-700 mb-4">
          The Service is provided “as is” without warranties of any kind.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Modifications</h3>
        <p className="text-gray-700 mb-4">
          We may update these Terms at any time. Continued use constitutes acceptance of the new terms.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Governing Law</h3>
        <p className="text-gray-700 mb-4">
          These Terms are governed by the laws of [Your Jurisdiction].
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">8. Contact</h3>
        <p className="text-gray-700 mb-4">For questions, contact us at [Your Contact Information].</p>
        <button
          onClick={onClose}
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-4"
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar /> {/* Add Navbar here */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-2/3 bg-white p-8">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Logo" className="w-24 h-24" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Create Your Account</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-x-8">
                <div>
                  <h3 className="text-gray-700 font-semibold mb-2">Parent Information</h3>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mt-4 border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  />
                </div>
                <div>
                  <h3 className="text-gray-700 font-semibold mb-2">Child Information</h3>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Age"
                    className="w-full mt-4 border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-gray-700 font-semibold mb-2">Account Information</h3>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mt-4 border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div className="flex items-center mt-6">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2 text-gray-700 text-sm">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Terms and Conditions
                  </button>{" "}
                  and Privacy Policy.
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-green-600 p-8 flex flex-col items-center justify-center">
            <div className="bg-green-800 p-4 rounded-full mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v8m4-4H8"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Guidelines</h2>
            <p className="text-white mb-4 text-center">
              Please ensure that the Parent and Child information provided is accurate.
            </p>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default RegisterPage;
