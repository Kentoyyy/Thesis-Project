import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "EarlyEdge - Machine Model",
  icons: {
    icon: '/images/elcdfav.png', // Path starting from the public directory
  },
}

const MachineLearningModel = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Machine Learning Model Overview</h2>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Model Used</h3>
          <p className="text-gray-600">
            Our system uses a <span className="font-medium text-gray-800">Convolutional Neural Network (CNN)</span> model to detect early signs of dyslexia in children. The model has been trained using a diverse dataset of children's handwriting samples and other behavioral indicators.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Model Performance</h3>
          <p className="text-gray-600">
            The model has achieved an accuracy of <span className="font-medium text-gray-800">95%</span> on the test dataset, with a precision of <span className="font-medium text-gray-800">93%</span> and recall of <span className="font-medium text-gray-800">94%</span>. This high level of accuracy ensures reliable early detection of dyslexia.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Technical Specifications</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li><span className="font-medium text-gray-800">Framework:</span> TensorFlow and Keras</li>
            <li><span className="font-medium text-gray-800">Model Architecture:</span> 5-layer CNN with ReLU activation functions</li>
            <li><span className="font-medium text-gray-800">Optimizer:</span> Adam optimizer with a learning rate of 0.001</li>
            <li><span className="font-medium text-gray-800">Loss Function:</span> Categorical Crossentropy</li>
            <li><span className="font-medium text-gray-800">Epochs:</span> 50</li>
            <li><span className="font-medium text-gray-800">Batch Size:</span> 32</li>
            <li><span className="font-medium text-gray-800">Regularization:</span> Dropout (rate: 0.5) to prevent overfitting</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MachineLearningModel;
