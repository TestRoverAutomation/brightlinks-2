'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown, Menu, X, Mail } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { SITE, NAV_SERVICES, NAV_SOLUTIONS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleDropdown = (name: string) =>
    setOpenDropdown(prev => (prev === name ? null : name));

  return (
    <>
      {/* Top bar */}
      <div style={{ background: 'var(--color-navy)', color: 'white', fontSize: '0.8125rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBlock: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href={`mailto:${SITE.email}`} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}
              aria-label={`Email us at ${SITE.email}`}>
              <Mail size={13} aria-hidden="true" />
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneTel}`} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}
              aria-label={`Call us on ${SITE.phone}`}>
              <Phone size={13} aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>{SITE.address}</span>
        </div>
      </div>

      {/* Main header */}
      <header
        role="banner"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'white',
          transition: 'box-shadow 0.2s ease',
          boxShadow: isScrolled ? '0 2px 20px rgba(27,43,107,0.12)' : '0 1px 0 #E2E8F0',
        }}
      >
        <nav role="navigation" aria-label="Main navigation">
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem', height: '72px' }}>
            <Logo size="md" />

            {/* Desktop nav */}
            <ul
              role="list"
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0, flex: 1 }}
              className="hidden-mobile"
            >
              {/* Services dropdown */}
              <li style={{ position: 'relative' }} className="nav-item">
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'services'}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem 0.75rem', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-gray-700)', borderRadius: '0.375rem', transition: 'color 0.2s' }}
                  onMouseEnter={() => setOpenDropdown('services')}
                  onFocus={() => setOpenDropdown('services')}
                >
                  Services <ChevronDown size={15} aria-hidden="true" />
                </button>
                <div
                  className="mega-menu"
                  role="region"
                  aria-label="Services menu"
                  style={{ left: '-8rem', minWidth: '620px', display: openDropdown === 'services' ? 'block' : undefined }}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-turquoise)', marginBottom: '1rem' }}>
                    Our Services
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {NAV_SERVICES.map(item => (
                      <Link key={item.href} href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        style={{ display: 'block', padding: '0.875rem 1rem', borderRadius: '0.5rem', textDecoration: 'none', transition: 'background 0.15s', background: 'transparent' }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-gray-50)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)' }}>{item.description}</div>
                      </Link>
                    ))}
                  </div>
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-gray-200)' }}>
                    <Link href="/services" onClick={() => setOpenDropdown(null)}
                      style={{ color: 'var(--color-turquoise)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                      View all services →
                    </Link>
                  </div>
                </div>
              </li>

              {/* Solutions dropdown */}
              <li style={{ position: 'relative' }} className="nav-item">
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'solutions'}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem 0.75rem', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-gray-700)', borderRadius: '0.375rem', transition: 'color 0.2s' }}
                  onMouseEnter={() => setOpenDropdown('solutions')}
                  onFocus={() => setOpenDropdown('solutions')}
                >
                  Solutions <ChevronDown size={15} aria-hidden="true" />
                </button>
                <div
                  className="mega-menu"
                  style={{ left: '-4rem', minWidth: '280px', display: openDropdown === 'solutions' ? 'block' : undefined }}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-turquoise)', marginBottom: '1rem' }}>
                    By Sector
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {NAV_SOLUTIONS.map(item => (
                      <Link key={item.href} href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        style={{ padding: '0.625rem 0.875rem', borderRadius: '0.375rem', textDecoration: 'none', fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9375rem', transition: 'background 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-gray-50)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link href="/about" style={{ padding: '0.5rem 0.75rem', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-gray-700)', textDecoration: 'none', borderRadius: '0.375rem', display: 'block' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ padding: '0.5rem 0.75rem', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-gray-700)', textDecoration: 'none', borderRadius: '0.375rem', display: 'block' }}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginLeft: 'auto' }} className="hidden-mobile">
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline btn-sm" aria-label={`Call ${SITE.phone}`}>
                <Phone size={15} aria-hidden="true" />
                {SITE.phone}
              </a>
              <button className="btn btn-orange btn-sm" data-open-inquiry="true" aria-label="Get a free quote">
                Get a Quote
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(v => !v)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none', color: 'var(--color-navy)' }}
              className="show-mobile"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            style={{ position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0, background: 'white', overflowY: 'auto', zIndex: 49, padding: '1.5rem', paddingBottom: '6rem' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav aria-label="Mobile navigation">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {/* Services accordion */}
                <div>
                  <button
                    onClick={() => toggleDropdown('mob-services')}
                    aria-expanded={openDropdown === 'mob-services'}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 0', background: 'none', border: 'none', borderBottom: '1px solid var(--color-gray-200)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', cursor: 'pointer' }}
                  >
                    Services
                    <ChevronDown size={18} style={{ transform: openDropdown === 'mob-services' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                  {openDropdown === 'mob-services' && (
                    <div style={{ paddingLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                      {NAV_SERVICES.map(item => (
                        <Link key={item.href} href={item.href}
                          onClick={() => setMobileOpen(false)}
                          style={{ padding: '0.625rem 0.5rem', color: 'var(--color-gray-700)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem', borderRadius: '0.375rem', display: 'block' }}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solutions accordion */}
                <div>
                  <button
                    onClick={() => toggleDropdown('mob-solutions')}
                    aria-expanded={openDropdown === 'mob-solutions'}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 0', background: 'none', border: 'none', borderBottom: '1px solid var(--color-gray-200)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', cursor: 'pointer' }}
                  >
                    Solutions
                    <ChevronDown size={18} style={{ transform: openDropdown === 'mob-solutions' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                  {openDropdown === 'mob-solutions' && (
                    <div style={{ paddingLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                      {NAV_SOLUTIONS.map(item => (
                        <Link key={item.href} href={item.href}
                          onClick={() => setMobileOpen(false)}
                          style={{ padding: '0.625rem 0.5rem', color: 'var(--color-gray-700)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem', borderRadius: '0.375rem', display: 'block' }}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {['About Us|/about', 'Contact|/contact'].map(item => {
                  const [label, href] = item.split('|');
                  return (
                    <Link key={href} href={href}
                      onClick={() => setMobileOpen(false)}
                      style={{ padding: '0.875rem 0', borderBottom: '1px solid var(--color-gray-200)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', textDecoration: 'none', display: 'block' }}>
                      {label}
                    </Link>
                  );
                })}
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline"
                  style={{ justifyContent: 'center' }}
                  aria-label={`Call ${SITE.phone}`}
                  onClick={() => setMobileOpen(false)}>
                  <Phone size={17} aria-hidden="true" /> {SITE.phone}
                </a>
                <button className="btn btn-orange" data-open-inquiry="true" onClick={() => setMobileOpen(false)}
                  style={{ justifyContent: 'center' }} aria-label="Get a free quote">
                  Get a Free Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
        }
        .nav-item:hover .mega-menu,
        .nav-item:focus-within .mega-menu {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
    </>
  );
}
