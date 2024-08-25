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
            <a href="#machine-learning">
              <button className="px-6 py-2 border-2 border-green-700 text-green-700 font-semibold rounded hover:bg-green-700 hover:text-white transition">
                Learn More
              </button>
            </a>
            <button className="px-6 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </main>

      <section id="machine-learning" className="bg-[#0D7C66] text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Transforming Early Child Education</h2>
          <p className="mb-10 max-w-2xl mx-auto text-sm md:text-base">
            Our machine learning-based system helps identify learning disabilities early by analyzing key developmental indicators.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Collection */}
            <div className="flex flex-col items-center text-center">
              <Image src={data} alt="Data Collection" width={80} height={80} className="mb-4" />
              <h3 className="text-base font-medium mb-9">Data Collection</h3>
              <p className="text-xs md:text-sm">
                Gathering comprehensive data, including behavioral observations and test scores, to support early identification.
              </p>
            </div>
            {/* Model Training */}
            <div className="flex flex-col items-center text-center">
              <Image src={model} alt="Model Training" width={80} height={80} className="mb-4" />
              <h3 className="text-base font-medium mb-2">Model Training</h3>
              <p className="text-xs md:text-sm">
                Training algorithms to detect patterns that may indicate learning disabilities.
              </p>
            </div>
            {/* Real-Time Predictions */}
            <div className="flex flex-col items-center text-center">
              <Image src={time} alt="Real-Time Predictions" width={80} height={80} className="mb-4" />
              <h3 className="text-base font-medium mb-2">Real-Time Predictions</h3>
              <p className="text-xs md:text-sm">
                Providing real-time predictions to identify learning disabilities as early as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-teal-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Why Early Detection Matters</h2>
          <p className="mb-12 max-w-xl mx-auto text-base md:text-lg leading-relaxed text-gray-700">
            Identifying learning disabilities early can significantly impact a child’s educational journey. Our advanced system helps pinpoint challenges before they affect learning, allowing for timely intervention and support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center p-6 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Early Intervention</h3>
              <p className="text-sm text-gray-600">
                Address learning challenges early to improve long-term educational outcomes.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="flex flex-col items-center p-6 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Personalized Support</h3>
              <p className="text-sm text-gray-600">
                Tailor interventions and support strategies to each child’s unique needs.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="flex flex-col items-center p-6 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Enhanced Learning Environment</h3>
              <p className="text-sm text-gray-600">
                Foster a supportive and understanding learning environment.
              </p>
            </div>
            {/* Benefit 4 */}
            <div className="flex flex-col items-center p-6 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Data-Driven Insights</h3>
              <p className="text-sm text-gray-600">
                Utilize data to make informed decisions and improve educational strategies.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a href="#contact" className="px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition duration-300">
              Contact Us to Learn More
            </a>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}
