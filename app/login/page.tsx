import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">WELCOME BACK</h2>
        <p className="text-gray-500 mb-8">Welcome back! Please enter your details.</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="text-red-500 focus:ring-red-500 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-red-500 hover:underline">
              Forgot password
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
          >
            Sign in
          </button>
          <button
            type="button"
            className="w-full py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Sign in with Google
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{' '}
          <a href="#" className="text-red-500 hover:underline">
            Sign up fo free!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
