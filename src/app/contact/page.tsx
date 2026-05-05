import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact BrightLinks UK — call 0208 127 1740, email info@brightlinksuk.com, or visit us at 124 City Road, London EC1V 2NX.',
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

              <form
                name="contact"
                method="POST"
                action="/contact?success=true"
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input className="form-input" type="text" id="name" name="name" required autoComplete="name" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="company">Company</label>
                    <input className="form-input" type="text" id="company" name="company" autoComplete="organization" placeholder="Acme Ltd" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input className="form-input" type="email" id="email" name="email" required autoComplete="email" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input className="form-input" type="tel" id="phone" name="phone" autoComplete="tel" placeholder="07700 900000" />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="form-label" htmlFor="service">Service Interest</label>
                  <select className="form-input" id="service" name="service" style={{ appearance: 'none' }}>
                    <option value="">Select a service...</option>
                    <option>Managed IT Services</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Solutions</option>
                    <option>Software Solutions</option>
                    <option>Hardware & Configuration</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    className="form-input"
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', gap: '0.75rem', cursor: 'pointer', alignItems: 'flex-start' }}>
                    <input type="checkbox" required style={{ marginTop: '0.2rem', accentColor: 'var(--color-turquoise)', width: 16, height: 16, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)', lineHeight: 1.5 }}>
                      I agree to BrightLinks UK processing my data per the <a href="/privacy-policy" style={{ color: 'var(--color-turquoise)', fontWeight: 600 }}>Privacy Policy</a>. *
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '2rem' }}>Contact information</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                  { Icon: Phone, label: 'Telephone', value: SITE.phone, href: `tel:${SITE.phoneTel}` },
                  { Icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { Icon: MapPin, label: 'Address', value: SITE.address, href: '#map' },
                  { Icon: Clock, label: 'Office hours', value: 'Mon–Fri: 08:00–18:00\n24/7 support for managed clients', href: undefined },
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
                  title="BrightLinks UK location map"
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
