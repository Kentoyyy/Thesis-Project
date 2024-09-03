import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Metadata } from 'next';
import Chatbot from '../components/chatbot';

export const metadata: Metadata = {
    title: "EarlyEdge - Contact",
    icons: {
      icon: '/images/elcdfav.png',
    },
  };
   
  

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-white px-6 py-12">
        <div className="container mx-auto text-center px-6 md:px-12">
          <h1 className="text-3xl font-semibold text-[#0D7C66] mb-6">
            Contact Us
          </h1>
          <p className="text-base text-gray-600 mb-6">
            We're here to help! You can reach us through the chatbot below for immediate assistance or use the contact form to send us a detailed message.
          </p>

          {/* Chatbot Section */}
          <div className="mb-12">
            <Chatbot />
          </div>

          {/* Contact Form Section */}
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[#0D7C66] mb-4">Contact Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-[#0D7C66] text-white font-medium rounded-lg hover:bg-[#0D7C66]/80 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
