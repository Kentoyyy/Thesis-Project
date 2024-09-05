import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Chatbot from './components/chatbot';
import Image from 'next/image';
import data from '../public/images/data.png';
import model from '../public/images/modeltraning.png';
import time from '../public/images/realtime.png';
import ai from '../public/images/mattersimage.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EarlyEdge - Home",
  icons: {
    icon: '/images/elcdfav.png',
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-16 lg:px-16 bg-white">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl md:text-5xl font-robotoserif font-extrabold text-primary-color leading-tight mb-1">
            Early Child Detection
          </h1>
          <h2 className="text-3xl md:text-4xl font-robotoserif font-extrabold text-black mb-6">
            Learning Disabilities
          </h2>
          <p className="text-gray-600 mb-8">
            Utilizing cutting-edge machine learning to identify learning disabilities early and support children’s educational journeys.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#machine-learning" className="px-6 py-2 border border-primary-color text-black font-medium rounded hover:bg-primary-color hover:text-white transition">
              Learn More
            </a>
            <button className="px-6 py-2 bg-primary-color text-white font-medium rounded hover:bg-secondary-color transition">
              Get Started
            </button>
          </div>
        </div>
      </main>

      {/* Updated Machine Learning Section */}
      <section id="machine-learning" className="py-20 bg-[#0D7C66] text-white relative overflow-hidden h-[800px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Transforming Early Child Education
          </h2>
          {/* Section Description */}
          <p className="mb-12 max-w-md mx-auto text-lg text-white">
            Our machine learning system identifies learning disabilities early, analyzing key developmental indicators for timely support.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: data,
                alt: "Data Collection",
                title: "Data Collection",
                description:
                  "Collecting comprehensive data, including behavioral observations, test scores, and developmental milestones.",
              },
              {
                src: model,
                alt: "Model Training",
                title: "Model Training",
                description:
                  "Training models to recognize patterns with high accuracy, aiding in the identification of potential learning disabilities.",
              },
              {
                src: time,
                alt: "Real-Time Predictions",
                title: "Real-Time Predictions",
                description:
                  "Providing real-time insights into a child's progress for proactive interventions and support.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={120}
                  height={120}
                  className="mb-4"
                />
                {/* Feature Title */}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                {/* Feature Description */}
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 text-gray-800" id="matters">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-20 space-y-10 md:space-y-0">
    {/* Illustration Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-80 h-64">
        <Image
          src={ai} // Placeholder for the AI illustration
          alt="Illustration of early detection"
          layout="fill"
          objectFit="contain"
          className="rounded-xl shadow-lg"
        />
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
          <Image
            src="/icons/brain-scan.png" // Replace with related icon
            alt="Brain scan icon"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
    
    {/* Content Section */}
    <div className="md:w-1/2 md:pl-12 text-left">
      <h2 className="text-4xl font-bold mb-6 text-indigo-800 leading-snug">
        Why Early Detection Matters
      </h2>
      <p className="mb-8 text-md md:text-lg text-gray-600 leading-relaxed">
        Early identification of learning disabilities plays a crucial role in a child’s development. Our system empowers parents and educators with the tools to detect and address potential challenges before they impact learning, ensuring timely and effective intervention.
      </p>
      
      {/* Benefits Section */}
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          {
            title: "Early Intervention",
            description: "Address challenges early to improve long-term outcomes.",
            icon: "/icons/early-intervention.svg", // Replace with actual icon path
          },
          {
            title: "Personalized Support",
            description: "Tailor strategies to each child’s unique needs.",
            icon: "/icons/personalized-support.svg",
          },
          {
            title: "Supportive Environment",
            description: "Foster a supportive and understanding environment.",
            icon: "/icons/supportive-environment.svg",
          },
          {
            title: "Data-Driven Insights",
            description: "Utilize data to improve educational strategies.",
            icon: "/icons/data-driven.svg",
          },
        ].map((benefit, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-12 h-12 p-2 bg-indigo-100 rounded-full">
              <Image
                src={benefit.icon}
                alt={`${benefit.title} icon`}
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-800">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call-to-action button */}
      <div className="mt-8">
        <a
          href="#"
          className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

      <div className="fixed bottom-5 right-5">
        <Chatbot />
      </div>

      <Footer />
    </>
  );
}
