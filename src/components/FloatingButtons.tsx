'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { SITE } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop floating buttons (bottom right) */}
      <div
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 40 }}
        aria-label="Quick contact options"
        role="complementary"
      >
        <a
          href={`tel:${SITE.phoneTel}`}
          aria-label={`Call us: ${SITE.phone}`}
          title={`Call ${SITE.phone}`}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--color-navy)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(27,43,107,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(27,43,107,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,43,107,0.3)';
          }}
          className="desktop-float"
        >
          <Phone size={22} aria-hidden="true" />
        </a>

        <button
          data-open-inquiry="true"
          aria-label="Open quick enquiry form"
          title="Quick Enquiry"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--color-orange)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(255,107,43,0.4)',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,107,43,0.5)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,107,43,0.4)';
          }}
          className="desktop-float"
        >
          <MessageSquare size={22} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile sticky bottom bar */}
      <div
        className="mobile-sticky-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'white',
          borderTop: '1px solid var(--color-gray-200)',
          display: 'none',
          gap: 0,
          zIndex: 40,
          boxShadow: '0 -4px 20px rgba(27,43,107,0.1)',
        }}
        aria-label="Quick contact"
        role="complementary"
      >
        <a
          href={`tel:${SITE.phoneTel}`}
          aria-label={`Call ${SITE.phone}`}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1rem',
            background: 'var(--color-navy)',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9375rem',
            borderRight: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Phone size={18} aria-hidden="true" />
          Call Us
        </a>
        <button
          data-open-inquiry="true"
          aria-label="Open enquiry form"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1rem',
            background: 'var(--color-orange)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '0.9375rem',
          }}
        >
          <MessageSquare size={18} aria-hidden="true" />
          Quick Enquiry
        </button>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-float { display: none !important; }
          .mobile-sticky-bar { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .mobile-sticky-bar { display: none !important; }
        }
      `}</style>
    </>
  );
}
