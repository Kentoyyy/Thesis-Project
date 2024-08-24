import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">Welcome Back</h2>
        <p className="text-gray-500 text-sm mb-6">Please enter your details.</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="text-red-500 focus:ring-red-500 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-600 text-sm">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary-color text-white rounded-md hover:bg-secondary-color-600 focus:outline-none focus:ring-2 focus:ring-black-500 mb-3 text-sm"
          >
            Sign in
          </button>
          <button
            type="button"
            className="w-full py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </form>
        <p className="text-xs text-center text-gray-500 mt-5">
          Don’t have an account?{' '}
          <Link href="#" className="text-primary-color-500 hover:underline">
            Sign up for free!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
