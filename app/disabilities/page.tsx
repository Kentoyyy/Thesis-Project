"use client";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import React, { useState } from 'react';

import Head from 'next/head';


const DetectionTest = () => {
  const [selectedTab, setSelectedTab] = useState('dyslexia');

  return (
    <>
    <Head>
        <title>EarlyEdge - Disabilities</title>
        <link rel="icon" href="/images/elcdfav.png" />
     
      </Head>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mt-10 text-center sm:text-3xl md:text-4xl lg:text-5xl">Detection Test</h1>
        <p className="text-gray-500 mt-4 text-center max-w-md">
          Select a test to begin evaluating specific learning disabilities.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {['dyslexia', 'dyscalculia', 'dysgraphia'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full border transition-colors duration-300 text-center ${
                selectedTab === tab
                  ? 'bg-primary-color text-white border-sec'
                  : 'bg-transparent text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Test
            </button>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-lg shadow-lg w-full max-w-2xl sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
          <div className="text-gray-600">
            {/* Placeholder for test content */}
            Test content will be displayed here based on the selected tab.
          </div>
        </div>
      </div>

      <Footer />

      <div className="fixed bottom-5 right-5">
        <Chatbot />
      </div>
    </>
  );
};

export default DetectionTest;
