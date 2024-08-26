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

      <section id="machine-learning" className="bg-primary-color text-black py-32">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-title">
      Transforming Early Child Education
    </h2>
    <p className="mb-12 max-w-md mx-auto text-xs md:text-sm leading-relaxed text-white font-title">
      Our machine learning-based system identifies learning disabilities early by analyzing key developmental indicators.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          src: data,
          alt: "Data Collection",
          title: "Data Collection",
          description:
            "We gather comprehensive data from multiple sources, including behavioral observations, academic performance, and developmental milestones. This robust dataset forms the foundation for accurate early detection.",
        },
        {
          src: model,
          alt: "Model Training",
          title: "Model Training",
          description:
            "Our machine learning algorithms are meticulously trained using the collected data. This training enables the system to recognize patterns associated with learning disabilities, ensuring accurate identification.",
        },
        {
          src: time,
          alt: "Real-Time Predictions",
          title: "Real-Time Predictions",
          description:
            "By analyzing data in real-time, our system provides immediate predictions. This allows educators and parents to take swift action, offering timely interventions that can significantly improve a child's educational journey.",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-md shadow-sm border border-gray-200 transition-transform transform hover:scale-105"
        >
          <Image
            src={feature.src}
            alt={feature.alt}
            width={130}
            height={130}
            className="mb-4"
          />
          <h3 className="text-base font-medium mb-2 text-primary-color">
            {feature.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-24 text-center">
    <p className="text-xs md:text-sm text-white max-w-lg mx-auto italic">
      Note: While our machine learning system strives to provide accurate predictions, it may not always be fully accurate. The results are intended to guide early interventions but should be validated with professional assessments.
    </p>
  </div>
</section>


      <section className="bg-white text-teal-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why Early Detection Matters</h2>
          <p className="mb-16 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-700">
            Identifying learning disabilities early can significantly impact a child’s educational journey. Our advanced system helps pinpoint challenges before they affect learning, allowing for timely intervention and support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Early Intervention",
                description:
                  "Address learning challenges early to improve long-term educational outcomes.",
              },
              {
                title: "Personalized Support",
                description:
                  "Tailor interventions and support strategies to each child’s unique needs.",
              },
              {
                title: "Enhanced Learning Environment",
                description:
                  "Foster a supportive and understanding learning environment.",
              },
              {
                title: "Data-Driven Insights",
                description:
                  "Utilize data to make informed decisions and improve educational strategies.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-teal-50 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition duration-300"
            >
              Contact Us to Learn More
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
