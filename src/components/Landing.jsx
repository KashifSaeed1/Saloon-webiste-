import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing">
      <nav className="site-nav">
        <div className="nav-brand">
          <Link to="/" className="brand">Get the Glow</Link>
        </div>
        <div className="nav-links">
          <Link to="/features">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1 className="brand">Get the Glow</h1>
          <p className="tag">Glow-up treatments & stunning styles.</p>
          <div className="cta-row">
            <Link className="btn primary" to="/contact">Book Now</Link>
            <Link className="btn outline" to="/features">Our Services</Link>
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
        <div className="more-link">
          <Link to="/features" className="btn outline">See all services</Link>
        </div>
      </section>

      <section id="book" className="booking">
        <h2>Ready to get glowing?</h2>
        <p>Call us or request an appointment online. Walk-ins welcome.</p>
        <a className="btn primary large" href="tel:+1234567890">Call +1 (234) 567-890</a>
        <Link className="btn" to="/contact">Request Appointment</Link>
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
