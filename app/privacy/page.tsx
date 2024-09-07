import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const PrivacyNotice = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-4 md:p-6 lg:p-8 text-gray-700 leading-relaxed">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Privacy Notice</h1>
        <p className="text-xs md:text-sm mb-6"><strong>Effective Date:</strong> September 2024</p>
        
        <p className="mb-6">
          We value your privacy and are committed to protecting the personal information of users of our Early Child Detection of Learning Disabilities platform ("the Platform"). This Privacy Notice explains how we collect, use, disclose, and safeguard your information when you visit our Platform.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Personal Information:</strong> Includes your name, email address, and any other information you voluntarily provide when registering or using the platform.</li>
          <li><strong>Test Results:</strong> Data related to the tests for dyslexia, dyscalculia, and dysgraphia.</li>
          <li><strong>Usage Data:</strong> Information about your interaction with the Platform, including IP address, browser type, and the pages visited.</li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p className="mb-6">
          We use your information to:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Provide, operate, and improve the platform’s services.</li>
          <li>Perform machine learning analysis for early detection of learning disabilities.</li>
          <li>Communicate with you about updates, test results, or other relevant information.</li>
          <li>Enhance the accuracy of the machine learning models for better detection.</li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mb-3">3. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell or share your personal information with third parties, except in the following situations:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Service Providers:</strong> We may share data with trusted third-party service providers who assist us in maintaining and improving the platform.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required to comply with a legal obligation or protect the rights, property, or safety of our platform and users.</li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mb-3">4. Data Security</h2>
        <p className="mb-6">
          We take reasonable steps to secure your personal information from unauthorized access, use, or disclosure. However, no system is completely secure, and we cannot guarantee the absolute security of your data.
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">5. Your Rights</h2>
        <p className="mb-6">
          You have the following rights regarding your information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You may request the correction of inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> You may request that we delete your personal information under certain circumstances.</li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mb-3">6. Changes to This Privacy Notice</h2>
        <p className="mb-6">
          We may update this Privacy Notice from time to time. Any changes will be reflected on this page with a new "Effective Date."
        </p>

        <h2 className="text-lg md:text-xl font-semibold mb-3">7. Contact Us</h2>
        <p className="mb-6">
          If you have any questions or concerns about this Privacy Notice, please contact us at <a href="mailto:contact@example.com" className="text-blue-500 underline">[contact@example.com]</a>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyNotice;
