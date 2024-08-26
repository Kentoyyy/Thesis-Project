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
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Machine Model Overview Card */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
            <Image src="/icons/model-icon.svg" alt="Model Icon" width={28} height={28} className="mr-4" />
            Model Overview
          </h3>
          <p className="text-gray-700 leading-7">
            Our system uses a <span className="font-semibold text-blue-600">Convolutional Neural Network (CNN)</span> model to detect early signs of dyslexia in children. The model has been trained using a diverse dataset of children's handwriting samples and other behavioral indicators.
          </p>
        </div>

        {/* Model Performance Card */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
            <Image src="/icons/performance-icon.svg" alt="Performance Icon" width={28} height={28} className="mr-4" />
            Model Performance
          </h3>
          <p className="text-gray-700 leading-7">
            The model has achieved an accuracy of <span className="font-semibold text-green-600">95%</span> on the test dataset, with a precision of <span className="font-semibold text-green-600">93%</span> and recall of <span className="font-semibold text-green-600">94%</span>.
          </p>
        </div>

        {/* Technical Specifications Card */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
            <Image src="/icons/specs-icon.svg" alt="Specs Icon" width={28} height={28} className="mr-4" />
            Technical Specifications
          </h3>
          <ul className="text-gray-700 space-y-4 leading-7">
            <li><span className="font-semibold text-gray-900">Framework:</span> TensorFlow and Keras</li>
            <li><span className="font-semibold text-gray-900">Model Architecture:</span> 5-layer CNN with ReLU activation functions</li>
            <li><span className="font-semibold text-gray-900">Optimizer:</span> Adam optimizer with a learning rate of 0.001</li>
            <li><span className="font-semibold text-gray-900">Loss Function:</span> Categorical Crossentropy</li>
            <li><span className="font-semibold text-gray-900">Epochs:</span> 50</li>
            <li><span className="font-semibold text-gray-900">Batch Size:</span> 32</li>
            <li><span className="font-semibold text-gray-900">Regularization:</span> Dropout (rate: 0.5) to prevent overfitting</li>
          </ul>
        </div>

        {/* Add additional cards here if needed */}
        
      </div>
    </>
  );
};

export default MachineLearningModel;
