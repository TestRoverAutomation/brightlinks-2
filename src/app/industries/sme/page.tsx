import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'IT Solutions for Small & Medium Business | BrightLinks UK',
  description: 'Affordable, scalable managed IT for growing UK businesses. One point of contact, 24/7 support, and IT that grows with you.',
};

const features = [
  'Flexible managed IT support contracts',
  'Microsoft 365 setup, migration and management',
  'Cyber Essentials certification support',
  'Single point of contact for all IT issues',
  'Cloud migration and infrastructure',
  'Business email, backup and recovery',
  'Device procurement and configuration',
  'IT strategy and roadmap planning',
];

const benefits = [
  { title: 'Right-Sized IT', desc: 'We tailor our services to your actual needs and budget — no bloated contracts, no paying for what you don\'t use.' },
  { title: 'One Point of Contact', desc: 'A dedicated account manager who knows your business and is available whenever you need them.' },
  { title: 'Grow With Confidence', desc: 'Scalable IT that grows as you do — add users, sites, and services without the headaches.' },
  { title: '24/7 UK Support', desc: 'Round-the-clock UK-based helpdesk so your team is never left waiting when something goes wrong.' },
];

export default function SmePage() {
  return (
    <>
      <section style={{ background: 'var(--color-navy)', paddingBlock: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <Link href="/industries" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginBottom: '1.5rem' }}>
            ← All Industries
          </Link>
          <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
            Small & Medium Business
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1.25rem' }}>
            IT Solutions for Small & Medium Business
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '580px', marginBottom: '2.5rem' }}>
            Enterprise-quality IT without the enterprise price tag. We help growing UK businesses stay productive, secure, and competitive with managed IT that just works.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-lg" data-open-inquiry="true">Get a Quote</button>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline-white btn-lg">
              <Phone size={17} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
                What we deliver
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} style={{ color: 'var(--color-turquoise)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-gray-700)', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--color-gray-100)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" alt="SME IT support" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-navy)', textAlign: 'center', marginBottom: '3rem' }}>
            Why SMEs choose BrightLinks
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {benefits.map(b => (
              <div key={b.title} className="card">
                <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '1rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <h2 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Popular solutions for SMEs</h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/services/managed-services" className="btn btn-outline btn-sm">Managed IT Services <ArrowRight size={14} aria-hidden="true" /></Link>
            <Link href="/services/cybersecurity" className="btn btn-outline btn-sm">Cybersecurity <ArrowRight size={14} aria-hidden="true" /></Link>
            <Link href="/services/cloud-solutions" className="btn btn-outline btn-sm">Cloud Solutions <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-navy)', paddingBlock: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Ready to get started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', fontSize: '1rem' }}>
            Speak to our team today — no obligation, no jargon, just honest advice.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-lg" data-open-inquiry="true">Get a Free Quote</button>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline-white btn-lg">
              <Phone size={17} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
