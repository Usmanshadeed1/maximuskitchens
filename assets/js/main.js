  gsap.registerPlugin(ScrollTrigger);

  // Header background swap on scroll
  const header = document.getElementById('siteHeader');
  const toggleHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  toggleHeader();
  window.addEventListener('scroll', toggleHeader, { passive:true });

  // Mobile drawer menu — slides in from the left with an overlay
  const menuToggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer(){
    drawerOverlay.hidden = false;
    // reflow so the "hidden -> visible" change is settled before the opacity/transform transition starts
    void drawerOverlay.offsetWidth;
    drawer.classList.add('is-open');
    drawerOverlay.classList.add('is-open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
    drawerClose.focus();
  }

  function closeDrawer(){
    drawer.classList.remove('is-open');
    drawerOverlay.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    menuToggle.focus();
    window.setTimeout(() => { drawerOverlay.hidden = true; }, 350);
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    isOpen ? closeDrawer() : openDrawer();
  });
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Page banner entrance (inner pages — harmless no-op on pages without one)
  if (!reduceMotion && document.querySelector('.page-banner')) {
    gsap.timeline({ defaults:{ ease:'power3.out' } })
      .from('.breadcrumb', { opacity:0, y:12, duration:.6 })
      .from('.page-banner-title', { opacity:0, y:22, duration:.8 }, '-=.35')
      .from('.page-banner-lead', { opacity:0, y:16, duration:.7 }, '-=.5');
  }

  if (!reduceMotion && document.querySelector('.contact-trust')) {
    gsap.from('.contact-trust-item', {
      opacity:0, y:18, duration:.6, ease:'power3.out', stagger:.1,
      scrollTrigger:{ trigger:'.contact-trust', start:'top 88%' }
    });
  }

  if (!reduceMotion && document.querySelector('.contact-main')) {
    gsap.from('.contact-main-info > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.contact-main', start:'top 80%' }
    });
    gsap.from('.contact-main-form', {
      opacity:0, y:26, duration:.7, ease:'power3.out',
      scrollTrigger:{ trigger:'.contact-main', start:'top 80%' }
    });
  }

  if (!reduceMotion && document.querySelector('.about-process')) {
    gsap.from('.about-process-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.about-process', start:'top 78%' }
    });
    gsap.from('.about-process-step', {
      opacity:0, y:24, duration:.6, ease:'power3.out', stagger:.12,
      scrollTrigger:{ trigger:'.about-process-steps', start:'top 82%' }
    });
  }

  if (!reduceMotion && document.querySelector('.why-us') && !document.querySelector('.hero-slide')) {
    gsap.from('.why-us .section-eyebrow, .why-us .section-heading, .why-us .section-lead', {
      opacity:0, y:24, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.why-us', start:'top 75%' }
    });
    gsap.from('.why-us-points li', {
      opacity:0, y:16, duration:.5, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.why-us-points', start:'top 85%' }
    });
    gsap.from('.why-us .btn', {
      opacity:0, y:16, duration:.6, ease:'power3.out',
      scrollTrigger:{ trigger:'.why-us .btn', start:'top 90%' }
    });
    gsap.to('.why-us-media img, .why-us-media video', {
      yPercent:10, ease:'none',
      scrollTrigger:{ trigger:'.why-us', start:'top bottom', end:'bottom top', scrub:true }
    });
  }

  if (!reduceMotion && document.querySelector('.contact-cta') && !document.querySelector('.hero-slide')) {
    gsap.from('.contact-cta-info > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.contact-cta', start:'top 78%' }
    });
    gsap.from('.contact-cta-form', {
      opacity:0, y:28, duration:.7, ease:'power3.out',
      scrollTrigger:{ trigger:'.contact-cta', start:'top 78%' }
    });
  }

  if (!reduceMotion && document.querySelector('.product-categories')) {
    gsap.from('.product-categories .products-index, .product-categories .products-title, .product-categories .products-lead', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.product-categories', start:'top 78%' }
    });
    gsap.from('.product-cat-card', {
      opacity:0, y:24, duration:.7, ease:'power3.out', stagger:.12,
      scrollTrigger:{ trigger:'.product-cat-grid', start:'top 82%' }
    });
  }

  if (!reduceMotion && document.querySelector('.style-teaser')) {
    gsap.from('.style-teaser-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.style-teaser', start:'top 78%' }
    });
    gsap.from('.style-teaser-item', {
      opacity:0, y:20, duration:.6, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.style-teaser-grid', start:'top 85%' }
    });
    gsap.from('.style-teaser-cta', {
      opacity:0, y:16, duration:.6, ease:'power3.out',
      scrollTrigger:{ trigger:'.style-teaser-cta', start:'top 92%' }
    });
  }

  if (!reduceMotion && document.querySelector('.style-grid-section')) {
    gsap.from('.style-grid-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.style-grid-section', start:'top 78%' }
    });
    gsap.from('.style-grid-item', {
      opacity:0, y:12, duration:.4, ease:'power2.out', stagger:.04,
      scrollTrigger:{ trigger:'.style-grid', start:'top 85%' }
    });
  }

  if (!reduceMotion && document.querySelector('.audience-selector')) {
    gsap.from('.audience-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.audience-selector', start:'top 78%' }
    });
    gsap.from('.audience-tab', {
      opacity:0, y:14, duration:.5, ease:'power3.out', stagger:.05,
      scrollTrigger:{ trigger:'.audience-tabs', start:'top 85%' }
    });
  }

  if (!reduceMotion && document.querySelector('.gallery-grid-section')) {
    gsap.from('.gallery-filter', {
      opacity:0, y:12, duration:.5, ease:'power2.out', stagger:.03,
      scrollTrigger:{ trigger:'.gallery-filters', start:'top 85%' }
    });
    gsap.from('.gallery-item', {
      opacity:0, y:20, duration:.5, ease:'power2.out', stagger:.04,
      scrollTrigger:{ trigger:'.gallery-grid', start:'top 88%' }
    });
  }

  if (!reduceMotion && document.querySelector('.about-story')) {
    gsap.from('.about-story-inner .section-eyebrow, .about-story-inner .section-heading, .about-story-inner .section-lead', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.about-story', start:'top 78%' }
    });
    gsap.from('.about-story-stat', {
      opacity:0, y:18, duration:.6, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.about-story-stats', start:'top 88%' }
    });
  }

  if (!reduceMotion && document.querySelector('.repeat-program')) {
    gsap.from('.repeat-program-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.repeat-program', start:'top 78%' }
    });
    gsap.from('.repeat-stat', {
      opacity:0, y:20, duration:.6, ease:'power3.out', stagger:.12,
      scrollTrigger:{ trigger:'.repeat-program-stats', start:'top 82%' }
    });
  }

  if (!reduceMotion && document.querySelector('.faq') && !document.querySelector('.hero-slide')) {
    gsap.from('.faq .section-eyebrow, .faq .section-heading', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.faq', start:'top 78%' }
    });
    gsap.from('.faq .faq-item', {
      opacity:0, y:16, duration:.5, ease:'power3.out', stagger:.06,
      scrollTrigger:{ trigger:'.faq .faq-list', start:'top 85%' }
    });
    gsap.from('.faq .faq-media', {
      opacity:0, scale:.96, duration:.8, ease:'power3.out',
      scrollTrigger:{ trigger:'.faq', start:'top 75%' }
    });
  }

  if (!reduceMotion && document.querySelector('.contact-faq')) {
    gsap.from('.contact-faq .section-eyebrow, .contact-faq .section-heading', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.contact-faq', start:'top 78%' }
    });
    gsap.from('.contact-faq .faq-item', {
      opacity:0, y:16, duration:.5, ease:'power3.out', stagger:.06,
      scrollTrigger:{ trigger:'.contact-faq .faq-list', start:'top 85%' }
    });
    gsap.from('.contact-faq .faq-media', {
      opacity:0, scale:.96, duration:.8, ease:'power3.out',
      scrollTrigger:{ trigger:'.contact-faq', start:'top 75%' }
    });
  }

  // Hero slideshow — simple crossfade: old slide fades out while the new
  // one fades in at the same time (plain CSS opacity transition, no
  // z-index juggling or load-timing logic needed since all 5 images
  // load eagerly up front and are ready well before they're needed).
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slide-dot');
  const kbVariants = ['kb-in', 'kb-pan-r', 'kb-out', 'kb-pan-l', 'kb-in'];
  let activeSlide = 0;
  const SLIDE_DURATION = 6500;
  let slideTimer;

  function showSlide(index){
    const img = slides[index].querySelector('img');
    img.classList.remove('kb-in', 'kb-out', 'kb-pan-l', 'kb-pan-r');
    if (!reduceMotion) {
      void img.offsetWidth;
      img.classList.add(kbVariants[index % kbVariants.length]);
    }

    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    activeSlide = index;
  }

  function nextSlide(){ showSlide((activeSlide + 1) % slides.length); }

  // Slide 0 is already visible from the HTML itself (no fade-in on load —
  // that fade was exactly what caused the navy background to flash through
  // at the start). JS only takes over for slide changes after this point.
  if (!reduceMotion && slides.length > 1) {
    slideTimer = setInterval(nextSlide, SLIDE_DURATION);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideTimer);
      showSlide(i);
      if (!reduceMotion) slideTimer = setInterval(nextSlide, SLIDE_DURATION);
    });
  });

  if (!reduceMotion && document.querySelector('.hero-slide')) {
    // Hero entrance
    gsap.timeline({ defaults:{ ease:'power3.out' } })
      .from('.hero-eyebrow', { opacity:0, y:16, duration:.7, delay:.2 })
      .from('.hero-headline', { opacity:0, y:28, duration:.9 }, '-=.4')
      .from('.hero-sub', { opacity:0, y:20, duration:.8 }, '-=.6')
      .from('.hero-actions .btn', { opacity:0, y:16, duration:.6, stagger:.12 }, '-=.5')
      .from('.hero-meta-item', { opacity:0, y:14, duration:.6, stagger:.1 }, '-=.4');

    // Animated stat counters
    document.querySelectorAll('.hero-meta-item strong').forEach(el => {
      const raw = el.textContent.trim();
      const match = raw.match(/\d+/);
      if(!match) return;
      const num = parseInt(match[0], 10);
      const suffix = raw.replace(match[0], '');
      const counter = { val:0 };
      gsap.to(counter, {
        val:num, duration:1.6, ease:'power2.out', delay:1.1,
        onUpdate:() => el.textContent = Math.floor(counter.val) + suffix
      });
    });

    // Trust bar — staggered fade-up as it enters the viewport
    gsap.from('.trust-item', {
      opacity:0, y:24, duration:.7, ease:'power3.out', stagger:.1,
      scrollTrigger:{ trigger:'.trust-bar', start:'top 85%' }
    });

    // Why Maximus — content fades up, USP rows stagger in, image gets a slow parallax drift
    gsap.from('.why-us .section-eyebrow, .why-us .section-heading, .why-us .section-lead', {
      opacity:0, y:24, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.why-us', start:'top 75%' }
    });
    gsap.from('.why-us-points li', {
      opacity:0, y:16, duration:.5, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.why-us-points', start:'top 85%' }
    });
    gsap.from('.why-us .btn', {
      opacity:0, y:16, duration:.6, ease:'power3.out',
      scrollTrigger:{ trigger:'.why-us .btn', start:'top 90%' }
    });
    gsap.to('.why-us-media img', {
      yPercent:10, ease:'none',
      scrollTrigger:{ trigger:'.why-us', start:'top bottom', end:'bottom top', scrub:true }
    });

    // Products — heading fades up, then each image reveals with a clip-path
    // wipe (like a curtain lifting) while its text staggers in underneath
    gsap.from('.products-index, .products-title, .products-lead, .products-nav', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.products', start:'top 75%' }
    });
    gsap.from('.product-card-media', {
      clipPath:'inset(100% 0% 0% 0%)', duration:1, ease:'power3.out', stagger:.15,
      clearProps:'clipPath',
      scrollTrigger:{ trigger:'.products-swiper', start:'top 82%' }
    });
    // clearProps removes GSAP's inline transform once the reveal finishes —
    // otherwise that inline style outranks the CSS :hover zoom and hover does nothing.
    gsap.from('.product-card-media img', {
      scale:1.25, duration:1.2, ease:'power3.out', stagger:.15,
      clearProps:'transform',
      scrollTrigger:{ trigger:'.products-swiper', start:'top 82%' }
    });
    gsap.from('.product-card h3, .product-card p, .product-card-link', {
      opacity:0, y:16, duration:.6, ease:'power3.out', stagger:.06,
      scrollTrigger:{ trigger:'.products-swiper', start:'top 75%' }
    });
  }

  // Products slider — 3 visible on desktop, 1 (peeking 2nd) on mobile, loops infinitely
  if (window.Swiper && document.querySelector('.products-swiper')) {
    new Swiper('.products-swiper', {
      loop:true,
      slidesPerView:1.15,
      spaceBetween:0,
      speed:600,
      navigation:{ nextEl:'.products-next', prevEl:'.products-prev' },
      breakpoints:{
        700:{ slidesPerView:2 },
        1020:{ slidesPerView:3 }
      }
    });
  }

  // Door Styles — flat, edge-to-edge photo gallery slider
  if (window.Swiper && document.querySelector('.door-styles-swiper')) {
    new Swiper('.door-styles-swiper', {
      grabCursor:true,
      loop:true,
      spaceBetween:0,
      slidesPerView:1.15,
      navigation:{ nextEl:'.door-styles-next', prevEl:'.door-styles-prev' },
      breakpoints:{
        700:{ slidesPerView:2 },
        1020:{ slidesPerView:3 }
      }
    });
  }

  if (!reduceMotion && document.querySelector('.hero-slide')) {
    gsap.from('.door-styles-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.door-styles', start:'top 78%' }
    });

    gsap.from('.process-video-content > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.process-video', start:'top 75%' }
    });
    gsap.from('.process-video-media', {
      opacity:0, scale:.96, duration:.8, ease:'power3.out',
      scrollTrigger:{ trigger:'.process-video', start:'top 75%' }
    });

    gsap.from('.home-repeat-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.home-repeat', start:'top 78%' }
    });
    gsap.from('.home-repeat-card', {
      opacity:0, y:24, duration:.6, ease:'power3.out', stagger:.12,
      scrollTrigger:{ trigger:'.home-repeat-cards', start:'top 82%' }
    });

    gsap.from('.serve-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.who-we-serve', start:'top 78%' }
    });
    gsap.from('.serve-item', {
      opacity:0, y:16, duration:.5, ease:'power3.out', stagger:.07,
      scrollTrigger:{ trigger:'.serve-list', start:'top 85%' }
    });

    gsap.from('.testimonials-head > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.testimonials', start:'top 78%' }
    });
    gsap.from('.faq .section-eyebrow, .faq .section-heading', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.faq', start:'top 78%' }
    });
    gsap.from('.faq-item', {
      opacity:0, y:16, duration:.5, ease:'power3.out', stagger:.06,
      scrollTrigger:{ trigger:'.faq-list', start:'top 85%' }
    });
    gsap.from('.faq-media', {
      opacity:0, scale:.96, duration:.8, ease:'power3.out',
      scrollTrigger:{ trigger:'.faq', start:'top 75%' }
    });

    gsap.from('.contact-cta-info > *', {
      opacity:0, y:22, duration:.7, ease:'power3.out', stagger:.08,
      scrollTrigger:{ trigger:'.contact-cta', start:'top 78%' }
    });
    gsap.from('.contact-cta-form', {
      opacity:0, y:28, duration:.7, ease:'power3.out',
      scrollTrigger:{ trigger:'.contact-cta', start:'top 78%' }
    });
  }

  // Quote form — front-end only for now (no backend wired up yet)
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }
      quoteForm.querySelector('.form-success').hidden = false;
      quoteForm.querySelectorAll('input, textarea').forEach(field => { field.value = ''; });
    });
  }

  // Gallery — filter pills toggle which grid items show
  const galleryFilters = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilters.forEach(b => b.classList.toggle('is-active', b === btn));
      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.getAttribute('data-category') === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });

  // Gallery lightbox — clicking a grid image opens a Swiper gallery scoped
  // to ONLY that image's style (not the full 22-image set), built fresh
  // from the grid each time so there's a single source of truth for the
  // image list — no separate hardcoded slide markup to keep in sync.
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxWrapper = document.querySelector('.lightbox-swiper .swiper-wrapper');
  if (lightbox && galleryItems.length && lightboxWrapper) {
    let gallerySwiper;

    function openLightbox(clickedItem){
      const category = clickedItem.getAttribute('data-category');
      const categoryItems = [...galleryItems].filter(item => item.getAttribute('data-category') === category);
      const startIndex = categoryItems.indexOf(clickedItem);

      lightboxWrapper.innerHTML = categoryItems.map(item => {
        const img = item.querySelector('img');
        return `<div class="swiper-slide"><img src="${img.getAttribute('src')}" alt="${img.getAttribute('alt')}"></div>`;
      }).join('');

      if (gallerySwiper) gallerySwiper.destroy(true, true);
      if (window.Swiper) {
        gallerySwiper = new Swiper('.lightbox-swiper', {
          loop: categoryItems.length > 2,
          initialSlide: startIndex,
          navigation:{ nextEl:'.lightbox-next', prevEl:'.lightbox-prev' },
          keyboard:{ enabled:true }
        });
      }

      if (lightboxCaption) {
        const labelEl = clickedItem.querySelector('.gallery-item-label');
        lightboxCaption.textContent = labelEl ? labelEl.textContent : '';
      }

      lightbox.hidden = false;
      void lightbox.offsetWidth;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('drawer-open');
      lightboxClose.focus();
    }

    function closeLightbox(){
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('drawer-open');
      window.setTimeout(() => { lightbox.hidden = true; }, 350);
    }

    galleryItems.forEach(item => {
      item.addEventListener('click', () => openLightbox(item));
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }

  // Audience selector (Who We Serve) — click a tab, swap the visible panel
  const audienceTabs = document.querySelectorAll('.audience-tab');
  const audiencePanels = document.querySelectorAll('.audience-panel');
  if (audienceTabs.length) {
    audienceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        audienceTabs.forEach(t => {
          t.classList.toggle('is-active', t === tab);
          t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
        });
        audiencePanels.forEach(p => p.classList.toggle('is-active', p.getAttribute('data-panel') === target));
      });
    });
  }

  // FAQ accordion — one open at a time
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(open => {
        open.classList.remove('is-open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Who We Serve — hovering a row crossfades the image panel beside the list.
  // Two stacked <img> layers swap which is on top; the outgoing image stays
  // visible until the incoming one has actually loaded, so there's never a
  // blank/white flash mid-transition — images are also preloaded up front.
  const serveItems = document.querySelectorAll('.serve-item');
  const serveVisualImgs = document.querySelectorAll('.serve-visual-img');
  if (serveItems.length && serveVisualImgs.length === 2) {
    let serveActiveSrc = serveVisualImgs[0].getAttribute('src');
    const preloaded = {};

    // Preload every hover image now so later swaps are instant.
    serveItems.forEach(item => {
      const src = item.getAttribute('data-image');
      if (!src || preloaded[src]) return;
      preloaded[src] = new Image();
      preloaded[src].src = src;
    });

    serveItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const src = item.getAttribute('data-image');
        if (!src || src === serveActiveSrc) return;
        serveActiveSrc = src;

        const current = [...serveVisualImgs].find(img => img.classList.contains('is-active'));
        const next = [...serveVisualImgs].find(img => img !== current);

        const activateNext = () => {
          next.classList.add('is-active');
          if (current) current.classList.remove('is-active');
        };

        if (preloaded[src] && preloaded[src].complete) {
          next.src = src;
          activateNext();
        } else {
          next.src = src;
          next.onload = activateNext;
        }
      });
    });
  }

  // Respect reduced-motion: don't force an autoplaying video on users who've
  // asked for less motion — pause it and let them start it manually instead.
  const processVideo = document.querySelector('.process-video-media video');
  if (processVideo && reduceMotion) {
    processVideo.removeAttribute('autoplay');
    processVideo.pause();
    processVideo.setAttribute('controls', '');
  }
  const whyUsVideo = document.querySelector('.why-us-media video');
  if (whyUsVideo && reduceMotion) {
    whyUsVideo.removeAttribute('autoplay');
    whyUsVideo.pause();
    whyUsVideo.setAttribute('controls', '');
  }
  const faqVideo = document.querySelector('.faq-media video');
  if (faqVideo && reduceMotion) {
    faqVideo.removeAttribute('autoplay');
    faqVideo.pause();
    faqVideo.setAttribute('controls', '');
  }
