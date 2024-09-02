"use client";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import React, { useState, useEffect } from 'react';

const DetectionTest = () => {
  const [selectedTab, setSelectedTab] = useState('dyslexia');
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/tests/${selectedTab}`);
        const data = await response.json();
        setTestData(data);
      } catch (error) {
        console.error('Error fetching test data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [selectedTab]); 

  const handleSubmit = async () => {
    event.preventDefault();
    try {
      const response = await f  etch(`/api/tests/${selectedTab}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });
      const result = await response.json();
      console.log('Test submitted:', result);
    } catch (error) {
      console.error('Error submitting test:', error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mt-10">Detection Test</h1>
        <p className="text-gray-500 mt-4 text-center max-w-md">
          Select a test to begin evaluating specific learning disabilities.
        </p>

        <div className="mt-8 flex space-x-4">
          {['dyslexia', 'dyscalculia', 'dysgraphia'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full border transition-colors duration-300 ${
                selectedTab === tab
                  ? 'bg-primary-color text-white border-sec'
                  : 'bg-transparent text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Test
            </button>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-lg shadow-lg w-full max-w-2xl">
          {loading ? (
            <div className="text-gray-600">Loading test...</div>
          ) : (
            testData && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Test
                </h2>
                <p className="text-gray-600 mt-4">{testData.instructions}</p>
                {/* Example of rendering questions */}
                <div className="mt-6">
                  {testData.questions.map((question, index) => (
                    <div key={index} className="mb-4">
                      <label className="block text-gray-700 font-medium">
                        {question.questionText}
                      </label>
                      <input
                        type="text"
                        className="mt-2 p-2 border border-gray-300 rounded w-full"
                        value={question.answer || ''}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            questions: testData.questions.map((q, i) =>
                              i === index ? { ...q, answer: e.target.value } : q
                            ),
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Test
                </button>
              </form>
            )
          )}
        </div>
      </div>

      <Footer />

      <div className="fixed bottom-5 right-5">
        <Chatbot />
      </div>
    </>
  );
};

export default DetectionTest;
