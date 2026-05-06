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

---

## Contact & Inquiry Form Emails (Resend)

Both the **Contact page form** and the **Get a Free Quote modal** send emails directly to `info@brightlinksuk.com` via [Resend](https://resend.com).

### Client setup (one-time)

1. Go to [resend.com](https://resend.com) and create a free account
2. **Verify your domain** — Resend → **Domains** → **Add Domain** → enter `brightlinksuk.com`
   - They will provide DNS records (TXT + MX) to add to your domain registrar
   - Once verified, emails send from `noreply@brightlinksuk.com`
3. **Create an API key** — Resend → **API Keys** → **Create API Key** → copy the key
4. **Add to Netlify** — Netlify dashboard → your site → **Site configuration** → **Environment variables** → **Add variable**:

| Key | Value |
|---|---|
| `RESEND_API_KEY` | Paste the API key from step 3 |

> Do **not** add `RESEND_TO_EMAIL` to Netlify — that variable is only used locally for testing and is intentionally absent from production.

### Free plan limits
- 3,000 emails/month — sufficient for a contact form
- No credit card required

### Local testing
Create a `.env.local` file in the project root (never commit this file):
```
RESEND_API_KEY=your_api_key_here
RESEND_TO_EMAIL=your_test_email@gmail.com
```
With `RESEND_TO_EMAIL` set, emails go to your test address and use Resend's sandbox sender so no domain verification is needed locally.

---

## Environment Variables

### Netlify (production & staging)

| Variable | Where to set | Description |
|---|---|---|
| `RESEND_API_KEY` | Netlify dashboard → Environment variables | Resend API key for sending form emails |
| `NEXT_PUBLIC_SITE_URL` | Already set in `netlify.toml` | Full site URL |
| `NEXT_PUBLIC_ENV` | Already set in `netlify.toml` | Controls staging banner + robots |

### Local development only (`.env.local` — never commit)

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `RESEND_TO_EMAIL` | Test recipient — overrides `info@brightlinksuk.com` locally |
