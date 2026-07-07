# Maximus Kitchens — Website

## Tech Stack

- Plain HTML5 / CSS3 / vanilla JavaScript — no build step, no framework
- GSAP + ScrollTrigger (CDN) — scroll reveals, parallax
- Swiper.js (CDN) — sliders and the gallery lightbox

## File Structure

```
index.html            Home
contact.html          Contact / quote form
products.html         Products
door-styles.html      Door Styles
who-we-serve.html     Who We Serve
gallery.html          Gallery
about.html            About (includes How It Works + FAQ)

assets/css/style.css  All site styling
assets/js/main.js     All site JavaScript

logo/                 Logo files
sampleimages/         Product/lifestyle photos used across the site
```

Every page shares the same `<header>`, mobile drawer nav, and `<footer>` markup, and all link to the same `assets/css/style.css` and `assets/js/main.js`.

## Pages

**Home** (`index.html`) — Hero slideshow, trust bar, Why Maximus, Products overview, Door Styles gallery, How It Works (video), Repeat-Order Program, Who We Serve, Testimonials, FAQ, Contact/quote form, footer.

**Contact** (`contact.html`) — Page banner, trust strip, contact info + quote form, FAQ.

**Products** (`products.html`) — Page banner, spec strip, product categories grid, construction quality, popular styles teaser, quote form CTA.

**Door Styles** (`door-styles.html`) — Page banner, full style grid (8 styles), quote form CTA.

**Who We Serve** (`who-we-serve.html`) — Page banner, audience tabs (6 customer types), repeat-order program, quote form CTA.

**Gallery** (`gallery.html`) — Page banner, filterable image grid with a click-to-open swipeable lightbox.

**About** (`about.html`) — Page banner, our story, what we stand for (video), how it works (3-step), FAQ, quote form CTA.

## Notes

- The quote form (`#quoteForm`) is front-end only — validates and shows a success message, not connected to a backend or email service.
- Videos used in How It Works / FAQ / What We Stand For sections are placeholder stock footage.
- Homepage testimonials are placeholder quotes.
