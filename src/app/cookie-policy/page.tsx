import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Bright Links cookie policy — learn what cookies we use and how to manage your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Cookie Policy</h1>
        <p style={{ color: 'var(--color-gray-600)', marginBottom: '3rem' }}>Last updated: May 2025</p>

        {[
          {
            title: 'What are cookies?',
            content: 'Cookies are small text files stored on your device when you visit a website. They help us provide a better experience by remembering your preferences and understanding how you use our site.',
          },
          {
            title: 'How we use cookies',
            content: `We use cookies for the following purposes:\n\n• **Essential cookies** — Required for the website to function correctly. These cannot be disabled.\n• **Analytics cookies** — Help us understand how visitors interact with our website (e.g., Google Analytics). We use this data anonymously to improve our content.\n• **Marketing cookies** — Used to track visitors across websites for the purpose of displaying relevant advertising.`,
          },
          {
            title: 'Cookies we use',
            content: `| Cookie | Type | Purpose | Duration |\n|--------|------|---------|----------|\n| Bright Links_cookie_consent | Essential | Stores your cookie preferences | 1 year |\n| _ga | Analytics | Google Analytics visitor ID | 2 years |\n| _gid | Analytics | Google Analytics session | 24 hours |\n| _fbp | Marketing | Facebook pixel tracking | 3 months |`,
          },
          {
            title: 'Managing your preferences',
            content: 'You can manage your cookie preferences at any time by clicking the "Manage Preferences" option in our cookie banner. You can also control cookies through your browser settings — most browsers allow you to block or delete cookies.',
          },
          {
            title: 'Third-party cookies',
            content: 'Some cookies are set by third-party services (such as Google Analytics). We do not control these cookies. Please refer to the relevant third party\'s privacy policy for information about their cookies.',
          },
          {
            title: 'Contact us',
            content: `If you have questions about our use of cookies, please contact us:\n\nEmail: ${SITE.email}\nTelephone: ${SITE.phone}\nAddress: ${SITE.address}`,
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
