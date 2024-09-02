import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EarlyEdge - About",
  icons: {
    icon: '/images/elcdfav.png',
  },
}

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gray-50 px-6 py-12">
        {/* Header Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Vision for Early Detection in Education</h1>
            <p className="text-lg text-gray-600 mb-4">
              We are committed to revolutionizing early education by leveraging machine learning to detect learning disabilities early, providing timely interventions and support to ensure every child reaches their full potential.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about-vision.jpg"
              alt="Vision for Early Detection"
              width={500}
              height={300}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800">3+ Years</h2>
            <p className="text-gray-600">of Research</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800">25+</h2>
            <p className="text-gray-600">Machine Learning Models</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gra  y-800">90%+</h2>
            <p className="text-gray-600">Accuracy in Detection</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800">100K+</h2>
            <p className="text-gray-600">Children Impacted</p>
          </div>
        </div>

        {/* Detailed Description Section with Modern and Minimalist Design */}
        <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research Background */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Research Background</h2>
            <p className="text-md text-gray-600 mb-4">
              Learning disabilities often go unnoticed until they significantly impact a child's education. Current diagnostic methods are often reactive rather than proactive, leading to delayed interventions. By leveraging machine learning, we aim to change this narrative and provide tools for early and accurate detection of learning disabilities.
            </p>
          </div>

          {/* Methodology */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Methodology</h2>
            <p className="text-md text-gray-600 mb-4">
              We utilize a variety of machine learning models trained on diverse datasets, including behavioral observations and test scores. Our models are designed to detect subtle patterns that indicate the presence of learning disabilities, allowing for early diagnosis and intervention.
            </p>
          </div>

          {/* Potential Impact */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Potential Impact</h2>
            <p className="text-md text-gray-600 mb-4">
              The early detection of learning disabilities can transform a child's educational journey by providing targeted interventions before these challenges significantly affect their learning. Our research aims to support educators, parents, and children in navigating these challenges more effectively.
            </p>
          </div>

          {/* Conclusion */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
            <p className="text-md text-gray-600">
              We are dedicated to enhancing the educational outcomes for children with learning disabilities through early detection and intervention. Explore our project to learn more about how we're making a difference.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto mt-16 text-center">
          <a href="/latestabout" className="inline-block px-8 py-3 border border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-500 hover:text-white transition">
            Learn More
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
