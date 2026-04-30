<template>
  <header class="nav-root">
    <!-- Top bar — white background -->
    <div class="topbar">
      <div class="bar-inner">
        <a href="#" class="logo" aria-label="Rapsodo">
          <img :src="`${baseUrl}logos/rapsodo-wordmark.svg`" class="wordmark" alt="Rapsodo" />
        </a>

        <span class="wip-pill">Work in Progress</span>

        <nav class="top-links">
          <a v-for="link in topLinks" :key="link" href="#"
            :class="['top-link', { active: link === 'Golf' }]">
            {{ link }}
          </a>
        </nav>

        <div class="top-actions">
          <button class="icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button class="icon-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
          <a href="#" class="shop-btn">Shop</a>
        </div>
      </div>
    </div>

    <!-- Golf sub-nav — black -->
    <div class="subnav">
      <div class="bar-inner">
        <a href="#" class="subnav-brand" aria-label="Rapsodo Golf">
          <svg class="subnav-rmark" viewBox="0 0 43.108 47.646" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M 13.613 0 L 0 0 L 0 2.269 L 13.613 2.269 L 13.613 0 Z M 13.613 45.377 L 0 45.377 L 0 47.646 L 13.613 47.646 L 13.613 45.377 Z M 4.538 9.075 L 13.613 9.075 L 13.613 11.344 L 4.538 11.344 L 4.538 9.075 Z M 13.613 31.763 L 4.538 31.763 L 4.538 34.032 L 13.613 34.032 L 13.613 31.763 Z M 0 22.689 L 13.613 22.689 L 13.613 24.957 L 0 24.957 L 0 22.689 Z M 13.613 4.537 L 4.538 4.537 L 4.538 6.806 L 13.613 6.806 L 13.613 4.537 Z M 4.538 27.226 L 13.613 27.226 L 13.613 29.495 L 4.538 29.495 L 4.538 27.226 Z M 13.613 13.612 L 4.538 13.612 L 4.538 15.881 L 13.613 15.881 L 13.613 13.612 Z M 4.538 36.301 L 13.613 36.301 L 13.613 38.57 L 4.538 38.57 L 4.538 36.301 Z M 13.613 18.151 L 4.538 18.151 L 4.538 20.42 L 13.613 20.42 L 13.613 18.151 Z M 4.538 40.838 L 13.613 40.838 L 13.613 43.107 L 4.538 43.107 L 4.538 40.838 Z M 22.736 0 L 15.882 0 L 15.882 9.075 L 18.151 9.075 C 24.957 9.075 26.091 12.702 26.091 15.434 C 26.091 18.167 23.823 21.554 18.151 21.554 L 15.882 21.554 L 15.882 29.495 L 27.226 47.645 L 43.108 47.645 L 28.105 28.153 C 30.965 27.514 32.53 26.731 34.176 25.293 C 36.892 22.944 38.57 19.285 38.57 14.715 C 38.57 9.091 35.167 0 22.736 0 Z" fill="currentColor" fill-rule="nonzero"/>
          </svg>
          <span class="subnav-wordmark">Rapsodo</span>
          <span class="subnav-sport">Golf</span>
        </a>

        <nav class="subnav-links">
          <!-- Products with dropdown -->
          <div
            class="subnav-item"
            @mouseenter="activeDropdown = 'products'"
            @mouseleave="activeDropdown = null"
          >
            <a href="#" class="subnav-link active">
              Products
              <svg class="subnav-chevron" :class="{ open: activeDropdown === 'products' }" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </a>
            <div v-show="activeDropdown === 'products'" class="dropdown">
              <a v-for="item in productsDropdown" :key="item" href="#" class="dropdown-item">
                {{ item }}
              </a>
            </div>
          </div>

          <!-- Remaining links -->
          <a v-for="link in otherLinks" :key="link" href="#" class="subnav-link">
            {{ link }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL,
      topLinks: ['Golf', 'Baseball', 'Softball', 'Careers'],
      productsDropdown: [
        'All Products',
        'Golf Balls',
        'Launch Monitors',
        'Golf Simulators & Net Returns',
      ],
      otherLinks: ['Learning Center', 'Community', 'Support', 'R-Cloud'],
      activeDropdown: null,
    }
  },
}
</script>

<style scoped>
.nav-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.bar-inner {
  width: 100%;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ── Top bar — white ── */
.topbar {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  height: 64px;
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  flex-shrink: 0;
}
.wordmark {
  height: 26px;
  width: auto;
  display: block;
}

/* Centered sport links */
.top-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 40px;
}
.top-link {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: #9ca3af;
  text-decoration: none;
  padding-bottom: 4px;
  white-space: nowrap;
  transition: color var(--dur-base);
}
.top-link:hover { color: #111; }
.top-link.active {
  color: #111;
  border-bottom: 2.5px solid var(--rap-red);
}

.wip-pill {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: #ff1493;
  color: #fff;
  padding: 6px 20px;
  border-radius: 999px;
  flex-shrink: 0;
  transform: translateX(-500px);
  box-shadow: 0 0 12px 4px rgba(255, 20, 147, 0.55), 0 0 28px 8px rgba(255, 20, 147, 0.3);
}

/* Right actions */
.top-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.icon-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: color var(--dur-base);
}
.icon-btn:hover { color: #000; }
.icon-btn:focus-visible { outline: none; box-shadow: var(--ring-brand); border-radius: var(--radius-sm); }

.shop-btn {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: var(--tracking-cta);
  text-transform: uppercase;
  background: var(--rap-red);
  color: #fff;
  text-decoration: none;
  height: 42px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  transition: background var(--dur-base), transform var(--dur-base);
  white-space: nowrap;
}
.shop-btn:hover { background: var(--rap-red-hover); }
.shop-btn:active { background: var(--rap-red-dark); transform: translateY(1px); }
.shop-btn:focus-visible { outline: none; box-shadow: var(--ring-brand); }

/* ── Golf sub-nav — black ── */
.subnav {
  background: #000;
  border-top: 1px solid #1a1a1a;
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;
}

.subnav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  flex-shrink: 0;
}
.subnav-rmark {
  height: 22px;
  width: auto;
  display: block;
}
.subnav-wordmark {
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #fff;
  line-height: 1;
}
.subnav-sport {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  line-height: 1;
  padding-top: 1px;
}

/* Links with separator between every item */
.subnav-links {
  display: flex;
  align-items: stretch;
  border-left: 1px solid #2a2a2a;
  margin-left: 20px;
  height: 48px;
}

.subnav-links > * + * {
  border-left: 1px solid #2a2a2a;
}

/* Products wrapper — relative so dropdown can anchor below */
.subnav-item {
  position: relative;
  display: flex;
  align-items: stretch;
}

.subnav-link {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color var(--dur-base), background var(--dur-base);
  white-space: nowrap;
  height: 48px;
}
.subnav-link:hover { color: rgba(255,255,255,0.9); background: rgba(255,255,255,0.05); }
.subnav-link.active {
  color: #fff;
  font-weight: 700;
}

.subnav-chevron {
  opacity: 0.7;
  margin-top: 1px;
  transition: transform var(--dur-base);
}
.subnav-chevron.open { transform: rotate(180deg); }

/* ── Products dropdown flyout ── */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 240px;
  background: #111;
  border: 1px solid #2a2a2a;
  border-top: none;
  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  z-index: 200;
}

.dropdown-item {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  padding: 14px 20px;
  border-bottom: 1px solid #1e1e1e;
  transition: color var(--dur-base), background var(--dur-base);
}
.dropdown-item:last-child { border-bottom: none; }
.dropdown-item:hover {
  color: #fff;
  background: rgba(255,255,255,0.06);
}
.dropdown-item:hover::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 3px;
  background: var(--rap-red);
  border-radius: 50%;
  margin-right: 8px;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
</style>
