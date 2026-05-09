import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Bright Links privacy policy — how we collect, use, and protect your personal data in accordance with UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--color-gray-600)', marginBottom: '3rem' }}>Last updated: May 2025. Bright Links is committed to protecting your personal data in accordance with UK GDPR and the Data Protection Act 2018.</p>

        {[
          {
            title: '1. Who we are',
            content: `Bright Links Ltd is the data controller for personal data collected through this website.\n\nContact: ${SITE.email} | ${SITE.phone}\nAddress: ${SITE.address}`,
          },
          {
            title: '2. Data we collect',
            content: 'We may collect:\n• Contact details (name, email, phone, company) when you submit enquiry or contact forms\n• Usage data (pages visited, time on site) via analytics cookies (with consent)\n• IP address and browser type for security and analytics purposes',
          },
          {
            title: '3. How we use your data',
            content: 'We use your data to:\n• Respond to your enquiries and provide our services\n• Send you relevant communications (with consent)\n• Improve our website and services through analytics\n• Meet our legal and regulatory obligations',
          },
          {
            title: '4. Legal basis for processing',
            content: 'We process your data under the following legal bases:\n• **Legitimate interest** — responding to your enquiries\n• **Consent** — marketing communications and analytics cookies\n• **Contract** — delivering services you have engaged us for\n• **Legal obligation** — compliance with applicable law',
          },
          {
            title: '5. Data sharing',
            content: 'We do not sell your personal data. We may share data with:\n• Trusted service providers (e.g., form processing, email) under data processing agreements\n• Regulatory bodies where required by law\n\nAll third parties are GDPR-compliant and operate within the UK or EEA.',
          },
          {
            title: '6. Data retention',
            content: 'Enquiry data is retained for 3 years from last contact. Client contract data is retained for 7 years as required by UK law. Analytics data is retained per Google Analytics default settings (26 months).',
          },
          {
            title: '7. Your rights',
            content: 'Under UK GDPR, you have the right to:\n• Access your personal data\n• Correct inaccurate data\n• Request erasure of your data\n• Object to processing\n• Data portability\n• Withdraw consent at any time\n\nTo exercise any right, contact us at ' + SITE.email,
          },
          {
            title: '8. Complaints',
            content: 'If you believe we have mishandled your data, you have the right to lodge a complaint with the Information Commissioner\'s Office (ICO):\nwww.ico.org.uk | 0303 123 1113',
          },
        ].map(section => (
          <div key={section.title} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.875rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--color-turquoise)' }}>
              {section.title}
            </h2>
            <div style={{ fontSize: '0.9375rem', color: 'var(--color-gray-700)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
