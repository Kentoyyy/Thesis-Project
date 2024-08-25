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
      <section className="bg-teal-700 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Transforming Early Child Education</h2>
          <p className="mb-10 max-w-xl mx-auto text-sm md:text-base">
            Our machine learning-based system helps identify learning disabilities early by analyzing key developmental indicators.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
            {/* Data Collection */}
            <div className="flex flex-col items-center text-center">
              <Image src={data} alt="Data Collection" width={100} height={100} className="mb-2" />
              <h3 className="text-lg font-semibold mb-1">Data Collection</h3>
              <p className="text-xs md:text-sm max-w-xs">
                Gathering comprehensive data, including behavioral observations and test scores, to support early identification.
              </p>
            </div>
            {/* Model Training */}
            <div className="flex flex-col items-center text-center">
              <Image src={model} alt="Model Training" width={100} height={100} className="mb-2" />
              <h3 className="text-lg font-semibold mb-1">Model Training</h3>
              <p className="text-xs md:text-sm max-w-xs">
                Training algorithms to detect patterns that may indicate learning disabilities.
              </p>
            </div>
            {/* Real-Time Predictions */}
            <div className="flex flex-col items-center text-center">
              <Image src={time} alt="Real-Time Predictions" width={100} height={100} className="mb-2" />
              <h3 className="text-lg font-semibold mb-1">Real-Time Predictions</h3>
              <p className="text-xs md:text-sm max-w-xs">
                Providing real-time predictions to identify learning disabilities as early as possible.
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
