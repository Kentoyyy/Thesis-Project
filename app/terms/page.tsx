import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-4 md:p-6 lg:p-8 text-gray-700 leading-relaxed">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-xs md:text-sm mb-6"><strong>Effective Date:</strong> September 2024</p>
        
        <p className="mb-6">
          By accessing the Early Child Detection of Learning Disabilities platform ("Platform"), you agree to these Terms of Service ("Terms").
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">1. Use of the Platform</h2>
        <p className="mb-6">
          You are allowed to use the Platform for its intended purpose only. Any misuse, including illegal activities, is prohibited.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">2. Account Responsibility</h2>
        <p className="mb-6">
          You are responsible for keeping your account details confidential and for all activities under your account.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">3. Intellectual Property</h2>
        <p className="mb-6">
          All content and materials on the Platform are protected by intellectual property laws. You may not use them without prior permission.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">4. Privacy</h2>
        <p className="mb-6">
          The use of personal data is outlined in our Privacy Notice. By using the Platform, you consent to these practices.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">5. Disclaimer</h2>
        <p className="mb-6">
          The Platform is provided "as is" without warranties. We do not guarantee error-free operation.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">6. Limitation of Liability</h2>
        <p className="mb-6">
          We are not liable for any damages arising from the use or inability to use the Platform.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">7. Changes to Terms</h2>
        <p className="mb-6">
          We may update these Terms. Any changes will be effective upon posting on this page.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">8. Contact Us</h2>
        <p className="mb-6">
          For inquiries about these Terms, reach us at <a href="mailto:contact@example.com" className="text-blue-500 underline">contact@example.com</a>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
