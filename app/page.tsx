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

      <section className="bg-[#0D7C66] text-white py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Transforming Early Child Education</h2>
    <p className="mb-10 max-w-2xl mx-auto text-sm md:text-base">
      Our machine learning-based system helps identify learning disabilities early by analyzing key developmental indicators.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Data Collection */}
      <div className="flex flex-col items-center text-center">
        <Image src={data} alt="Data Collection" width={80} height={80} className="mb-4" />
        <h3 className="text-base font-medium mb-2">Data Collection</h3>
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

<section className="bg-white text-teal-900 py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Early Detection Matters</h2>
    <p className="mb-8 max-w-2xl mx-auto text-sm md:text-base">
      Identifying learning disabilities early can make a significant difference in a child’s educational journey. Our advanced system helps pinpoint challenges before they impact learning, allowing for timely intervention and support.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Benefit 1 */}
      <div className="flex flex-col items-center text-center p-6 bg-teal-100 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-3">Early Intervention</h3>
        <p className="text-xs md:text-sm">
          Address learning challenges before they become major obstacles, improving long-term educational outcomes.
        </p>
      </div>
      {/* Benefit 2 */}
      <div className="flex flex-col items-center text-center p-6 bg-teal-100 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-3">Personalized Support</h3>
        <p className="text-xs md:text-sm">
          Tailor interventions and support strategies to each child’s unique needs, enhancing their learning experience.
        </p>
      </div>
      {/* Benefit 3 */}
      <div className="flex flex-col items-center text-center p-6 bg-teal-100 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-3">Enhanced Learning Environment</h3>
        <p className="text-xs md:text-sm">
          Create a more supportive and understanding learning environment that fosters growth and development.
        </p>
      </div>
      {/* Benefit 4 */}
      <div className="flex flex-col items-center text-center p-6 bg-teal-100 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-3">Data-Driven Insights</h3>
        <p className="text-xs md:text-sm">
          Utilize data and insights to make informed decisions and continually improve educational strategies.
        </p>
      </div>
    </div>
    <div className="mt-10">
      <a href="#contact" className="px-6 py-3 bg-teal-700 text-white font-semibold rounded hover:bg-teal-800 transition">
        Contact Us to Learn More
      </a>
    </div>
  </div>
</section>

  
      <Footer />
    </>
  );
}
