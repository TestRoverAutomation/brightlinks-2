import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'IT Solutions for Enterprise | Bright Links',
  description: 'Scalable, multi-site IT infrastructure and managed services for large UK organisations. Security-led enterprise IT.',
};

const features = [
  'Multi-site infrastructure design and management',
  'Enterprise service desk',
  'Security operations and SIEM integration',
  'Dedicated delivery and account management',
  'Microsoft Azure and hybrid cloud architecture',
  'Enterprise networking (SD-WAN, MPLS)',
  'Business continuity and disaster recovery',
  'End-to-end hardware procurement and refresh cycles',
];

const benefits = [
  { title: 'Scale Without Complexity', desc: 'We manage complex, multi-site IT environments so your internal teams can focus on strategic initiatives.' },
  { title: 'Structured Delivery', desc: 'Service delivery built on best practices — structured processes, clear SLAs, and continuous improvement.' },
  { title: 'Enterprise Security', desc: 'SIEM, SOC support, endpoint detection and response, and vulnerability management at enterprise scale.' },
  { title: 'Dedicated Team', desc: 'A named account manager and senior engineering resource who know your environment inside out.' },
];

export default function EnterprisePage() {
  return (
    <>
      <section style={{ background: 'var(--color-navy)', paddingBlock: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <Link href="/industries" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginBottom: '1.5rem' }}>
            ← All Industries
          </Link>
          <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
            Enterprise
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1.25rem' }}>
            IT Solutions for Enterprise
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '580px', marginBottom: '2.5rem' }}>
            Complex, multi-site IT environments managed with precision. We bring the people, processes, and technology to keep large organisations running at full capacity.
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
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Enterprise IT" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-navy)', textAlign: 'center', marginBottom: '3rem' }}>
            Why enterprise organisations choose Bright Links
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
          <h2 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Related solutions</h2>
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
            Speak to our enterprise specialists today — no obligation, no jargon.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-lg" data-open-inquiry="true">Get a Quote</button>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline-white btn-lg">
              <Phone size={17} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
