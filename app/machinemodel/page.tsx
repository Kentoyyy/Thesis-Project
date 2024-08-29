import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "EarlyEdge - Machine Model",
  icons: {
    icon: '/images/elcdfav.png',
  },
};

const MachineLearningModel = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Machine Learning Model Overview Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Machine Learning Model Overview</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our machine learning models are designed to detect learning disabilities such as dyslexia, dysgraphia, and dyscalculia with high accuracy, aiding in early intervention strategies.
          </p>
        </section>

        {/* Main Section Title */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Empower Education with AI-Driven Models</h2>
          <p className="text-md text-gray-600 max-w-lg mx-auto">
            Discover how our models help in early detection and support personalized learning paths for enhanced educational outcomes.
          </p>
        </section>

        {/* Model Sections Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Dyslexia Section */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <Image src="/images/dyslexia-icon.png" alt="Dyslexia Detection" width={50} height={50} className="mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-3">Dyslexia Detection Model</h3>
            <p className="text-sm text-gray-600 mb-6">
              Our dyslexia model uses CNNs to analyze handwriting and behavior, allowing for early detection and timely intervention.
            </p>
            <Link href="/dyslexia-details" className="text-blue-600 hover:text-blue-500 font-medium">
              Learn More
            </Link>
          </div>

          {/* Dysgraphia Section */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <Image src="/images/dysgraphia-icon.png" alt="Dysgraphia Detection" width={50} height={50} className="mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-3">Dysgraphia Detection Model</h3>
            <p className="text-sm text-gray-600 mb-6">
              Our model employs RNNs and CNNs to assess handwriting fluency, offering insights into motor and cognitive skills development.
            </p>
            <Link href="/dysgraphia-details" className="text-blue-600 hover:text-blue-500 font-medium">
              Learn More
            </Link>
          </div>

          {/* Dyscalculia Section */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <Image src="/images/dyscalculia-icon.png" alt="Dyscalculia Detection" width={50} height={50} className="mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-3">Dyscalculia Detection Model</h3>
            <p className="text-sm text-gray-600 mb-6">
              Using a hybrid neural network, our model evaluates mathematical skills to identify dyscalculia and recommend personalized educational support.
            </p>
            <Link href="/dyscalculia-details" className="text-blue-600 hover:text-blue-500 font-medium">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MachineLearningModel;
