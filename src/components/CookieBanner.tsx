'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const COOKIE_KEY = 'brightlinks_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = (type: 'all' | 'essential' | 'custom') => {
    const consent = {
      essential: true,
      analytics: type === 'all' ? true : type === 'custom' ? prefs.analytics : false,
      marketing: type === 'all' ? true : type === 'custom' ? prefs.marketing : false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(680px, calc(100vw - 2rem))',
        background: 'white',
        borderRadius: '1rem',
        boxShadow: '0 8px 40px rgba(27,43,107,0.18)',
        zIndex: 9999,
        padding: '1.5rem',
        border: '1px solid var(--color-gray-200)',
      }}
    >
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{ background: 'var(--color-turquoise-light)', borderRadius: '0.5rem', padding: '0.625rem', flexShrink: 0 }}>
          <Cookie size={20} style={{ color: 'var(--color-turquoise)' }} aria-hidden="true" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 0.5rem' }}>
            We use cookies
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', margin: 0, lineHeight: 1.6 }}>
            We use cookies to improve your experience, analyse site traffic, and personalise content. See our{' '}
            <Link href="/cookie-policy" style={{ color: 'var(--color-turquoise)', fontWeight: 600 }}>
              Cookie Policy
            </Link>{' '}
            for details.
          </p>

          {showDetails && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--color-gray-50)', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { key: 'analytics' as const, label: 'Analytics cookies', desc: 'Help us understand how visitors use our site (Google Analytics).' },
                { key: 'marketing' as const, label: 'Marketing cookies', desc: 'Used to track visitors across sites for relevant advertising.' },
              ].map(({ key, label, desc }) => (
                <label key={key} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={prefs[key]}
                    onChange={e => setPrefs(p => ({ ...p, [key]: e.target.checked }))}
                    style={{ marginTop: '0.2rem', accentColor: 'var(--color-turquoise)', width: 16, height: 16 }}
                  />
                  <div>
                    <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-navy)' }}>{label}</span>
                    <span style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--color-gray-600)' }}>{desc}</span>
                  </div>
                </label>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-sm" onClick={() => accept('all')}>
              Accept All
            </button>
            {showDetails ? (
              <button className="btn btn-primary btn-sm" onClick={() => accept('custom')}>
                Save Preferences
              </button>
            ) : (
              <button className="btn btn-outline btn-sm" onClick={() => setShowDetails(true)}>
                Manage Preferences
              </button>
            )}
            <button className="btn btn-sm" onClick={() => accept('essential')}
              style={{ background: 'none', border: '2px solid var(--color-gray-200)', color: 'var(--color-gray-600)' }}>
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={() => accept('essential')}
          aria-label="Close cookie banner (essential only)"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-gray-600)', padding: '0.25rem', flexShrink: 0, borderRadius: '0.25rem' }}
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
