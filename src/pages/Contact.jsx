import React, { useState } from 'react';
import '../App.css';
import './pages.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    // Placeholder: integrate real API later
    setTimeout(() => {
      setStatus('Message sent — we will reply soon!');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  }

  return (
    <div className="page contact-page">
      <header className="page-header">
        <h1>Contact Us</h1>
        <p>Have a question or want to book? Send us a message.</p>
      </header>

      <section className="page-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </label>
          <div className="form-actions">
            <button className="btn primary" type="submit">Send</button>
            <span className="status">{status}</span>
          </div>
        </form>
      </section>
    </div>
  );
}
