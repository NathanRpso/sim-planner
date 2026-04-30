<template>
  <section class="hero">
    <div class="hero-overlay" />

    <div class="hero-content">
      <!-- Rapsodo Golf brand mark -->
      <div class="hero-brand">
        <svg class="hero-rmark" viewBox="0 0 43.108 47.646" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 13.613 0 L 0 0 L 0 2.269 L 13.613 2.269 L 13.613 0 Z M 13.613 45.377 L 0 45.377 L 0 47.646 L 13.613 47.646 L 13.613 45.377 Z M 4.538 9.075 L 13.613 9.075 L 13.613 11.344 L 4.538 11.344 L 4.538 9.075 Z M 13.613 31.763 L 4.538 31.763 L 4.538 34.032 L 13.613 34.032 L 13.613 31.763 Z M 0 22.689 L 13.613 22.689 L 13.613 24.957 L 0 24.957 L 0 22.689 Z M 13.613 4.537 L 4.538 4.537 L 4.538 6.806 L 13.613 6.806 L 13.613 4.537 Z M 4.538 27.226 L 13.613 27.226 L 13.613 29.495 L 4.538 29.495 L 4.538 27.226 Z M 13.613 13.612 L 4.538 13.612 L 4.538 15.881 L 13.613 15.881 L 13.613 13.612 Z M 4.538 36.301 L 13.613 36.301 L 13.613 38.57 L 4.538 38.57 L 4.538 36.301 Z M 13.613 18.151 L 4.538 18.151 L 4.538 20.42 L 13.613 20.42 L 13.613 18.151 Z M 4.538 40.838 L 13.613 40.838 L 13.613 43.107 L 4.538 43.107 L 4.538 40.838 Z M 22.736 0 L 15.882 0 L 15.882 9.075 L 18.151 9.075 C 24.957 9.075 26.091 12.702 26.091 15.434 C 26.091 18.167 23.823 21.554 18.151 21.554 L 15.882 21.554 L 15.882 29.495 L 27.226 47.645 L 43.108 47.645 L 28.105 28.153 C 30.965 27.514 32.53 26.731 34.176 25.293 C 36.892 22.944 38.57 19.285 38.57 14.715 C 38.57 9.091 35.167 0 22.736 0 Z" fill-rule="nonzero"/>
        </svg>
        <span class="hero-brand-name">Rapsodo</span>
        <span class="hero-brand-sport">Golf</span>
      </div>

      <h1 class="hero-headline">
        Design your<br />
        <span class="accent">perfect sim room</span>
      </h1>

      <p class="hero-desc">
        Enter your room dimensions and get a real-time 3D layout — screen sizing,
        projector placement, and hitting position. Takes under 2 minutes.
      </p>

      <div class="hero-actions">
        <a href="#configurator" class="hero-btn-primary" @click.prevent="scrollDown">
          Configure My Space
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollDown() {
      const el = document.getElementById('configurator')
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY - 112
      window.scrollTo({ top, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #0a0a0a url('/golf-sim-hero.jpg') center / cover no-repeat;
  display: flex;
  align-items: center;
  padding-top: 112px; /* clear fixed navbar */
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.48) 52%, rgba(0,0,0,0.08) 100%),
    linear-gradient(to top,   rgba(0,0,0,0.60) 0%, rgba(0,0,0,0)    50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  left: 64px;
  max-width: 560px;
  color: #fff;
}

/* ── Brand mark ── */
.hero-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  color: #fff;
}
.hero-rmark {
  height: 28px;
  width: auto;
  display: block;
}
.hero-brand-name {
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: #fff;
  line-height: 1;
}
.hero-brand-sport {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  line-height: 1;
  padding-top: 1px;
}

/* ── Headline ── */
.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(52px, 6.5vw, 88px);
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 0.93;
  color: #fff;
  margin-bottom: 20px;
  letter-spacing: 0.01em;
}
.hero-headline .accent { color: var(--rap-red); }

/* ── Body ── */
.hero-desc {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255,255,255,0.72);
  margin-bottom: 36px;
  max-width: 420px;
}

/* ── CTAs ── */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 24px;
  background: var(--rap-red);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: var(--tracking-cta);
  text-transform: uppercase;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background var(--dur-base), transform var(--dur-base), box-shadow var(--dur-base);
  cursor: pointer;
  white-space: nowrap;
}
.hero-btn-primary:hover { background: var(--rap-red-hover); }
.hero-btn-primary:active { background: var(--rap-red-dark); transform: translateY(1px); }
.hero-btn-primary:focus-visible { outline: none; box-shadow: var(--ring-brand); }
.hero-btn-primary svg { transition: transform 0.2s; }
.hero-btn-primary:hover svg { transform: translateY(3px); }


/* ── Responsive ── */
@media (max-width: 768px) {
  .hero-content { left: 32px; max-width: calc(100% - 64px); }
  .hero-headline { font-size: clamp(40px, 10vw, 60px); }
}

@media (max-width: 480px) {
  .hero-content { left: 24px; max-width: calc(100% - 48px); }
  .hero-btn-primary, .hero-btn-ghost { height: 44px; font-size: 12px; }
}
</style>
