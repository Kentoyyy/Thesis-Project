import React from 'react';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Section - Information */}
        <div className="flex-1 p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up for Early Detection</h1>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-600">
              <span className="bg-primary-color p-2 rounded-full mr-3">✔</span> 
              Enter parent and child information
            </li>
            <li className="flex items-center text-gray-600">
              <span className="bg-primary-color p-2 rounded-full mr-3">✔</span>
              Get personalized assessment for your child
            </li>
            <li className="flex items-center text-gray-600">
              <span className="bg-primary-color p-2 rounded-full mr-3">✔</span>
              Access support and resources
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            Need help? <Link href="/support" className="text-secondary-color hover:underline">Contact Support</Link>
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 p-6 md:p-10 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Create Account</h2>
          <form className="space-y-4">
            {/* Parent Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="parent-name">
                Parent's Full Name
              </label>
              <input
                type="text"
                id="parent-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Enter your password"
              />
            </div>

            {/* Child Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="child-name">
                Child's Name
              </label>
              <input
                type="text"
                id="child-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Enter your child's name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="child-age">
                Child's Age
              </label>
              <input
                type="number"
                id="child-age"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Enter your child's age"
              />
            </div>

            {/* Newsletter Subscription */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                className="h-4 w-4 text-primary-color border-gray-300 rounded"
              />
              <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
                Subscribe to our newsletter
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-primary-color text-white rounded-md hover:bg-secondary-color focus:outline-none focus:ring-2 focus:ring-primary-color"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-secondary-color hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
