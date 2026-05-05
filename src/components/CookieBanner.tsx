'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Lock, Settings, BarChart2, Megaphone } from 'lucide-react';

const COOKIE_KEY = 'brightlinks_cookie_consent';

const COOKIE_CATEGORIES = [
  {
    key: 'necessary' as const,
    label: 'Necessary Cookies',
    desc: 'Essential for the website to function. Cannot be disabled. Includes session management and cookie consent preferences.',
    always: true,
    icon: Lock,
    examples: 'brightlinks_cookie_consent, session_id',
  },
  {
    key: 'functional' as const,
    label: 'Functional Cookies',
    desc: 'Enable enhanced functionality such as remembering your preferences, language settings, and personalisation choices.',
    always: false,
    icon: Settings,
    examples: 'language_pref, user_region',
  },
  {
    key: 'analytics' as const,
    label: 'Analytics Cookies',
    desc: 'Help us understand how visitors interact with our website using anonymised data. We use Google Analytics.',
    always: false,
    icon: BarChart2,
    examples: '_ga, _gid, _gat',
  },
  {
    key: 'marketing' as const,
    label: 'Marketing Cookies',
    desc: 'Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.',
    always: false,
    icon: Megaphone,
    examples: '_fbp, _gcl_au',
  },
] as const;

type Prefs = { functional: boolean; analytics: boolean; marketing: boolean };

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ functional: true, analytics: true, marketing: false });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const save = (type: 'all' | 'essential' | 'custom') => {
    const consent = {
      necessary: true,
      functional: type === 'all' ? true : type === 'custom' ? prefs.functional : false,
      analytics:  type === 'all' ? true : type === 'custom' ? prefs.analytics  : false,
      marketing:  type === 'all' ? true : type === 'custom' ? prefs.marketing  : false,
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
      aria-label="Cookie preferences"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(700px, calc(100vw - 2rem))',
        background: 'white',
        borderRadius: '1rem',
        boxShadow: '0 8px 48px rgba(27,43,107,0.2)',
        zIndex: 9999,
        padding: '1.5rem',
        border: '1px solid var(--color-gray-200)',
        maxHeight: 'calc(100vh - 3rem)',
        overflowY: 'auto',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div style={{ background: 'var(--color-turquoise-light)', borderRadius: '0.5rem', padding: '0.625rem', flexShrink: 0 }}>
          <Cookie size={20} style={{ color: 'var(--color-turquoise)' }} aria-hidden="true" />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.0625rem', fontWeight: 800, color: 'var(--color-navy)', margin: '0 0 0.375rem' }}>
            Your Cookie Preferences
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', margin: 0, lineHeight: 1.6 }}>
            We use cookies to enhance your experience, analyse traffic, and serve relevant content. Choose which categories you accept. See our{' '}
            <Link href="/cookie-policy" style={{ color: 'var(--color-turquoise)', fontWeight: 600 }}>
              Cookie Policy
            </Link>{' '}
            for full details.
          </p>
        </div>
        <button
          onClick={() => save('essential')}
          aria-label="Close — accept essential cookies only"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-gray-600)', padding: '0.25rem', flexShrink: 0, borderRadius: '0.25rem', lineHeight: 1 }}
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      {/* Toggle details */}
      <button
        onClick={() => setShowDetails(v => !v)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-turquoise)', fontWeight: 600, fontSize: '0.8125rem', padding: 0, marginBottom: showDetails ? '1rem' : 0, display: 'flex', alignItems: 'center', gap: '0.375rem' }}
        aria-expanded={showDetails}
      >
        {showDetails ? '▲ Hide details' : '▼ Manage cookie categories'}
      </button>

      {/* Cookie category cards */}
      {showDetails && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1rem' }}>
          {COOKIE_CATEGORIES.map(({ key, label, desc, always, icon: Icon, examples }) => (
            <div
              key={key}
              style={{
                padding: '0.875rem 1rem',
                background: always ? 'var(--color-gray-50)' : 'white',
                border: `1.5px solid ${always ? 'var(--color-gray-200)' : 'var(--color-gray-200)'}`,
                borderRadius: '0.625rem',
                display: 'flex',
                gap: '0.875rem',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: '0.5rem', background: always ? 'var(--color-gray-200)' : 'var(--color-turquoise-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={17} style={{ color: always ? 'var(--color-gray-600)' : 'var(--color-turquoise)' }} aria-hidden="true" />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-navy)' }}>{label}</span>
                  {always ? (
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'var(--color-gray-200)', color: 'var(--color-gray-600)', padding: '0.15rem 0.625rem', borderRadius: '9999px' }}>
                      Always On
                    </span>
                  ) : (
                    <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }} aria-label={`Toggle ${label}`}>
                      <input
                        type="checkbox"
                        checked={prefs[key as keyof Prefs]}
                        onChange={e => setPrefs(p => ({ ...p, [key]: e.target.checked }))}
                        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                      />
                      {/* Custom toggle */}
                      <span style={{
                        display: 'flex', alignItems: 'center',
                        width: 44, height: 24, borderRadius: '9999px',
                        background: prefs[key as keyof Prefs] ? 'var(--color-turquoise)' : 'var(--color-gray-200)',
                        padding: '2px',
                        transition: 'background 0.2s',
                        position: 'relative',
                      }}>
                        <span style={{
                          width: 20, height: 20, borderRadius: '50%', background: 'white',
                          transform: prefs[key as keyof Prefs] ? 'translateX(20px)' : 'translateX(0)',
                          transition: 'transform 0.2s',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                        }} />
                      </span>
                    </label>
                  )}
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)', margin: '0 0 0.25rem', lineHeight: 1.5 }}>{desc}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-gray-600)', margin: 0, opacity: 0.75 }}>
                  <span style={{ fontWeight: 600 }}>Examples:</span> {examples}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', paddingTop: showDetails ? '0' : '0.75rem', borderTop: showDetails ? 'none' : '1px solid var(--color-gray-200)', marginTop: showDetails ? 0 : '0.75rem' }}>
        <button className="btn btn-orange btn-sm" onClick={() => save('all')} style={{ flex: '1 1 auto', justifyContent: 'center' }}>
          Accept All Cookies
        </button>
        {showDetails ? (
          <button className="btn btn-primary btn-sm" onClick={() => save('custom')} style={{ flex: '1 1 auto', justifyContent: 'center' }}>
            Save My Preferences
          </button>
        ) : (
          <button className="btn btn-outline btn-sm" onClick={() => setShowDetails(true)} style={{ flex: '1 1 auto', justifyContent: 'center' }}>
            Manage Preferences
          </button>
        )}
        <button
          className="btn btn-sm"
          onClick={() => save('essential')}
          style={{ background: 'none', border: '1.5px solid var(--color-gray-200)', color: 'var(--color-gray-600)', flex: '1 1 auto', justifyContent: 'center' }}
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
