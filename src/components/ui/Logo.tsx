import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1B2B6B';

  const sizes = {
    sm: { icon: 32, text: 14, gap: 8 },
    md: { icon: 40, text: 17, gap: 10 },
    lg: { icon: 52, text: 22, gap: 12 },
  };

  const s = sizes[size];

  return (
    <Link
      href="/"
      aria-label="BrightLinks UK – Home"
      style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap, textDecoration: 'none' }}
    >
      {/* Chain link icon */}
      <svg
        width={s.icon}
        height={s.icon * 0.7}
        viewBox="0 0 56 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Left link – turquoise */}
        <rect x="1.5" y="5" width="30" height="28" rx="14" fill="none" stroke="#00A8CC" strokeWidth="3.5" />
        {/* Right link – orange, interlocked */}
        <rect x="24.5" y="5" width="30" height="28" rx="14" fill="white" stroke="#FF6B2B" strokeWidth="3.5" />
        {/* Overlap mask to create interlock effect */}
        <rect x="24.5" y="5" width="10" height="28" fill="white" />
        <rect x="24.5" y="8.5" width="10" height="21" fill="none" stroke="#00A8CC" strokeWidth="3.5" />
      </svg>

      {/* Wordmark */}
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontSize: s.text,
            fontWeight: 800,
            color: textColor,
            fontFamily: 'inherit',
            letterSpacing: '-0.02em',
          }}
        >
          Bright Links
        </span>
      </span>
    </Link>
  );
}
