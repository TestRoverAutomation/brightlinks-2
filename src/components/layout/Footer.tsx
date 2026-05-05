'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { SITE, NAV_SERVICES } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--color-navy)', color: 'white' }} role="contentinfo">
      {/* Main footer */}
      <div className="container" style={{ paddingBlock: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Logo variant="light" size="md" />
            <p style={{ marginTop: '1.25rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: '280px' }}>
              Empowering UK businesses with exceptional IT solutions — from managed services to cybersecurity and beyond.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                {
                  href: '#', label: 'LinkedIn',
                  svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                },
                {
                  href: '#', label: 'Twitter / X',
                  svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
                },
                {
                  href: '#', label: 'Facebook',
                  svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                },
              ].map(({ href, label, svg }) => (
                <a key={label} href={href} aria-label={label}
                  style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', color: 'white', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-turquoise)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-turquoise)', marginBottom: '1.25rem' }}>
              Services
            </h3>
            <ul role="list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {NAV_SERVICES.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-turquoise)', marginBottom: '1.25rem' }}>
              Company
            </h3>
            <ul role="list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                ['About Us', '/about'],
                ['Our Services', '/services'],
                ['Solutions', '/solutions'],
                ['Contact Us', '/contact'],
                ['Cookie Policy', '/cookie-policy'],
                ['Privacy Policy', '/privacy-policy'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-turquoise)', marginBottom: '1.25rem' }}>
              Get in Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href={`tel:${SITE.phoneTel}`}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.15s' }}
                aria-label={`Call ${SITE.phone}`}>
                <Phone size={16} style={{ marginTop: 2, flexShrink: 0, color: 'var(--color-turquoise)' }} aria-hidden="true" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.15s' }}
                aria-label={`Email ${SITE.email}`}>
                <Mail size={16} style={{ marginTop: 2, flexShrink: 0, color: 'var(--color-turquoise)' }} aria-hidden="true" />
                {SITE.email}
              </a>
              <address style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontStyle: 'normal', lineHeight: 1.6 }}>
                <MapPin size={16} style={{ marginTop: 2, flexShrink: 0, color: 'var(--color-turquoise)' }} aria-hidden="true" />
                {SITE.address}
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ paddingBlock: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
            © {currentYear} BrightLinks UK Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['Cookie Policy', '/cookie-policy'], ['Privacy Policy', '/privacy-policy']].map(([label, href]) => (
              <Link key={href} href={href}
                style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
