import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'IT Solutions by Sector',
  description: 'Bright Links IT solutions for SMEs, enterprise, public sector, and education across the UK.',
};

const sectors = [
  {
    id: 'sme',
    title: 'Small & Medium Business',
    icon: '🏢',
    desc: 'Right-sized IT solutions that scale with your business — without enterprise complexity or price tags.',
    points: ['Flexible managed support contracts', 'Cloud-first Microsoft 365 environments', 'Cyber Essentials certification support', 'Single point of contact for all IT'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    icon: '🏙️',
    desc: 'Complex, multi-site IT environments managed with precision, scale, and rigorous governance.',
    points: ['Multi-site infrastructure management', 'Enterprise service desk', 'Security operations & SIEM', 'Dedicated delivery management'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'public-sector',
    title: 'Public Sector',
    icon: '🏛️',
    desc: 'G-Cloud accredited services meeting the strict compliance and procurement requirements of UK government.',
    points: ['G-Cloud accredited supplier', 'PSN and HSCN compliant infrastructure', 'Public sector procurement frameworks', 'Local & central government experience'],
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'education',
    title: 'Education',
    icon: '🎓',
    desc: 'Technology that supports learning — from primary schools and academy trusts to universities.',
    points: ['Multi-academy trust IT management', 'EdTech platform integration', 'Safeguarding & DfE compliance', 'Student and staff device programmes'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section style={{ background: 'var(--color-navy)', paddingBlock: '5rem', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
            Solutions by Sector
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1.25rem' }}>
            IT solutions tailored to your sector
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '580px' }}>
            We understand that different sectors have different challenges. Our sector specialists bring deep domain knowledge to every engagement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {sectors.map((sector, i) => (
              <article key={sector.id} id={sector.id} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div style={{ order: i % 2 === 1 ? 1 : 0 }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} aria-hidden="true">{sector.icon}</div>
                  <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>{sector.title}</h2>
                  <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{sector.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {sector.points.map(p => (
                      <li key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--color-gray-700)' }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-turquoise)', flexShrink: 0 }} aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary" data-open-inquiry="true">
                    Enquire Now <ArrowRight size={16} aria-hidden={true} />
                  </button>
                </div>
                <div style={{ order: i % 2 === 1 ? 0 : 1, borderRadius: '1rem', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--color-gray-100)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sector.image} alt={sector.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-navy)', paddingBlock: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Don&apos;t see your sector?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>We work with organisations across all industries. Get in touch to discuss your specific requirements.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-lg" data-open-inquiry="true">Contact Our Team</button>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline-white btn-lg">
              <Phone size={17} aria-hidden={true} /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
