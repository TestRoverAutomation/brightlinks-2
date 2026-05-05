import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Lock, Cloud, Code, Monitor, type LucideProps } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'IT Services',
  description: 'Explore BrightLinks UK\'s full range of IT services — managed IT, cybersecurity, cloud, software, and hardware solutions for UK businesses.',
};

const iconMap: Record<string, React.ComponentType<LucideProps>> = { Shield, Lock, Cloud, Code, Monitor };

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--color-navy)', color: 'white', paddingBlock: '5rem' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
            Our Services
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, color: 'white', maxWidth: '700px', marginBottom: '1.25rem' }}>
            End-to-end IT solutions for UK businesses
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '600px' }}>
            Whether you need 24/7 managed support, robust cybersecurity, or cutting-edge cloud infrastructure — BrightLinks UK has you covered.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              const isEven = i % 2 === 1;
              return (
                <article key={service.slug} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                  <div style={{ order: isEven ? 1 : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                      <div style={{ width: 48, height: 48, borderRadius: '0.75rem', background: 'var(--color-turquoise-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {Icon && <Icon size={22} style={{ color: 'var(--color-turquoise)' }} aria-hidden={true} />}
                      </div>
                      <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-navy)', margin: 0 }}>{service.title}</h2>
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{service.description}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      {service.features.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-gray-700)' }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-turquoise)', flexShrink: 0 }} aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${service.slug}`} className="btn btn-primary">
                      Learn more <ArrowRight size={16} aria-hidden={true} />
                    </Link>
                  </div>
                  <div style={{ order: isEven ? 0 : 1, borderRadius: '1rem', overflow: 'hidden', aspectRatio: '16/9', background: 'var(--color-gray-100)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={`${service.title} illustration`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-turquoise)', paddingBlock: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Not sure where to start?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', fontSize: '1.0625rem' }}>Book a free 30-minute IT review with one of our consultants.</p>
          <button className="btn btn-primary btn-lg" data-open-inquiry="true">Get a Free Consultation</button>
        </div>
      </section>
    </>
  );
}
