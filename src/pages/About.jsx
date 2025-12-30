import React from 'react';
import '../App.css';
import './pages.css';

export default function About() {
  return (
    <div className="page about-page">
      <header className="page-header">
        <h1>About Get the Glow</h1>
        <p>We provide beauty treatments, hair styling and makeup services.</p>
      </header>

      <section className="page-content">
        <h2>Our Story</h2>
        <p>
          Founded with a passion for beauty and self-care, our team of stylists
          and therapists deliver expert services in a welcoming environment.
        </p>
      </section>
    </div>
  );
}
