'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { SITE } from '@/lib/constants';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);

    const payload = {
      formType: 'contact',
      name: data.get('name'),
      company: data.get('company'),
      email: data.get('email'),
      phone: data.get('phone'),
      service: data.get('service'),
      message: data.get('message'),
    };

    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // show success regardless
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <CheckCircle size={56} style={{ color: 'var(--color-turquoise)', marginBottom: '1rem' }} aria-hidden="true" />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Message sent!</h3>
        <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, marginBottom: '1rem' }}>
          Thanks for getting in touch. We'll respond within 2 business hours.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>
          Need immediate help? Call us on{' '}
          <a href={`tel:${SITE.phoneTel}`} style={{ color: 'var(--color-turquoise)', fontWeight: 600 }}>{SITE.phone}</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label className="form-label" htmlFor="name">Full Name *</label>
          <input className="form-input" type="text" id="name" name="name" required autoComplete="name" placeholder="Jane Smith" />
        </div>
        <div>
          <label className="form-label" htmlFor="company">Company</label>
          <input className="form-input" type="text" id="company" name="company" autoComplete="organization" placeholder="Acme Ltd" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label className="form-label" htmlFor="email">Email *</label>
          <input className="form-input" type="email" id="email" name="email" required autoComplete="email" placeholder="jane@company.com" />
        </div>
        <div>
          <label className="form-label" htmlFor="phone">Phone</label>
          <input className="form-input" type="tel" id="phone" name="phone" autoComplete="tel" placeholder="07700 900000" />
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label className="form-label" htmlFor="service">Service Interest</label>
        <select className="form-input" id="service" name="service" style={{ appearance: 'none' }}>
          <option value="">Select a service...</option>
          <option>Managed IT Services</option>
          <option>Cybersecurity</option>
          <option>Cloud Solutions</option>
          <option>Software Solutions</option>
          <option>Hardware &amp; Configuration</option>
          <option>General Enquiry</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label className="form-label" htmlFor="message">Message *</label>
        <textarea
          className="form-input"
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirements..."
          style={{ resize: 'vertical' }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'flex', gap: '0.75rem', cursor: 'pointer', alignItems: 'flex-start' }}>
          <input type="checkbox" required style={{ marginTop: '0.2rem', accentColor: 'var(--color-turquoise)', width: 16, height: 16, flexShrink: 0 }} />
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)', lineHeight: 1.5 }}>
            I agree to Bright Links processing my data per the{' '}
            <a href="/privacy-policy" style={{ color: 'var(--color-turquoise)', fontWeight: 600 }}>Privacy Policy</a>. *
          </span>
        </label>
      </div>

      <button type="submit" disabled={loading} className="btn btn-orange" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
        {loading ? 'Sending...' : <><Send size={17} aria-hidden="true" /> Send Message</>}
      </button>
    </form>
  );
}
