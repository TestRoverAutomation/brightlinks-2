import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Technology Partners | BrightLinks UK',
  description: 'BrightLinks UK partners with the world\'s leading technology vendors to deliver best-in-class IT solutions to our clients.',
};

const partners = [
  {
    name: 'Dell Technologies',
    tier: 'Gold Partner',
    description: 'Gold reseller of Dell laptops, desktops, servers and storage solutions. From individual device procurement to full data centre refreshes.',
    category: 'Hardware',
  },
  {
    name: 'Lenovo',
    tier: 'Gold Partner',
    description: 'Full range of Lenovo ThinkPad, ThinkCentre and ThinkStation devices — ideal for corporate and education environments.',
    category: 'Hardware',
  },
  {
    name: 'HP / HPE',
    tier: 'Authorised Partner',
    description: 'Supplying HP client devices and HPE server, storage and networking infrastructure for businesses of all sizes.',
    category: 'Hardware',
  },
  {
    name: 'Microsoft',
    tier: 'Authorised Partner',
    description: 'Authorised Microsoft Partner for Microsoft 365, Azure, Teams, and the full Modern Workplace suite — covering Cloud Productivity, Security and Small & Midmarket Cloud Solutions.',
    category: 'Cloud & Productivity',
  },
  {
    name: 'Sophos',
    tier: 'Authorised Partner',
    description: 'Authorised Sophos partner delivering endpoint protection, firewall, email security and managed detection & response (MDR) services.',
    category: 'Cybersecurity',
  },
  {
    name: 'Veeam',
    tier: 'Silver Partner',
    description: 'Veeam Silver Partner for backup, recovery and data management — keeping your critical data protected across cloud and on-premises.',
    category: 'Backup & Recovery',
  },
];

const categories = [...new Set(partners.map(p => p.category))];

const categoryColors: Record<string, string> = {
  'Cloud & Productivity': 'var(--color-turquoise)',
  'Hardware': 'var(--color-navy)',
  'Cybersecurity': '#DC2626',
  'Networking': '#2563EB',
  'Backup & Recovery': '#D97706',
};

export default function PartnersPage() {
  return (
    <>
      <section style={{ background: 'var(--color-navy)', paddingBlock: '5rem', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
            Technology Partners
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1.25rem' }}>
            Trusted Partners, Best-in-Class Technology
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '580px' }}>
            We partner with the world&apos;s leading technology vendors so we can always recommend and deliver the right solution — not just the one we happen to sell.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {categories.map(category => (
            <div key={category} style={{ marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ width: 4, height: 28, background: categoryColors[category] ?? 'var(--color-turquoise)', borderRadius: 2, flexShrink: 0 }} aria-hidden="true" />
                <h2 style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-navy)', margin: 0 }}>{category}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
                {partners.filter(p => p.category === category).map(partner => (
                  <div key={partner.name} className="card" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <h3 style={{ fontWeight: 800, fontSize: '1.0625rem', color: 'var(--color-navy)', margin: 0 }}>{partner.name}</h3>
                      <span style={{
                        background: categoryColors[category] ? `${categoryColors[category]}18` : 'rgba(0,168,204,0.1)',
                        color: categoryColors[category] ?? 'var(--color-turquoise)',
                        fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.55rem',
                        borderRadius: '0.25rem', whiteSpace: 'nowrap', marginLeft: '0.5rem',
                      }}>
                        {partner.tier}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', lineHeight: 1.6, margin: 0 }}>{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
            Looking for a specific technology?
          </h2>
          <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Our partner ecosystem covers thousands of products and services. If you don&apos;t see a vendor here, chances are we can still source it. Get in touch.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" data-open-inquiry="true">Speak to Our Team</button>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline btn-lg">
              <Phone size={17} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-navy)', paddingBlock: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Ready to get started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
            Work with a partner-accredited team that puts your needs first.
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
