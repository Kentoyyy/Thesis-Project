import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Image from 'next/image';
import data from '../public/images/data.png';
import model from '../public/images/modeltraning.png';
import time from '../public/images/realtime.png';
import ai from '../public/images/mattersimage.png';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-16 md:px-8 lg:px-16 bg-[#F5F7FA]">
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

      <section id="machine-learning" className="py-24 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-lg md:text-2xl font-medium mb-4 font-title">
            Transforming Early Child Education
          </h2>
          <p className="mb-12 max-w-md mx-auto text-xs md:text-sm leading-relaxed text-gray-600">
            Our machine learning-based system helps identify learning disabilities early by analyzing key developmental indicators.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                src: data,
                alt: "Data Collection",
                title: "Data Collection",
                description:
                  "Our machine learning process begins with robust data collection from diverse sources, ensuring accuracy and relevance. This data forms the backbone of our models, driving precise and meaningful outcomes.",
              },
              {
                src: model,
                alt: "Model Training",
                title: "Model Training",
                description:
                  "With carefully curated data, we train our models to recognize patterns and make intelligent predictions. Rigorous evaluation ensures they are accurate and reliable, ready to solve complex problems.",
              },
              {
                src: time,
                alt: "Real-Time Predictions",
                title: "Real-Time Predictions",
                description:
                  "Once trained, our models are deployed to make real-time predictions, delivering instant insights and solutions. Our system is designed for efficiency, ensuring you get the answers you need promptly.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-transform transform hover:scale-105"
              >
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={150}
                  height={140}
                  className="mb-4"
                />
                <h3 className="text-base font-semibold mb-10">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-gray-800" id="matters">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src={ai} // Correct usage without curly braces
              alt="Illustration of early detection"
              width={300}  // Adjust the width as needed
              height={200} // Adjust the height as needed
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 text-left md:pl-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Why Early Detection Matters
            </h2>
            <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-600">
              Identifying learning disabilities early can significantly impact a child’s educational journey. Our system helps pinpoint challenges before they affect learning, enabling timely intervention.
            </p>
            <div className="flex flex-col space-y-4">
              {[
                {
                  title: "Early Intervention",
                  description: "Address challenges early to improve long-term outcomes.",
                },
                {
                  title: "Personalized Support",
                  description: "Tailor strategies to each child’s unique needs.",
                },
                {
                  title: "Enhanced Environment",
                  description: "Foster a supportive and understanding environment.",
                },
                {
                  title: "Data-Driven Insights",
                  description: "Utilize data to improve educational strategies.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3"></div> {/* Replace with an icon if needed */}
                  <div>
                    <h3 className="text-base font-medium">{benefit.title}</h3>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}
