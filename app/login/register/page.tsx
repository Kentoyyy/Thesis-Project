"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import logo from '../../../public/images/logoelcdl.png';
import Image from 'next/image';


const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md shadow-md w-full max-w-md p-6 overflow-y-auto max-h-[80vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-lg font-medium text-gray-800 mb-4">Terms and Conditions</h2>
        <div className="text-sm text-gray-600 space-y-4">
          <p><strong>Last Updated:</strong> [Insert Date]</p>
          <p>By using our Service, you agree to the following terms:</p>
          <h3 className="font-semibold">1. Purpose</h3>
          <p>Our Service uses machine learning to help identify potential learning disabilities in children.</p>
          <h3 className="font-semibold">2. Use of the Service</h3>
          <p>You must be at least 18 years old or have parental consent to use our Service.</p>
          <h3 className="font-semibold">3. Privacy and Security</h3>
          <p>We protect your data in accordance with our Privacy Policy.</p>
          <h3 className="font-semibold">4. Disclaimer</h3>
          <p>The Service does not provide medical diagnoses and should not replace professional advice.</p>
          <h3 className="font-semibold">5. Liability</h3>
          <p>The Service is provided “as is” without warranties of any kind.</p>
          <h3 className="font-semibold">6. Modifications</h3>
          <p>We may update these Terms at any time. Continued use constitutes acceptance of the new terms.</p>
          <h3 className="font-semibold">7. Governing Law</h3>
          <p>These Terms are governed by the laws of [Your Jurisdiction].</p>
          <h3 className="font-semibold">8. Contact</h3>
          <p>For questions, contact us at [Your Contact Information].</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-6">
              <Image src={logo} alt="Logo" width={60} height={60} />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Create Your Account
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Parent Information</h3>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-400 placeholder-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mt-2 border-b border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-400 placeholder-gray-500"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Child Information</h3>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-400 placeholder-gray-500"
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    className="w-full mt-2 border-b border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-400 placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Account Information</h3>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-400 placeholder-gray-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mt-2 border-b border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-400 placeholder-gray-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-500 rounded focus:ring-blue-400"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-500 underline focus:outline-none"
                  >
                    Terms and Conditions
                  </button>{" "}
                  and Privacy Policy.
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-secondary-color text-white text-sm rounded hover:bg-primary-color focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>

      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default RegisterPage;
