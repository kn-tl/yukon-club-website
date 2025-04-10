import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubscription = async (event) => {
    event.preventDefault();

    // Valideer het e-mailadres voordat je de API-aanroep doet
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setMessage('');
      return;
    }

    try {
      // API call naar je server
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          registrationDate: new Date().toISOString(),
          actief: true
        }),
      });

      // Verwerk de reactie van je server
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setMessage('Thank you for subscribing!');
      setError('');
      setEmail(''); // Optioneel: wis het e-mailveld na een succesvolle inschrijving
    } catch (err) {
      // Log de fout en stel een gebruikersvriendelijke foutmelding in
      setError('There was a problem with your subscription.');
      setMessage('');
      console.error(err);
    }
  };

  // Functie om te valideren of de ingevoerde tekst een geldig e-mailadres is
  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h3>Join the Club</h3>
        <p>Stay updated with the latest news and releases.</p>
        <form onSubmit={handleSubscription} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="newsletter-input"
            aria-label="Email for newsletter"
            required
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
        {message && <div className="newsletter-message">{message}</div>}
        {error && <div className="newsletter-error">{error}</div>}
      </div>
    </section>
  );
}
