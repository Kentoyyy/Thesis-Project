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
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Machine Learning Model Overview Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Machine Learning Model Overview</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our advanced machine learning models are tailored to detect learning disabilities like dyslexia, dysgraphia, and dyscalculia. 
            By leveraging cutting-edge neural networks, we analyze comprehensive data points to ensure early and precise detection, aiding in effective intervention strategies.
          </p>
        </section>

        {/* Main Section Title */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Empower Education with AI-Driven Models</h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">Explore how our models contribute to early detection and personalized learning strategies for a brighter future in education.</p>
        </section>

        {/* Model Sections Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Dyslexia Section */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <Image src="/images/dyslexia-icon.png" alt="Dyslexia Detection" width={80} height={80} className="mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dyslexia Detection Model</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our dyslexia model utilizes a Convolutional Neural Network (CNN) to analyze handwriting and behavioral patterns, ensuring early detection of dyslexia for timely interventions.
            </p>
            <Link href="/dyslexia-details" className="mt-auto text-[#0D7C66] hover:text-[#065F46] font-medium transition-colors">Learn More</Link>
          </div>

          {/* Dysgraphia Section */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <Image src="/images/dysgraphia-icon.png" alt="Dysgraphia Detection" width={80} height={80} className="mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dysgraphia Detection Model</h3>
            <p className="text-lg text-gray-700 mb-6">
              Utilizing RNNs and CNNs, our model assesses handwriting fluidity and composition to detect dysgraphia, providing insights into motor and cognitive development.
            </p>
            <Link href="/dysgraphia-details" className="mt-auto text-[#0D7C66] hover:text-[#065F46] font-medium transition-colors">Learn More</Link>
          </div>

          {/* Dyscalculia Section */}
          <div className="bg-gradient-to-r from-yellow-100 to-red-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <Image src="/images/dyscalculia-icon.png" alt="Dyscalculia Detection" width={80} height={80} className="mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dyscalculia Detection Model</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our hybrid neural network model analyzes mathematical problem-solving abilities to identify dyscalculia, offering guidance for tailored educational support.
            </p>
            <Link href="/dyscalculia-details" className="mt-auto text-[#0D7C66] hover:text-[#065F46] font-medium transition-colors">Learn More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MachineLearningModel;
