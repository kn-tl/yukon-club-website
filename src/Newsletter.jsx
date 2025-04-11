import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await axios.post('https://api.sendgrid.com/v3/marketing/contacts', {
        contacts: [{ email }]
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 202) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    }
  };

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8 mt-8">
      <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-larsseit-medium mb-6 text-center text-[#646cff]">Newsletter</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#242424] border border-[#646cff]/20 rounded-md 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-[#646cff] focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            disabled={!isValidEmail(email) || status === 'sending'}
            className={`w-full py-3 px-4 rounded-md font-larsseit-medium transition-colors
              ${!isValidEmail(email) || status === 'sending'
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-[#646cff] hover:bg-[#535bf2] text-white'}`}
          >
            {status === 'sending' ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-green-400 text-center">Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 text-center">Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
