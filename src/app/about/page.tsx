import type { Metadata } from 'next';
import { CheckCircle, Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Bright Links — a London-based IT solutions provider serving SMEs, enterprise, public sector, and education across the UK.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--color-navy)', paddingBlock: '5rem', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
            About Bright Links
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1.25rem' }}>
            Your trusted IT partner across the UK
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '600px' }}>
            Based in the heart of London, Bright Links delivers enterprise grade IT solutions to organisations of all sizes from ambitious SMEs to complex public sector bodies.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                Empowering businesses through technology
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Bright Links was founded with a simple mission: to make enterprise-level IT accessible to every UK business, regardless of size or sector. We believe technology should be an enabler — not a burden.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.8, marginBottom: '2rem' }}>
                From our London base office and team of certified engineers and consultants work closely with clients to design, implement, and manage IT solutions that genuinely make a difference.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'UK-based team — no overseas outsourcing',
                  'Vendor-agnostic advice always in your interest',
                  'Transparent pricing with no hidden costs',
                  'Dedicated account management for every client',
                ].map(point => (
                  <div key={point} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} style={{ color: 'var(--color-turquoise)', flexShrink: 0, marginTop: '0.125rem' }} aria-hidden={true} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-gray-700)' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--color-gray-100)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Bright Links team collaborating"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>Our values</h2>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.6 }}>The principles that guide everything we do.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🎯', title: 'Client-First', desc: 'Every decision we make is guided by what\'s best for our clients, not what\'s easiest for us.' },
              { icon: '🔒', title: 'Integrity', desc: 'Honest advice, transparent pricing, and no lock-in contracts. We earn your trust every day.' },
              { icon: '⚡', title: 'Excellence', desc: 'We hold ourselves to the highest standards in service quality, response times, and outcomes.' },
              { icon: '🌱', title: 'Sustainability', desc: 'WEEE-compliant disposal, refurbishment programmes, and carbon-conscious procurement.' },
            ].map(v => (
              <div key={v.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} aria-hidden="true">{v.icon}</div>
                <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>Accreditations & partnerships</h2>
          <p style={{ color: 'var(--color-gray-600)', marginBottom: '3rem' }}>We hold the certifications that matter most to your business.</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            {['Dell Gold Partner', 'Lenovo Gold Partner', 'Cyber Essentials'].map(cert => (
              <div key={cert} style={{ padding: '0.875rem 1.5rem', background: 'var(--color-gray-50)', border: '1.5px solid var(--color-gray-200)', borderRadius: '0.625rem', fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-navy)' }}>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-navy)', paddingBlock: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Ready to work with us?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>Get in touch today for a no-obligation conversation about your IT needs.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-lg" data-open-inquiry="true">Get a Quote</button>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline-white btn-lg">
              <Phone size={17} aria-hidden={true} /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
