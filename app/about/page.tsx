import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import vision from '../../public/images/vision.png';
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
      <div className="min-h-screen flex flex-col bg-white px-6 py-12">
        {/* Header Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12">
          <div className="max-w-lg mb-8 md:mb-0">
            <h1 className="text-3xl font-semibold text-[#0D7C66] mb-4 leading-tight">
              Our Vision for Early Detection in Education
            </h1>
            <p className="text-base text-gray-600 mb-4 leading-relaxed">
              We are committed to revolutionizing early education by leveraging machine learning to detect learning disabilities early, providing timely interventions and support to ensure every child reaches their full potential.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xs h-64">
              <Image
                src={vision}
                alt="Vision for Early Detection"
                layout="fill"
                objectFit="contain"
                className="rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center px-6 md:px-12">
          {[
            { label: '3+ Years', value: 'of Research' },
            { label: '25+', value: 'Machine Learning Models' },
            { label: '90%+', value: 'Accuracy in Detection' },
            { label: '100K+', value: 'Children Impacted' }
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-sm border-t-2 border-[#0D7C66]">
              <h2 className="text-xl font-semibold text-[#0D7C66]">{stat.label}</h2>
              <p className="text-gray-600">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Detailed Description Section */}
        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
          {[
            { title: 'Research Background', text: 'Learning disabilities often go unnoticed until they significantly impact a child\'s education. By leveraging machine learning, we aim to provide early and accurate detection of learning disabilities.' },
            { title: 'Methodology', text: 'We utilize various machine learning models trained on diverse datasets to detect subtle patterns indicating learning disabilities, allowing for early diagnosis and intervention.' },
            { title: 'Potential Impact', text: 'Early detection of learning disabilities can transform a child\'s educational journey by providing targeted interventions before challenges significantly affect learning.' },
            { title: 'Conclusion', text: 'We are dedicated to enhancing educational outcomes for children with learning disabilities through early detection and intervention. Explore our project to learn more about our impact.' }
          ].map((section, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-[#0D7C66] mb-2">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="container mx-auto mt-12 text-center px-6 md:px-12">
          <a href="/latestabout" className="inline-block px-6 py-2 border border-[#0D7C66] text-[#0D7C66] font-medium rounded-lg hover:bg-[#0D7C66] hover:text-white transition">
            Learn More
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
