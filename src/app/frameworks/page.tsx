import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Public Sector Procurement Frameworks | BrightLinks UK',
  description: 'Buy IT services from BrightLinks UK through approved public sector procurement frameworks including Crown Commercial Service, NHS and YPO.',
};

const frameworks = [
  {
    name: 'Technology Products & Services 2 (TPS2)',
    provider: 'Crown Commercial Service (CCS)',
    sectors: ['Central Government', 'Local Government', 'Healthcare', 'Blue Light', 'HE/FE', 'Education'],
    procurement: ['Direct Award', 'Mini Competition'],
    lots: [
      'Lot 2: Hardware',
      'Lot 5: Health and Social Care Technology',
      'Lot 7: Sustainability & Circular IT',
      'Lot 8: Technology Catalogue',
    ],
    description: 'One of the UK\'s largest IT procurement frameworks, covering hardware, software and technology services for the entire public sector.',
  },
  {
    name: 'G-Cloud 14',
    provider: 'Crown Commercial Service (CCS)',
    sectors: ['Central Government', 'Local Government', 'Healthcare', 'Blue Light', 'HE/FE', 'Education'],
    procurement: ['Direct Award'],
    lots: [
      'Lot 2: Cloud Software',
      'Lot 3: Cloud Support',
    ],
    description: 'The government\'s primary route for buying cloud-based services. BrightLinks is an approved G-Cloud supplier for cloud infrastructure and managed services.',
  },
  {
    name: 'Network Services 3 (RM6116)',
    provider: 'Crown Commercial Service (CCS)',
    sectors: ['Central Government', 'Local Government', 'Healthcare', 'Blue Light'],
    procurement: ['Direct Award', 'Mini Competition'],
    lots: [
      'Lot 1a: Wide Area Network / Data Access',
      'Lot 2a: Local Area Network / Local Connectivity',
      'Lot 4b: Digital Communication Services (UC)',
      'Lot 4c: Contact Centres',
    ],
    description: 'Covers all connectivity and networking services including WAN, LAN, telephony and unified communications for public sector bodies.',
  },
  {
    name: 'Total Technology Solutions',
    provider: 'NHS North of England Commercial Procurement Collaborative (NOE CPC)',
    sectors: ['Central Government', 'Local Government', 'Healthcare', 'Blue Light', 'HE/FE', 'Education'],
    procurement: ['Direct Award', 'Mini Competition'],
    lots: ['Single Lot Framework'],
    description: 'An NHS-led framework providing a compliant route to purchase a broad range of IT hardware, software and managed services.',
  },
  {
    name: 'YPO 001161 — Sustainable Hardware, Software & Technology Services',
    provider: 'YPO',
    sectors: ['Central Government', 'Local Government', 'Healthcare', 'Blue Light', 'HE/FE', 'Education'],
    procurement: ['Direct Award', 'Mini Competition'],
    lots: ['Lot 2: Supply of New Hardware'],
    description: 'A Yorkshire Purchasing Organisation framework for sustainable IT hardware and technology services, open to the wider public sector.',
  },
  {
    name: 'Supply of Software Products & Associated Services',
    provider: 'Kent County Council',
    sectors: ['Central Government', 'Local Government', 'Healthcare', 'Blue Light', 'HE/FE', 'Education'],
    procurement: ['Direct Award', 'Mini Competition'],
    lots: ['Single Lot Framework'],
    description: 'A compliant route to purchase software licences and associated support services across the public sector.',
  },
];

const sectorBadgeColors: Record<string, string> = {
  'Central Government': '#1B2B6B',
  'Local Government': '#2563EB',
  'Healthcare': '#059669',
  'Blue Light': '#DC2626',
  'HE/FE': '#7C3AED',
  'Education': '#D97706',
};

export default function FrameworksPage() {
  return (
    <>
      <section style={{ background: 'var(--color-navy)', paddingBlock: '5rem', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(0,168,204,0.2)', color: 'var(--color-turquoise)', marginBottom: '1rem', display: 'inline-flex' }}>
            Procurement Frameworks
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1.25rem' }}>
            Public Sector Procurement Frameworks
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '620px' }}>
            BrightLinks UK is an approved supplier on multiple Crown Commercial Service, NHS, and local authority frameworks — making it easy for public sector organisations to procure our services compliantly and quickly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {frameworks.map(fw => (
              <div key={fw.name} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                  <div>
                    <h2 style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '0.375rem' }}>{fw.name}</h2>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-gray-500)', marginBottom: '0.875rem', fontWeight: 500 }}>Provider: {fw.provider}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', lineHeight: 1.6, margin: 0 }}>{fw.description}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-500)', marginBottom: '0.5rem' }}>Eligible Sectors</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                        {fw.sectors.map(s => (
                          <span key={s} style={{ background: sectorBadgeColors[s] ?? 'var(--color-navy)', color: 'white', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: '0.25rem' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-500)', marginBottom: '0.5rem' }}>Procurement Route</p>
                      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                        {fw.procurement.map(p => (
                          <span key={p} style={{ background: 'rgba(0,168,204,0.1)', color: 'var(--color-turquoise)', fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '0.25rem', border: '1px solid rgba(0,168,204,0.25)' }}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-500)', marginBottom: '0.5rem' }}>Available Lots</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {fw.lots.map(l => (
                          <li key={l} style={{ fontSize: '0.8125rem', color: 'var(--color-gray-700)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-turquoise)', flexShrink: 0 }} aria-hidden="true" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
            Not sure which framework applies to you?
          </h2>
          <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Our public sector team will identify the right procurement route for your organisation and guide you through the process — at no cost and with no obligation.
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
          <h2 style={{ fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Ready to procure with confidence?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
            Buy compliantly through an approved framework — no lengthy tender process required.
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
