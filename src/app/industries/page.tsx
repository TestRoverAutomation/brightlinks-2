import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE, NAV_INDUSTRIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Industries We Serve | Bright Links',
  description: 'IT solutions tailored to your sector. Bright Links serves public sector, healthcare, education, enterprise and SME organisations across the UK.',
};

const industryImages: Record<string, string> = {
  '/industries/public-sector': 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=600&q=80',
  '/industries/healthcare': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  '/industries/education': 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
  '/industries/enterprise': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
  '/industries/sme': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
};

export default function IndustriesPage() {
  return (
    <>
      <section style={{ background: 'var(--color-navy)', paddingBlock: '5rem', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
            Industries We Serve
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1.25rem' }}>
            IT solutions built for your sector
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '580px' }}>
            Different sectors face different challenges. Our specialists bring deep domain knowledge and a proven track record in your industry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {NAV_INDUSTRIES.map(industry => (
              <Link key={industry.href} href={industry.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--color-gray-200)', transition: 'box-shadow 0.2s, transform 0.2s' }}
                className="industry-card">
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--color-gray-100)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={industryImages[industry.href]} alt={industry.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{industry.title}</h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', lineHeight: 1.6, margin: '0 0 1rem', flex: 1 }}>{industry.description}</p>
                  <span style={{ color: 'var(--color-turquoise)', fontWeight: 600, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-navy)', paddingBlock: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Don&apos;t see your sector?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
            We work with organisations across all industries. Get in touch to discuss your specific needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-lg" data-open-inquiry="true">Contact Our Team</button>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline-white btn-lg">
              <Phone size={17} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .industry-card:hover {
          box-shadow: 0 12px 40px rgba(27,43,107,0.15);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
