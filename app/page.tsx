import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Image from 'next/image';
import data from '../public/images/data.png';
import model from '../public/images/modeltraning.png';
import time from '../public/images/realtime.png';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-16 md:px-8 lg:px-16">
        <div className="text-center max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-robotoserif font-extrabold text-green-700 leading-tight mb-4">
            Early Child Detection
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-robotoserif font-extrabold text-black mb-4">
            Learning Disabilities
          </h2>
          <p className="text-gray-700 mb-6 md:mb-8">
            Utilizing cutting-edge machine learning to identify learning disabilities early and support children’s educational journeys.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-2 border-2 border-green-700 text-green-700 font-semibold rounded hover:bg-green-700 hover:text-white transition">
              Learn More
            </button>
            <button className="px-6 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </main>

      {/* Machine Learning Section */}
      <section className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">Transforming Early Child Education</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Our machine learning-based system is designed to support early identification of learning disabilities by analyzing key developmental indicators.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Collection */}
            <div className="flex flex-col items-center text-center">
              <Image src={data} alt="Data Collection" width={96} height={96} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-sm">
                We work closely with parents and educators to gather comprehensive data, including behavioral observations, test scores, and developmental milestones.
              </p>
            </div>
            {/* Model Training */}
            <div className="flex flex-col items-center text-center">
              <Image src={model} alt="Model Training" width={96} height={96} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Model Training</h3>
              <p className="text-sm">
                Using this data, our algorithms are trained to detect subtle patterns that may indicate the presence of a learning disability.
              </p>
            </div>
            {/* Real-Time Predictions */}
            <div className="flex flex-col items-center text-center">
              <Image src={time} alt="Real-Time Predictions" width={96} height={96} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Predictions</h3>
              <p className="text-sm">
                Our system provides real-time predictions to detect subtle patterns that may indicate the presence of a learning disability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials pt-11">
        <div className="min-h-[40rem]">
          <h2 className="text-black-600">Testimonials</h2>
        </div>
      </section>
      <Footer />
    </>
  );
}
