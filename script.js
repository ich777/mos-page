(function () {
  // If the page is served via rewrite at e.g. "/mos" (without trailing slash),
  // relative assets like "./assets/..." may resolve to "/assets/..." and break.
  // Normalize to a trailing slash once.
  try {
    const p = window.location.pathname;
    const last = p.split('/').filter(Boolean).slice(-1)[0] || '';
    const looksLikeFile = last.includes('.');
    if (!looksLikeFile && !p.endsWith('/')) {
      window.location.replace(p + '/' + window.location.search + window.location.hash);
      return;
    }
  } catch {}

  const storageKey = 'mos-landing-theme';

  const base = (document.baseURI || window.location.href || '').endsWith('/')
    ? (document.baseURI || window.location.href)
    : (document.baseURI || window.location.href) + '/';

  const logos = {
    light: new URL('assets/mos-black.png', base).toString(),
    dark: new URL('assets/mos-white.png', base).toString(),
  };

  const dashboards = {
    light: new URL('assets/dashboard_light.png', base).toString(),
    dark: new URL('assets/dashboard_dark.png', base).toString(),
  };

  const favicons = {
    light: new URL('assets/mos-black_square.png', base).toString(),
    dark: new URL('assets/mos-white_square.png', base).toString(),
  };

  function getPreferredTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
    
    // Logo aktualisieren
    const logoEl = document.querySelector('[data-logo]');
    if (logoEl && logoEl instanceof HTMLImageElement) {
      const next = logos[theme] || logos.dark;
      // Set both to avoid odd caching behavior on some setups.
      logoEl.src = next;
      logoEl.srcset = next;
    }
    
    // Dashboard-Bilder aktualisieren
    document.querySelectorAll('[data-screenshot]').forEach(img => {
      if (img instanceof HTMLImageElement) {
        const next = dashboards[theme] || dashboards.dark;
        img.src = next;
        img.srcset = next;
      }
    });
    
    // Favicon aktualisieren
    const faviconEl = document.getElementById('favicon');
    const appleTouchIconEl = document.getElementById('apple-touch-icon');
    const nextFavicon = favicons[theme] || favicons.dark;
    if (faviconEl) {
      faviconEl.href = nextFavicon;
    }
    if (appleTouchIconEl) {
      appleTouchIconEl.href = nextFavicon;
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  function smoothScrollTo(hash) {
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Init
  applyTheme(getPreferredTheme());

  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // i18n initialisieren
  if (typeof initLanguage === 'function') {
    initLanguage();
  }

  function toggleLanguage() {
    const current = document.documentElement.getAttribute('lang') || 'de';
    if (typeof getNextLanguage === 'function' && typeof setLanguage === 'function') {
      const next = getNextLanguage(current);
      setLanguage(next);
    }
  }

  document.addEventListener('click', (e) => {
    const target = e.target instanceof Element ? e.target.closest('[data-action]') : null;
    if (!target) return;

    const action = target.getAttribute('data-action');

    if (action === 'toggle-theme') {
      e.preventDefault();
      toggleTheme();
      return;
    }

    if (action === 'toggle-language') {
      e.preventDefault();
      toggleLanguage();
      return;
    }

    if (action === 'scroll') {
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(href);
      }
      return;
    }

    if (action === 'open-app') {
      // Default: go to repo root (MOS app)
      // If you deploy this page elsewhere, change the href in index.html.
      return;
    }
  });
})();
