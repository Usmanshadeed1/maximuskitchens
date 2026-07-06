# Maximus Kitchens — Master Creative Brief
*Reference doc for building 3 homepage design concepts. Read this before starting/resuming any section.*

---

## 1. Business Facts (source of truth — do not invent facts outside this list)

- **Company**: Maximus Kitchens — Wholesale Kitchen Cabinets
- **Location**: New Jersey, USA — **Service area**: Nationwide USA
- **Experience**: 20 years in the industry
- **Phone**: +1 917-282-1854
- **Email**: maximuskitchensnj@gmail.com
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

## 4. Tech Stack (all 3 concepts)

- Plain HTML5 / CSS3 (custom properties for the palette) / vanilla JS — no build step, no framework
- **GSAP + ScrollTrigger** (CDN) — scroll reveals, parallax, counters
- **Swiper.js** (CDN) — image/testimonial sliders
- Forms: front-end only for now (validation + success state), no backend wiring yet
- Accessibility: semantic landmarks, alt text on every image, visible focus states, full keyboard nav, WCAG AA contrast
- Mobile-first responsive, fully cross-device

## 5. Shared Section Journey (all 3 concepts, content emphasis differs by tone)

1. Hero (headline + CTA + visual)
2. Trust bar / stats (20 yrs, nationwide, stats)
3. Why Maximus / USPs
4. Products overview (RTA, Pre-Assembled, Styles)
5. Door styles gallery (Shaker, Slab, Raised Panel, Inset, Transitional, Modern, Traditional)
6. Featured Collections (real sample images, named per file above)
7. How It Works / process (send list → 24-hr proposal → optional virtual consult)
8. Who We Serve (contractors, designers, flippers, builders, homeowners)
9. Testimonials / social proof
10. Repeat-order incentive banner (10% discount + 10% rebate, 90 days)
11. Free 3D Kitchen Layout CTA
12. FAQ
13. Final CTA + quote form
14. Footer

## 6. The 3 Concepts

### Concept 1 — "The Atelier" (Luxury Designer)
Editorial/magazine style. Full-bleed hero photography, split-screen sections (image | text), generous whitespace, serif display type + clean sans body, slow scroll-reveals, subtle parallax. Audience: designers/homeowners wanting bespoke high-end cabinetry.

### Concept 2 — "The Trade Standard" (Contractor/Wholesale-First)
Bold, fast, data-forward. Grid-driven layout, comparison tables (door styles × construction specs), stat counters, dual-path nav ("For Contractors" / "For Homeowners") in the hero itself. Built to convert bulk/repeat B2B buyers fast.

### Concept 3 — "Modern Showroom" (Cinematic/Dark Luxury)
Dark navy-dominant background, oversized bold type, asymmetric grid, cinematic scroll-triggered reveals, hero video-ready, cursor micro-interactions. Most dramatic, most "million-dollar at first glance."

## 7. Competitor Research Takeaways

**Adopt**: construction-quality visualization (cutaway/exploded cabinet diagram), collection comparison table, dual-path nav for contractor vs homeowner, real filters (finish/style/species/price) not static tabs, lifestyle photography for hero + product-forward cards w/ finish thumbnails for catalog, a simple "pick style + finish" visualizer as a nav-level feature, persistent "Get a Quote"/"Become a Dealer" CTA in header.

**Avoid**: duplicated/legacy-feeling nav blocks, flat text-link CTAs instead of styled buttons, curated-only catalogs with no full grid, treating trade/dealer content as an afterthought, generic stock photography with no construction storytelling.

## 8. Process

- Build **one concept fully at a time**, **one section at a time** within it, as separate self-contained HTML files (e.g. `concept-1-atelier.html`, `concept-2-trade-standard.html`, `concept-3-modern-showroom.html`)
- Content per section written fresh (SEO copywriter voice) using only facts from §1 — user reviews/edits each section as we go
- Order of build: Concept 1 → review → Concept 2 → review → Concept 3 → review
