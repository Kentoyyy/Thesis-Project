import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg max-w-4xl overflow-hidden w-full">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome Back</h2>
          <p className="text-gray-600 mb-6">Please enter your details to continue.</p>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                <label htmlFor="remember-me" className="ml-2 text-gray-700 text-sm">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-red-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mb-3 text-sm"
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
          <p className="text-xs text-center text-gray-500 mt-6">
            Don’t have an account?{' '}
            <Link href="#" className="text-red-500 hover:underline">
              Sign up for free!
            </Link>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
          <div className="w-full h-full relative">
            <Image
              src="/images/kidlogin.png" // Reference the image directly by its path
              alt="Login Image"
              layout="fill"
              objectFit="contain" // This ensures the image is scaled to fit within its container without being cropped
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
