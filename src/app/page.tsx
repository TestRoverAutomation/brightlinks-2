import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Cloud, Code, Monitor, Users, Award, Package, Headphones, ArrowRight, CheckCircle, Star, Phone, type LucideProps } from 'lucide-react';
import { SERVICES, STATS, TESTIMONIALS, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'BrightLinks UK | Exceptional IT Solutions for UK Businesses',
  description: 'BrightLinks UK — managed IT services, cybersecurity, cloud, software & hardware for UK businesses. London-based. 24/7 support. Call 0208 127 1740.',
};

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Shield, Lock, Cloud, Code, Monitor, Users, Award, Package, Headphones,
};

const partnerLogos = [
  { name: 'Microsoft', text: 'Microsoft' },
  { name: 'Dell Technologies', text: 'Dell' },
  { name: 'HP', text: 'HP' },
  { name: 'Cisco', text: 'Cisco' },
  { name: 'Apple', text: 'Apple' },
  { name: 'Lenovo', text: 'Lenovo' },
  { name: 'VMware', text: 'VMware' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{ position: 'relative', background: 'var(--color-navy)', color: 'white', overflow: 'hidden', paddingBlock: 'clamp(4rem, 10vw, 8rem)' }}
        aria-label="Hero section"
      >
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            style={{ objectFit: 'cover', opacity: 0.15 }}
            priority
            aria-hidden="true"
          />
        </div>
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(27,43,107,0.95) 0%, rgba(0,168,204,0.3) 100%)', zIndex: 1 }} aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '760px' }}>
            <span className="badge badge-turquoise" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              🇬🇧 UK-Based IT Solutions Provider
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem', color: 'white' }}>
              Empowering UK Businesses with{' '}
              <span style={{ color: 'var(--color-turquoise)' }}>Exceptional IT</span> Solutions
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '600px' }}>
              From managed services and cybersecurity to cloud and hardware — BrightLinks UK delivers technology that drives growth, protects your business, and keeps you ahead.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-orange btn-lg" data-open-inquiry="true" aria-label="Get a free IT quote">
                Get a Free Quote
              </button>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline-white btn-lg" aria-label={`Call us on ${SITE.phone}`}>
                <Phone size={18} aria-hidden="true" />
                {SITE.phone}
              </a>
            </div>

            {/* Trust indicators */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              {['Cyber Essentials Certified', '24/7 UK Support', 'ITIL V4 Aligned'].map(text => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-turquoise)', flexShrink: 0 }} aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ background: 'var(--color-gray-50)', paddingBlock: '2.5rem', borderBottom: '1px solid var(--color-gray-200)' }} aria-label="Our technology partners">
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gray-600)', marginBottom: '1.5rem' }}>
            Trusted technology partners
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2.5rem' }}>
            {partnerLogos.map(p => (
              <div key={p.name} title={p.name} aria-label={p.name} className="partner-logo">
                {p.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-turquoise" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Our Services</span>
            <h2 className="section-title" id="services-heading">Everything your business needs to thrive</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              We provide end-to-end IT solutions tailored to your sector, size, and goals — all backed by our UK-based team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map(service => {
              const Icon = iconMap[service.icon];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card" style={{ height: '100%' }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: '0.75rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: service.color === 'orange' ? 'var(--color-orange-light)' : service.color === 'navy' ? 'var(--color-navy-light)' : 'var(--color-turquoise-light)',
                    }}>
                      {Icon && <Icon size={24} aria-hidden="true"
                        style={{ color: service.color === 'orange' ? 'var(--color-orange)' : service.color === 'navy' ? 'var(--color-navy)' : 'var(--color-turquoise)' }} />}
                    </div>
                    <h3 style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '0.625rem' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', lineHeight: 1.6, marginBottom: '1.25rem' }}>{service.description}</p>
                    <span style={{ color: 'var(--color-turquoise)', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      Learn more <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </article>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-primary btn-lg">
              View All Services <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY BRIGHTLINKS ── */}
      <section className="section" style={{ background: 'var(--color-navy)', color: 'white' }} aria-labelledby="why-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
                Why Choose Us
              </span>
              <h2 className="section-title" id="why-heading" style={{ color: 'white', marginBottom: '1.25rem' }}>
                IT solutions built around your success
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
                We're not just a supplier — we're a strategic partner. Our UK-based team brings decades of experience, unrivalled vendor accreditations, and a genuine commitment to your outcomes.
              </p>
              <button className="btn btn-orange" data-open-inquiry="true" aria-label="Get a free quote">
                Get a Free Quote <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'UK-Based 24/7 Support', desc: 'Our helpdesk operates round the clock from UK centres — no overseas call centres, ever.' },
                { title: 'Accredited & Trusted', desc: 'Microsoft Gold Partner, Cyber Essentials Plus, ISO-aligned. We hold the accreditations that matter.' },
                { title: 'Vendor-Agnostic Advice', desc: 'We work with 200+ vendors so our recommendations are always in your best interest, not ours.' },
                { title: 'Proven Track Record', desc: 'Over 1,000 UK organisations trust us to keep their technology running and their data safe.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: 'rgba(255,255,255,0.06)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-turquoise)', flexShrink: 0, marginTop: '0.125rem' }} aria-hidden="true" />
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'white', marginBottom: '0.25rem', fontSize: '0.9375rem' }}>{title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section-sm" style={{ background: 'var(--color-turquoise)' }} aria-label="Company statistics">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {STATS.map(stat => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  {Icon && <Icon size={32} style={{ color: 'rgba(255,255,255,0.85)', margin: '0 auto 0.75rem' }} aria-hidden="true" />}
                  <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: '0.375rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS BY SECTOR ── */}
      <section className="section" aria-labelledby="sectors-heading">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-orange" style={{ marginBottom: '1rem', display: 'inline-flex' }}>By Sector</span>
            <h2 className="section-title" id="sectors-heading">Solutions for every sector</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              We understand the unique challenges across industries and deliver IT that fits.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Small & Medium Business', desc: 'Right-sized IT solutions that scale with you — from 5 to 500 users.', icon: '🏢', href: '/solutions#sme' },
              { title: 'Enterprise', desc: 'Complex, multi-site IT environments managed with precision and at scale.', icon: '🏙️', href: '/solutions#enterprise' },
              { title: 'Public Sector', desc: 'G-Cloud accredited services meeting the strict requirements of local and central government.', icon: '🏛️', href: '/solutions#public-sector' },
              { title: 'Education', desc: 'Technology that supports learning — from academy trusts to universities.', icon: '🎓', href: '/solutions#education' },
            ].map(sector => (
              <Link key={sector.href} href={sector.href} style={{ textDecoration: 'none' }}>
                <article className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} aria-hidden="true">{sector.icon}</div>
                  <h3 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{sector.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', lineHeight: 1.6, margin: 0 }}>{sector.desc}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--color-gray-50)' }} aria-labelledby="testimonials-heading">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-turquoise" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Client Stories</span>
            <h2 className="section-title" id="testimonials-heading">Trusted by UK businesses</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="card" style={{ margin: 0 }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }} aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} style={{ color: '#FBBF24', fill: '#FBBF24' }} aria-hidden="true" />
                  ))}
                </div>
                <blockquote style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-gray-700)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption style={{ borderTop: '1px solid var(--color-gray-200)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.9375rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)' }}>{t.title}, {t.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: 'var(--color-navy)', padding: '5rem 0' }} aria-labelledby="cta-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" id="cta-heading" style={{ color: 'white', marginBottom: '1rem' }}>
            Ready to transform your IT?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
            Get a free consultation with our experts. No obligation, no jargon — just honest advice tailored to your business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-lg" data-open-inquiry="true" aria-label="Get a free quote">
              Get a Free Quote
            </button>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline-white btn-lg" aria-label={`Call ${SITE.phone}`}>
              <Phone size={18} aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
