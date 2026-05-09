import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE } from '@/lib/constants';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Bright Links � call 0208 127 1740, email info@brightlinksuk.com, or visit us at 124 City Road, London EC1V 2NX.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--color-navy)', paddingBlock: '4rem', color: 'white' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Get in touch</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '540px' }}>
            Whether you have a quick question or need a comprehensive IT review — our team is here to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            {/* Form */}
            <div>
              <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Send us a message</h2>
              <p style={{ color: 'var(--color-gray-600)', marginBottom: '2rem', fontSize: '0.9375rem' }}>We respond within 2 business hours.</p>

              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '2rem' }}>Contact information</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                  { Icon: Phone, label: 'Telephone', value: SITE.phone, href: `tel:${SITE.phoneTel}` },
                  { Icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { Icon: MapPin, label: 'Address', value: SITE.address, href: '#map' },
                  { Icon: Clock, label: 'Office hours', value: 'Mon–Fri: 9:00–17:30', href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '0.625rem', background: 'var(--color-turquoise-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={20} style={{ color: 'var(--color-turquoise)' }} aria-hidden={true} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-gray-600)', marginBottom: '0.25rem' }}>{label}</div>
                      {href ? (
                        <a href={href} style={{ fontWeight: 600, color: 'var(--color-navy)', textDecoration: 'none', fontSize: '0.9375rem', whiteSpace: 'pre-line' }}>{value}</a>
                      ) : (
                        <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9375rem', whiteSpace: 'pre-line' }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div id="map" style={{ borderRadius: '1rem', overflow: 'hidden', height: '280px', background: 'var(--color-gray-100)' }}>
                <iframe
                  title="Bright Links location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5!2d-0.0888!3d51.5267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6f1a2c3d4f%3A0x0!2s124+City+Road%2C+London+EC1V+2NX!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
