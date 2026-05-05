import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import InquiryModal from '@/components/InquiryModal';
import FloatingButtons from '@/components/FloatingButtons';
import { SITE } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

const isStaging = SITE.env !== 'production';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'BrightLinks UK | Exceptional IT Solutions for UK Businesses',
    template: '%s | BrightLinks UK',
  },
  description: 'BrightLinks UK delivers managed IT services, cybersecurity, cloud solutions, and hardware to businesses across the UK. Based in London. Call 0208 127 1740.',
  keywords: ['IT solutions UK', 'managed IT services London', 'cybersecurity UK', 'cloud solutions', 'IT support London', 'BrightLinks UK'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  authors: [{ name: 'BrightLinks UK' }],
  creator: 'BrightLinks UK',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE.url,
    siteName: SITE.name,
    title: 'BrightLinks UK | Exceptional IT Solutions',
    description: 'Empowering UK businesses with managed IT, cybersecurity, cloud, and more. 24/7 UK support.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BrightLinks UK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightLinks UK | IT Solutions',
    description: 'Managed IT, cybersecurity, cloud & hardware for UK businesses.',
  },
  robots: isStaging
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#1B2B6B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': SITE.url,
              name: SITE.name,
              description: 'Managed IT services, cybersecurity, cloud solutions and hardware for UK businesses.',
              url: SITE.url,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '124 City Road',
                addressLocality: 'London',
                postalCode: 'EC1V 2NX',
                addressCountry: 'GB',
              },
              geo: { '@type': 'GeoCoordinates', latitude: 51.5267, longitude: -0.0888 },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {isStaging && (
          <div className="env-banner" role="alert">
            ⚠️ STAGING ENVIRONMENT — Not indexed by search engines
          </div>
        )}

        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <InquiryModal />
        <FloatingButtons />
      </body>
    </html>
  );
}
