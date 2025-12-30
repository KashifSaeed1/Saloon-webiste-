import React from 'react';
import '../App.css';
import './pages.css';

export default function Features() {
  return (
    <div className="page features-page">
      <header className="page-header">
        <h1>Features & Services</h1>
        <p>Explore our most popular services and packages.</p>
      </header>

      <section className="page-content">
        <ul>
          <li>Signature Glow Facial</li>
          <li>Full-service Haircuts & Coloring</li>
          <li>Event Makeup Packages</li>
          <li>Group Bookings & Bridal Services</li>
        </ul>
      </section>
    </div>
  );
}
