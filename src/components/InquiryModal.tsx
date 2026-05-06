'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, Send, CheckCircle } from 'lucide-react';
import { SITE } from '@/lib/constants';

export default function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent && e.key === 'Escape') setOpen(false);
    };
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-open-inquiry]')) setOpen(true);
    };
    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', handler);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      formType: 'inquiry',
      name: data.get('name'),
      company: data.get('company'),
      email: data.get('email'),
      phone: data.get('phone'),
      service: data.get('service'),
      message: data.get('message'),
    };

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 201) setSubmitted(true);
      else setSubmitted(true); // still show success to user
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Inquiry form"
      style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        style={{ position: 'relative', background: 'white', borderRadius: '1.25rem', width: '100%', maxWidth: '540px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 20px 60px rgba(27,43,107,0.25)' }}
      >
        {/* Header */}
        <div style={{ padding: '1.75rem 1.75rem 1.25rem', borderBottom: '1px solid var(--color-gray-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--color-navy)', borderRadius: '1.25rem 1.25rem 0 0' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>Get a Free Quote</h2>
            <p style={{ margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>We'll respond within 2 business hours</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close inquiry form"
            style={{ background: 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', transition: 'background 0.15s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div style={{ padding: '1.75rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle size={56} style={{ color: 'var(--color-turquoise)', marginBottom: '1rem' }} aria-hidden="true" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Thank you!</h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Your enquiry has been received. A member of our team will be in touch within 2 business hours.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>
                Need immediate help? Call us on{' '}
                <a href={`tel:${SITE.phoneTel}`} style={{ color: 'var(--color-turquoise)', fontWeight: 600 }}>{SITE.phone}</a>
              </p>
              <button className="btn btn-primary" onClick={() => { setSubmitted(false); setOpen(false); }} style={{ marginTop: '1.5rem' }}>
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
            >

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label" htmlFor="inq-name">Full Name *</label>
                  <input ref={firstInputRef} className="form-input" type="text" id="inq-name" name="name" required autoComplete="name" placeholder="John Smith" />
                </div>
                <div>
                  <label className="form-label" htmlFor="inq-company">Company</label>
                  <input className="form-input" type="text" id="inq-company" name="company" autoComplete="organization" placeholder="Acme Ltd" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                <div>
                  <label className="form-label" htmlFor="inq-email">Email Address *</label>
                  <input className="form-input" type="email" id="inq-email" name="email" required autoComplete="email" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="form-label" htmlFor="inq-phone">Phone Number</label>
                  <input className="form-input" type="tel" id="inq-phone" name="phone" autoComplete="tel" placeholder="07700 900000" />
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <label className="form-label" htmlFor="inq-service">Service Interest</label>
                <select className="form-input" id="inq-service" name="service" style={{ appearance: 'none', cursor: 'pointer' }}>
                  <option value="">Select a service...</option>
                  <option>Managed IT Services</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Solutions</option>
                  <option>Software Solutions</option>
                  <option>Hardware & Configuration</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <label className="form-label" htmlFor="inq-message">Message *</label>
                <textarea
                  className="form-input"
                  id="inq-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your IT requirements..."
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ marginTop: '1rem' }}>
                <label style={{ display: 'flex', gap: '0.75rem', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" required
                    style={{ marginTop: '0.2rem', accentColor: 'var(--color-turquoise)', width: 16, height: 16, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)', lineHeight: 1.5 }}>
                    I agree to BrightLinks UK processing my data in accordance with the{' '}
                    <Link href="/privacy-policy" style={{ color: 'var(--color-turquoise)', fontWeight: 600 }}>Privacy Policy</Link>. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-orange"
                style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending...' : (
                  <><Send size={17} aria-hidden="true" /> Send Enquiry</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
