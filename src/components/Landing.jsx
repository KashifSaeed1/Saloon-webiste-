import React from 'react';
import '../App.css';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing">
      <header className="hero">
        <div className="hero-content">
          <h1 className="brand">Get the Glow</h1>
          <p className="tag">Glow-up treatments & stunning styles.</p>
          <div className="cta-row">
            <a className="btn primary" href="#book">Book Now</a>
            <a className="btn outline" href="#services">Our Services</a>
          </div>
        </div>
      </header>

      <section id="services" className="services">
        <h2>Services</h2>
        <div className="cards">
          <div className="card">
            <h3>Beauty Treatments</h3>
            <p>Facials, glow-ups and skin pampering.</p>
          </div>
          <div className="card">
            <h3>Hair Styling</h3>
            <p>Cuts, color and styling for any occasion.</p>
          </div>
          <div className="card">
            <h3>Makeup & More</h3>
            <p>Event makeup and finishing touches.</p>
          </div>
        </div>
      </section>

      <section id="book" className="booking">
        <h2>Ready to get glowing?</h2>
        <p>Call us or request an appointment online. Walk-ins welcome.</p>
        <a className="btn primary large" href="tel:+1234567890">Call +1 (234) 567-890</a>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Get the Glow</strong>
          <p>123 Main Street — Open Tue–Sat</p>
        </div>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
