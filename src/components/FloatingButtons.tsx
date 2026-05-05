'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { SITE } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <>
      {/* Floating buttons — visible on ALL screen sizes, bottom-right */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          zIndex: 40,
        }}
        aria-label="Quick contact"
        role="complementary"
      >
        {/* Call button */}
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
            boxShadow: '0 4px 20px rgba(27,43,107,0.35)',
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          className="float-btn"
        >
          <Phone size={22} aria-hidden="true" />
        </a>

        {/* Enquiry button */}
        <button
          data-open-inquiry="true"
          aria-label="Quick enquiry form"
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
            boxShadow: '0 4px 20px rgba(255,107,43,0.45)',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          className="float-btn"
        >
          <MessageSquare size={22} aria-hidden="true" />
        </button>
      </div>

      <style>{`
        .float-btn:hover {
          transform: scale(1.12);
        }
        /* On mobile push up slightly so buttons aren't too low */
        @media (max-width: 768px) {
          .float-btn {
            width: 52px !important;
            height: 52px !important;
          }
        }
      `}</style>
    </>
  );
}
