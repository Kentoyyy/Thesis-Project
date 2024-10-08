import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EarlyEdge - Login",
  icons: {
    icon: '/images/elcdfav.png',
  },
}

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-hidden">
   
      <Navbar />

    
      <div className="flex items-center justify-center flex-grow px-4 py-5 mt-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg max-w-4xl w-full">
         
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome kids!</h2>
            <p className="text-gray-600 mb-4">Please enter your details to continue.</p>
            <form>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary-color placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary-color placeholder-gray-500"
                  placeholder="********"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="text-gray-500 focus:ring-primary-color rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-gray-700 text-sm">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-secondary-color hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-primary-color text-white rounded-md hover:bg-secondary-color focus:outline-none focus:ring-2 focus:ring-gray-50 mb-3 text-sm"
              >
                Sign in
              </button>
              <button
                type="button"
                className="w-full py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              >
                Sign in with Google
              </button>
            </form>
            <p className="text-xs text-center text-gray-500 mt-4">
              Don’t have an account?{' '}
              <Link href="/login/register" className="text-secondary-color hover:underline">
                Sign up for free!
              </Link>
            </p>
          </div>

     
          <div className="w-full lg:w-1/2 h-40 lg:h-auto relative">
            <div className="w-full h-full relative">
              <Image
                src="/images/kidlogin.png" 
                alt="Login Image"
                layout="fill"
                objectFit="contain" 
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;