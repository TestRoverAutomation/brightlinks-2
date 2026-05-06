# BrightLinks UK — Website

Marketing website for BrightLinks UK, a managed IT services company based in London.

**Live site:** https://www.brightlinksuk.com
**Staging:** https://develop--brightlinksuk.netlify.app

---

## Tech Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS 4** with custom CSS variables
- **Lucide React** for icons
- **Netlify** for deployment, hosting, and forms

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # serve production build locally
npm run lint    # ESLint
```

---

## Project Structure

```
src/
├── app/                  # Pages (App Router)
│   ├── layout.tsx        # Root layout — Header, Footer, modals, SEO
│   ├── globals.css       # Design tokens + all reusable CSS classes
│   ├── page.tsx          # Homepage
│   ├── about/
│   ├── contact/
│   ├── services/
│   │   ├── page.tsx
│   │   ├── managed-services/
│   │   ├── cybersecurity/
│   │   ├── cloud-solutions/
│   │   ├── software/
│   │   └── hardware/
│   ├── solutions/
│   ├── privacy-policy/
│   ├── cookie-policy/
│   ├── robots.ts         # robots.txt generation
│   └── sitemap.ts        # sitemap.xml generation
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # Sticky nav, mega-menu, mobile drawer
│   │   └── Footer.tsx    # 4-column footer
│   ├── ui/
│   │   └── Logo.tsx      # SVG chain-link icon + wordmark
│   ├── InquiryModal.tsx  # "Get a Free Quote" modal
│   ├── CookieBanner.tsx  # GDPR cookie consent
│   ├── FloatingButtons.tsx
│   └── ServicePageTemplate.tsx  # Reusable layout for /services/* pages
└── lib/
    └── constants.ts      # All business data — SITE, SERVICES, STATS, etc.

public/
├── favicon.svg
└── netlify-forms.html    # Static form defs required by @netlify/plugin-nextjs@5
```

---

## The One File That Drives Everything

**`src/lib/constants.ts`** is the single source of truth for all content. Edit here and it updates across every page automatically.

| Export | What it controls |
|---|---|
| `SITE` | Company name, URL, email, phone, address |
| `NAV_SERVICES` | Services nav items (title, description, href, icon) |
| `NAV_SOLUTIONS` | Sector nav items |
| `SERVICES` | All 5 service pages — title, slug, features, image URL |
| `STATS` | 4 metrics on the homepage |
| `TESTIMONIALS` | 3 client quotes |

---

## Pages

| URL | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/services/managed-services` | `src/app/services/managed-services/page.tsx` |
| `/services/cybersecurity` | `src/app/services/cybersecurity/page.tsx` |
| `/services/cloud-solutions` | `src/app/services/cloud-solutions/page.tsx` |
| `/services/software` | `src/app/services/software/page.tsx` |
| `/services/hardware` | `src/app/services/hardware/page.tsx` |
| `/solutions` | `src/app/solutions/page.tsx` |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` |
| `/cookie-policy` | `src/app/cookie-policy/page.tsx` |

---

## Components

| Component | Purpose |
|---|---|
| `Header.tsx` | Sticky nav with top bar (address/phone/email), desktop mega-menu, mobile drawer |
| `Footer.tsx` | 4-column footer — logo, services, company links, contact info |
| `Logo.tsx` | Inline SVG chain-link icon + "BrightLinks United Kingdom" text. Props: `variant` (dark/light), `size` (sm/md/lg) |
| `InquiryModal.tsx` | "Get a Free Quote" modal. Opens on any element with `data-open-inquiry` attribute |
| `CookieBanner.tsx` | GDPR consent banner with 4 categories. Saves preference to `localStorage` |
| `FloatingButtons.tsx` | Persistent floating CTAs (phone/quote) |
| `ServicePageTemplate.tsx` | Shared page layout for all 5 `/services/*` pages |

---

## Global Styles (`src/app/globals.css`)

All design tokens are CSS variables at the top of the file.

**Colours**

| Variable | Value | Usage |
|---|---|---|
| `--color-navy` | `#1B2B6B` | Primary brand, headings, backgrounds |
| `--color-turquoise` | `#00A8CC` | Accent, links, highlights |
| `--color-orange` | `#FF6B2B` | CTAs, "UK" in logo |

**Reusable classes**

| Class | Description |
|---|---|
| `.btn` `.btn-primary` `.btn-orange` `.btn-outline` | Button variants |
| `.btn-sm` `.btn-lg` | Button sizes |
| `.section` | Standard section padding (5rem) |
| `.container` | Max-width 1280px, responsive padding |
| `.card` | Rounded card with hover lift |
| `.badge` `.badge-turquoise` `.badge-orange` | Label badges |
| `.form-label` `.form-input` | Form field styles |

---

## Common Tasks

| Task | Where |
|---|---|
| Change phone / address / email | `src/lib/constants.ts` → `SITE` object |
| Edit service content | `src/lib/constants.ts` → `SERVICES` array |
| Add a new service page | Add to `SERVICES` in constants + create `src/app/services/{slug}/page.tsx` |
| Change the logo | `src/components/ui/Logo.tsx` |
| Edit navigation | `src/components/layout/Header.tsx` or `constants.ts` |
| Change brand colours | `src/app/globals.css` CSS variables |
| Add a page | Create `src/app/{route}/page.tsx` |
| Update SEO metadata | Each `page.tsx` exports a `metadata` object |

---

## Deployment

Hosted on Netlify. Configured in `netlify.toml`.

| Branch | Environment | URL |
|---|---|---|
| `main` | Production | https://www.brightlinksuk.com |
| `develop` | Staging | https://develop--brightlinksuk.netlify.app |
| PR branches | Preview | Auto-generated Netlify URL |

**Deploy to production:**
```bash
git checkout main
git merge develop
git push origin main
```

### Netlify Forms

Forms use `@netlify/plugin-nextjs@5` which requires static form definitions. The forms are declared in `public/netlify-forms.html` (required — do not delete). React components submit via `fetch` POST with a hidden `form-name` field. Two forms are registered: `contact` and `inquiry`.

---

## Environment Variables

Set in Netlify dashboard or `.env.local` for local dev.

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Full site URL (e.g. `https://www.brightlinksuk.com`) |
| `NEXT_PUBLIC_ENV` | `production`, `staging`, or `preview` — controls staging banner + robots |
