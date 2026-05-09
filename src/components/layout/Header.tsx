'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown, Menu, X, Mail, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { SITE, NAV_SERVICES, NAV_INDUSTRIES } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  const navLinkStyle = {
    padding: '0.5rem 0.75rem',
    fontWeight: 600,
    fontSize: '0.9375rem',
    color: 'var(--color-gray-700)',
    textDecoration: 'none',
    borderRadius: '0.375rem',
    display: 'block',
  } as const;

  return (
    <>
      {/* Top bar */}
      <div style={{ background: 'var(--color-navy)', color: 'white', fontSize: '0.8125rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBlock: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${SITE.email}`} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
              <Mail size={13} aria-hidden="true" />{SITE.email}
            </a>
            <a href={`tel:${SITE.phoneTel}`} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
              <Phone size={13} aria-hidden="true" />{SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        role="banner"
        style={{
          position: 'sticky', top: 0, zIndex: 50, background: 'white',
          boxShadow: isScrolled ? '0 2px 20px rgba(27,43,107,0.12)' : '0 1px 0 #E2E8F0',
          transition: 'box-shadow 0.2s',
        }}
      >
        <nav role="navigation" aria-label="Main navigation">
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', height: '72px', position: 'relative' }}>
            <Logo size="md" />

            {/* Desktop nav */}
            <ul role="list" style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', listStyle: 'none', margin: '0 0 0 0.75rem', padding: 0, flex: 1 }} className="desktop-nav">

              {/* 1. Solutions — mega menu with all services */}
              <li style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown('solutions')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'solutions'}
                  onFocus={() => setOpenDropdown('solutions')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem 0.75rem', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-gray-700)', borderRadius: '0.375rem' }}
                >
                  Solutions <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: openDropdown === 'solutions' ? 'rotate(180deg)' : 'none' }} aria-hidden="true" />
                </button>

                {openDropdown === 'solutions' && (
                  <div
                    role="region"
                    aria-label="Solutions menu"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: 0,
                      width: 'min(680px, 92vw)',
                      background: 'white',
                      borderRadius: '0.75rem',
                      boxShadow: '0 20px 50px rgba(27,43,107,0.15)',
                      padding: '1.75rem 2rem',
                      borderTop: '3px solid var(--color-turquoise)',
                      zIndex: 200,
                    }}
                    onMouseEnter={() => setOpenDropdown('solutions')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-turquoise)', marginBottom: '1rem' }}>
                      Our Solutions
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      {NAV_SERVICES.map(item => (
                        <Link key={item.href} href={item.href} onClick={() => setOpenDropdown(null)}
                          className="mega-menu-item">
                          <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-600)' }}>{item.description}</div>
                        </Link>
                      ))}
                    </div>
                    <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--color-gray-200)' }}>
                      <Link href="/services" onClick={() => setOpenDropdown(null)}
                        style={{ color: 'var(--color-turquoise)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                        View all solutions <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* 2. Industries dropdown */}
              <li style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown('industries')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'industries'}
                  onFocus={() => setOpenDropdown('industries')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem 0.75rem', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-gray-700)', borderRadius: '0.375rem' }}
                >
                  Industries <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: openDropdown === 'industries' ? 'rotate(180deg)' : 'none' }} aria-hidden="true" />
                </button>

                {openDropdown === 'industries' && (
                  <div
                    style={{
                      position: 'absolute', top: 'calc(100% + 4px)', left: 0,
                      background: 'white', borderRadius: '0.75rem',
                      boxShadow: '0 16px 40px rgba(27,43,107,0.15)',
                      padding: '1rem', minWidth: '280px',
                      borderTop: '3px solid var(--color-turquoise)', zIndex: 200,
                    }}
                    onMouseEnter={() => setOpenDropdown('industries')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-turquoise)', marginBottom: '0.75rem', paddingInline: '0.5rem' }}>
                      By Sector
                    </p>
                    {NAV_INDUSTRIES.map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setOpenDropdown(null)}
                        className="dropdown-item">
                        <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.875rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.775rem', color: 'var(--color-gray-600)', fontWeight: 400, marginTop: '0.1rem' }}>{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* 3. Frameworks */}
              <li>
                <Link href="/frameworks" style={navLinkStyle}>Frameworks</Link>
              </li>

              {/* 4. Partners */}
              <li>
                <Link href="/partners" style={navLinkStyle}>Partners</Link>
              </li>

              {/* 5. About Us */}
              <li>
                <Link href="/about" style={navLinkStyle}>About Us</Link>
              </li>

              {/* 6. Contact */}
              <li>
                <Link href="/contact" style={navLinkStyle}>Contact</Link>
              </li>
            </ul>

            {/* Desktop CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginLeft: 'auto' }} className="desktop-nav">
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline btn-sm">
                <Phone size={15} aria-hidden="true" />{SITE.phone}
              </a>
              <button className="btn btn-orange btn-sm" data-open-inquiry="true">
                Get a Quote
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={drawerOpen}
              aria-controls="side-drawer"
              onClick={() => setDrawerOpen(v => !v)}
              className="mobile-menu-btn"
              style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--color-navy)', display: 'none', borderRadius: '0.375rem' }}
            >
              <Menu size={26} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Side drawer backdrop */}
      {drawerOpen && (
        <div
          onClick={closeDrawer}
          aria-hidden="true"
          style={{
            position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.5)',
            zIndex: 80, backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* Side drawer panel */}
      <div
        id="side-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(320px, 85vw)',
          background: 'white',
          zIndex: 90,
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex', flexDirection: 'column',
          boxShadow: '-8px 0 40px rgba(27,43,107,0.18)',
          overflowY: 'auto',
        }}
      >
        {/* Drawer header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-gray-200)', flexShrink: 0 }}>
          <Logo size="sm" />
          <button
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            style={{ background: 'var(--color-gray-100)', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '0.5rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Drawer body */}
        <nav aria-label="Mobile navigation" style={{ flex: 1, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column' }}>

          {/* Solutions accordion */}
          <div style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
            <button
              onClick={() => setMobileAccordion(p => p === 'solutions' ? null : 'solutions')}
              aria-expanded={mobileAccordion === 'solutions'}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', background: 'none', border: 'none', fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', cursor: 'pointer' }}
            >
              Solutions
              <ChevronDown size={18} style={{ transform: mobileAccordion === 'solutions' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--color-turquoise)' }} aria-hidden="true" />
            </button>
            {mobileAccordion === 'solutions' && (
              <div style={{ paddingBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                {NAV_SERVICES.map(item => (
                  <Link key={item.href} href={item.href} onClick={closeDrawer}
                    style={{ padding: '0.625rem 0.75rem', color: 'var(--color-gray-700)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', borderRadius: '0.375rem', display: 'block' }}
                    className="drawer-link">
                    {item.title}
                  </Link>
                ))}
                <Link href="/services" onClick={closeDrawer}
                  style={{ padding: '0.625rem 0.75rem', color: 'var(--color-turquoise)', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  View all solutions <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          {/* Industries accordion */}
          <div style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
            <button
              onClick={() => setMobileAccordion(p => p === 'industries' ? null : 'industries')}
              aria-expanded={mobileAccordion === 'industries'}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', background: 'none', border: 'none', fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', cursor: 'pointer' }}
            >
              Industries
              <ChevronDown size={18} style={{ transform: mobileAccordion === 'industries' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--color-turquoise)' }} aria-hidden="true" />
            </button>
            {mobileAccordion === 'industries' && (
              <div style={{ paddingBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                {NAV_INDUSTRIES.map(item => (
                  <Link key={item.href} href={item.href} onClick={closeDrawer}
                    style={{ padding: '0.625rem 0.75rem', color: 'var(--color-gray-700)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', borderRadius: '0.375rem', display: 'block' }}
                    className="drawer-link">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Frameworks, Partners, About Us, Contact */}
          {([['Frameworks', '/frameworks'], ['Partners', '/partners'], ['About Us', '/about'], ['Contact', '/contact']] as [string, string][]).map(([label, href]) => (
            <Link key={href} href={href} onClick={closeDrawer}
              style={{ padding: '1rem 0', borderBottom: '1px solid var(--color-gray-200)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', textDecoration: 'none', display: 'block' }}>
              {label}
            </Link>
          ))}

          {/* Drawer CTAs */}
          <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline" onClick={closeDrawer} style={{ justifyContent: 'center' }}>
              <Phone size={17} aria-hidden="true" /> {SITE.phone}
            </a>
            <button className="btn btn-orange" data-open-inquiry="true" onClick={closeDrawer} style={{ justifyContent: 'center' }}>
              Get a Quote
            </button>
          </div>
        </nav>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .mobile-menu-btn { display: none !important; }
        }
        .mega-menu-item {
          display: block;
          padding: 0.75rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: background 0.15s;
        }
        .mega-menu-item:hover { background: var(--color-gray-50); }

        .dropdown-item {
          display: block;
          padding: 0.625rem 0.875rem;
          border-radius: 0.375rem;
          text-decoration: none;
          transition: background 0.15s;
        }
        .dropdown-item:hover { background: var(--color-gray-50); }
        .dropdown-item + .dropdown-item { margin-top: 0.125rem; }

        .drawer-link:hover { background: var(--color-gray-50) !important; }
      `}</style>
    </>
  );
}
