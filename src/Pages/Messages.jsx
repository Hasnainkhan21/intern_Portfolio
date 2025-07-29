// src/Pages/Messages.jsx

import React, { useEffect, useState } from 'react';
import { getMessages } from '../Services/api';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          setMessages([]);
        }
      } catch (err) {
        console.error('Error fetching messages:', err);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading messages...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Messages</h2>

      <div className="max-w-4xl mx-auto grid gap-4">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages found.</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <p className="text-lg font-semibold text-gray-800">{msg.name}</p>
              <p className="text-sm text-gray-600 mb-2">{msg.email}</p>
              <p className="text-gray-700 whitespace-pre-line">{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Messages;
