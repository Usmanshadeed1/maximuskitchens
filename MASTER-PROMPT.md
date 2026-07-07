# Maximus Kitchens — Master Creative Brief
*Reference doc for building the Maximus Kitchens homepage (Concept 1 — "The Atelier", the only concept in scope). Read this before starting/resuming any section.*

---

## 1. Business Facts (source of truth — do not invent facts outside this list)

- **Company**: Maximus Kitchens — Wholesale Kitchen Cabinets
- **Location**: New Jersey, USA — **Service area**: Nationwide USA
- **Experience**: 20 years in the industry
- **Phone**: +1 917-282-1854
- **Email**: maximuskitchens1@gmail.com
- **Products**: RTA (Ready-to-Assemble) Cabinets, Pre-Assembled Cabinets, other popular cabinet styles
- **Door styles**: Shaker, Raised Panel, Inset, Slab, Transitional, Modern, Traditional
- **Construction**: Solid wood cabinet doors, 1/2" plywood boxes
- **Target customers**: Contractors, Remodelers, Home Builders, House Flippers, Interior Designers, Homeowners
- **USPs**:
  - Better quality at fair prices
  - Wholesale pricing
  - Nationwide delivery
  - Free 3D kitchen layout on every order
  - Sample doors available
  - 20 years industry experience
- **Primary conversion goals**: Phone calls, consultation bookings, quote requests
- **Quote process**: Send cabinet list / floor plan / layout / room measurements → detailed proposal back within 24 hours; virtual consultation available
- **Shipping**: RTA lines as fast as 3 business days; assembled cabinets typically 2–3 weeks
- **Repeat-customer incentive**: Order again within 90 days → up to 10% discount on the new order, PLUS up to 10% rebate on the original order
- **Reference/competitor brands reviewed**: fabuwood.com, proselectdesign.com, uscabinetdepot.com, cnccabinetry.com, jsicabinetry.com, woodconcept.com

## 2. Assets (in project folder)

- `logo/transpaent blue text logo.png` — transparent background logo (use on light AND on white cards)
- `logo/white bg blue text.png` — white background version
- `sampleimages/` — ~28 real product/lifestyle images. Filenames double as **collection names** to use verbatim in the Featured Collections gallery: Allure (Galaxy/Fusion/Luxe variants), Echo (Timber & Dove / Timber Dove & Indigo), Illume (Catalina/Tuscany), Luna (Truffle), Dover (Saddle, with Royal Island), Cunningham (White), Hamilton (Walnut), Monroe (Cream Glaze), Augusta (1800), Luxor, Espresso Shaker, Jansen (Frost), SW Capital Series, plus generic RTA/3D-layout marketing images.
- No video assets yet — build video-ready hero markup but use image/poster fallback.

## 3. Color System

| Token | Hex | Usage |
|---|---|---|
| Navy | `#081E44` | Header/nav, footer, dark section backgrounds, primary headings, primary button fill |
| Indigo | `#5D66F0` | Hover states, links, accent highlights, secondary CTAs, small decorative accents — **verify WCAG AA contrast before using as body text or white-on-indigo button text; prefer navy for solid buttons, indigo for outline/hover/accent** |
| Warm white | `#FFF6FA` | Alternate section backgrounds instead of stark white, adds warmth |
| White / Black | — | Base text, cards, structure |

## 4. Tech Stack

- Plain HTML5 / CSS3 (custom properties for the palette) / vanilla JS — no build step, no framework
- **GSAP + ScrollTrigger** (CDN) — scroll reveals, parallax, counters
- **Swiper.js** (CDN) — image/testimonial sliders
- Forms: front-end only for now (validation + success state), no backend wiring yet
- Accessibility: semantic landmarks, alt text on every image, visible focus states, full keyboard nav, WCAG AA contrast
- Mobile-first responsive, fully cross-device

## 5. Section Journey (as built, in `index.html`)

1. ✅ Hero (slideshow, headline, CTA, stat counters)
2. ✅ Trust bar / stats (20 yrs, nationwide, mobile card-swipe)
3. ✅ Why Maximus / USPs (split-screen, checklist)
4. ✅ Products overview (RTA, Pre-Assembled, Styles — dark divider-line slider)
5. ✅ Door styles gallery (flat edge-to-edge photo slider)
6. ✅ How It Works / process — built as an autoplaying video showcase section (dark, no slider); also carries the "free 3D layout" messaging, so no separate Featured Collections or 3D Layout CTA section was built
7. ✅ Who We Serve (contractors, designers, flippers, builders, homeowners — text-list with hover/tap image reveal)
8. ✅ Testimonials / social proof (dual-row marquee, placeholder quotes — needs real reviews)
9. ✅ FAQ (accordion, two-column with video)
10. ✅ Final CTA + quote form (full-bleed image, contact info + form)
11. ✅ Footer

**Note**: the original plan listed Featured Collections, a separate Repeat-Order Incentive Banner, and a separate Free 3D Layout CTA as their own sections. Per user decision, Featured Collections was dropped (avoiding a third slider on the page), and the repeat-order offer / 3D layout messaging were folded into existing sections instead of getting dedicated banners. Revisit only if the client wants those offers called out more prominently.

## 6. The Concept

**Concept 1 — "The Atelier" (Luxury Designer)** is the only concept in scope — the client approved it and does not want Concepts 2 or 3 built.

Editorial/magazine style. Full-bleed hero photography, split-screen sections (image | text), generous whitespace, bold display sans (Manrope) + clean sans body (Inter), slow scroll-reveals, subtle parallax. Audience: designers/homeowners wanting bespoke high-end cabinetry.

## 7. Competitor Research Takeaways

**Adopt**: construction-quality visualization (cutaway/exploded cabinet diagram), collection comparison table, dual-path nav for contractor vs homeowner, real filters (finish/style/species/price) not static tabs, lifestyle photography for hero + product-forward cards w/ finish thumbnails for catalog, a simple "pick style + finish" visualizer as a nav-level feature, persistent "Get a Quote"/"Become a Dealer" CTA in header.

**Avoid**: duplicated/legacy-feeling nav blocks, flat text-link CTAs instead of styled buttons, curated-only catalogs with no full grid, treating trade/dealer content as an afterthought, generic stock photography with no construction storytelling.

## 8. Process

- `index.html` (the homepage) is done and **not being changed** — it stays a single long-scroll page with its own condensed Door Styles / Who We Serve / FAQ / Contact sections.
- The site is now expanding into a **real multi-page site**. Every other page is a separate static HTML file at the project root, sharing `assets/css/style.css` and `assets/js/main.js` (extend these shared files rather than duplicating CSS/JS per page, unless a page needs something truly page-specific).
- Build **one page at a time, one section at a time within it** — same working style as the homepage build.
- Content per section written fresh (SEO copywriter voice) using only facts from §1 — user reviews/edits each section as we go.
- Git pushes/deploys are handled by the user themselves via their editor extension — do not push unless explicitly asked.

## 9. Multi-Page Site Map

Header nav = footer nav (7 links, logo = Home). How It Works and FAQ do **not** get standalone pages — their content is folded into `about.html` as sections instead, since it would otherwise mostly duplicate what already exists on the homepage.

| Page | File | In nav | Status |
|---|---|---|---|
| Home | `index.html` | header + footer | ✅ Done |
| Contact / Get a Quote | `contact.html` | header + footer | ✅ Done |
| Products | `products.html` | header + footer | ✅ Done |
| Door Styles | `door-styles.html` | header + footer | ✅ Done |
| Who We Serve | `who-we-serve.html` | header + footer | ✅ Done |
| Gallery | `gallery.html` | header + footer | ✅ Done |
| About (includes How It Works + FAQ sections) | `about.html` | header + footer | ⬜ In progress |

**Build order** (agreed): Contact → Products → Door Styles → Who We Serve → Gallery → About. Contact was first because every CTA site-wide already linked to `contact.html` — building it first removed the only 404 reachable from the live site at that time.

**About page section plan**: Page Banner → Our Story (new copy) → Why Maximus (reused verbatim from `index.html`) → How It Works (merged in, adapted from the homepage's video-showcase section) → FAQ (merged in, broadened beyond Contact's quote-specific questions) → Final CTA (reused `.contact-cta`).

**Per-page checklist**: reuse the homepage's design language exactly (navy/indigo/warm-white, Manrope/Inter, `.container` max-width pattern, GSAP scroll-reveal, card/section patterns already validated) — these are new pages, not a new design system. Each new page needs the same `<header>` + mobile drawer markup as `index.html`, and its own hero/intro section establishing what the page is before going into detail sections.
