import React from 'react';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex items-start justify-start min-h-screen  pt-44 pl-40">
        <div className="text-left max-w-md">
          <h1 className="text-4xl font-robotoserif font-extrabold text-green-700 leading-tight">
            Early Child Detection
          </h1>
          <h2 className="text-3xl font-robotoserif font-extrabold text-black mb-4">
            Learning Disabilities
          </h2>
          <p className="text-gray-700 mb-8">
            Utilizing cutting-edge machine learning to identify learning disabilities early and support children’s educational journeys.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 border-2 border-green-700 text-green-700 font-semibold rounded hover:bg-green-700 hover:text-white transition">
              Learn More
            </button>
            <button className="px-6 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
