"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import chatIcon from '../../public/images/iconchat.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/chatbot', {
        query: query,
      });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setResponse('Sorry, something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div 
        onClick={handleToggle} 
        className="cursor-pointer bg-primary-color p-3 rounded-full"
      >
        <Image src={chatIcon} alt="Chat Icon" width={35} height={35} />
      </div>

      {isOpen && (
        <div className="chatbot-container bg-white p-4 rounded-lg shadow-lg mt-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything..."
            className="input-field w-full border p-2 rounded mb-2"
          />
          <button onClick={handleSend} className="send-button bg-primary-color text-white px-4 py-2 rounded">
            Send
          </button>
          <div className="response mt-4 text-gray-800">{response}</div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
