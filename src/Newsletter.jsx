import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setIsValid(false);
      setStatus('Please enter a valid email address');
      return;
    }

    setIsValid(true);
    setStatus('Subscribing...');

    try {
      const response = await fetch('https://api.example.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('An error occurred. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="newsletter-container">
      <h2>Subscribe to our newsletter</h2>
      <p>Stay updated with our latest news and releases</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={!isValid ? 'invalid' : ''}
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}
