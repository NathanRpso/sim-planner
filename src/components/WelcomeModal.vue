<template>
  <transition name="modal-fade">
    <div v-if="visible" class="wm-backdrop" @click.self="dismiss">
      <div class="wm-card" role="dialog" aria-modal="true" aria-labelledby="wm-title">
        <button class="wm-close" @click="dismiss" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <!-- Step 1: Welcome -->
        <div v-if="step === 0" class="wm-step">
          <div class="wm-brand">
            <svg class="wm-rmark" viewBox="0 0 43.108 47.646" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M 13.613 0 L 0 0 L 0 2.269 L 13.613 2.269 L 13.613 0 Z M 13.613 45.377 L 0 45.377 L 0 47.646 L 13.613 47.646 L 13.613 45.377 Z M 4.538 9.075 L 13.613 9.075 L 13.613 11.344 L 4.538 11.344 L 4.538 9.075 Z M 13.613 31.763 L 4.538 31.763 L 4.538 34.032 L 13.613 34.032 L 13.613 31.763 Z M 0 22.689 L 13.613 22.689 L 13.613 24.957 L 0 24.957 L 0 22.689 Z M 13.613 4.537 L 4.538 4.537 L 4.538 6.806 L 13.613 6.806 L 13.613 4.537 Z M 4.538 27.226 L 13.613 27.226 L 13.613 29.495 L 4.538 29.495 L 4.538 27.226 Z M 13.613 13.612 L 4.538 13.612 L 4.538 15.881 L 13.613 15.881 L 13.613 13.612 Z M 4.538 36.301 L 13.613 36.301 L 13.613 38.57 L 4.538 38.57 L 4.538 36.301 Z M 13.613 18.151 L 4.538 18.151 L 4.538 20.42 L 13.613 20.42 L 13.613 18.151 Z M 4.538 40.838 L 13.613 40.838 L 13.613 43.107 L 4.538 43.107 L 4.538 40.838 Z M 22.736 0 L 15.882 0 L 15.882 9.075 L 18.151 9.075 C 24.957 9.075 26.091 12.702 26.091 15.434 C 26.091 18.167 23.823 21.554 18.151 21.554 L 15.882 21.554 L 15.882 29.495 L 27.226 47.645 L 43.108 47.645 L 28.105 28.153 C 30.965 27.514 32.53 26.731 34.176 25.293 C 36.892 22.944 38.57 19.285 38.57 14.715 C 38.57 9.091 35.167 0 22.736 0 Z" fill-rule="nonzero"/>
            </svg>
            <span class="wm-brand-name">Rapsodo</span>
            <span class="wm-brand-sport">Golf</span>
          </div>

          <h2 id="wm-title" class="wm-headline">
            Golf Sim<br /><span class="wm-accent">Room Planner</span>
          </h2>

          <p class="wm-body">
            An interactive tool to design your perfect golf simulator room. Enter your dimensions and get a real-time 3D layout — screen sizing, projector placement, and product recommendations.
          </p>

          <p class="wm-caption">Takes under 2 minutes &nbsp;·&nbsp; No account required</p>
        </div>

        <!-- Step 2: How it works -->
        <div v-if="step === 1" class="wm-step">
          <p class="wm-eyebrow">How it works</p>
          <h2 class="wm-headline wm-headline--sm">Everything you need<br /><span class="wm-accent">in one place</span></h2>

          <div class="wm-tiles">
            <div class="wm-tile">
              <div class="wm-tile-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 17h7m-3.5-3.5v7"/>
                </svg>
              </div>
              <div class="wm-tile-text">
                <strong>Configure</strong>
                <span>Set your room dimensions, screen size, and monitor position</span>
              </div>
            </div>

            <div class="wm-tile">
              <div class="wm-tile-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <div class="wm-tile-text">
                <strong>Visualize</strong>
                <span>Watch your layout update live in the 3D model</span>
              </div>
            </div>

            <div class="wm-tile">
              <div class="wm-tile-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div class="wm-tile-text">
                <strong>Get recommendations</strong>
                <span>See compatible Rapsodo products for your exact space</span>
              </div>
            </div>

            <div class="wm-tile">
              <div class="wm-tile-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div class="wm-tile-text">
                <strong>Navigate the 3D view</strong>
                <span>Left drag to rotate &nbsp;·&nbsp; Right drag to pan &nbsp;·&nbsp; Scroll to zoom</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: What to expect -->
        <div v-if="step === 2" class="wm-step">
          <p class="wm-eyebrow">Before you start</p>
          <h2 class="wm-headline wm-headline--sm">What to<br /><span class="wm-accent">expect</span></h2>

          <ol class="wm-expects">
            <li class="wm-expect-row">
              <span class="wm-expect-num">1</span>
              <p>Real-time 3D visualization of your exact room configuration</p>
            </li>
            <li class="wm-expect-row">
              <span class="wm-expect-num">2</span>
              <p>Compatible product recommendations based on your dimensions</p>
            </li>
            <li class="wm-expect-row">
              <span class="wm-expect-num">3</span>
              <p>Results are a guide - always measure your space before buying</p>
            </li>
          </ol>
        </div>

        <!-- Footer -->
        <div class="wm-footer">
          <div class="wm-dots">
            <button
              v-for="i in 3" :key="i"
              class="wm-dot"
              :class="{ active: step === i - 1 }"
              @click="step = i - 1"
              :aria-label="`Go to step ${i}`"
            />
          </div>

          <div class="wm-actions">
            <button v-if="step > 0" class="wm-btn-ghost" @click="step--">Back</button>
            <button v-if="step < 2" class="wm-btn-primary" @click="step++">
              Next
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <button v-if="step === 2" class="wm-btn-primary" @click="dismiss">
              Start Planning
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

        </div>

      </div>
    </div>
  </transition>
</template>

<script>
const STORAGE_KEY = 'rapsodo-golf-sim-welcome-v1'

export default {
  name: 'WelcomeModal',
  data() {
    return {
      visible: false,
      step: 0,
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    dismiss() {
      this.visible = false
    },
  },
}
</script>

<style scoped>
/* ── Backdrop ── */
.wm-backdrop {
  position: absolute;
  inset: 0;
  z-index: 300;
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  padding: 24px;
}

/* ── Card ── */
.wm-card {
  background: var(--surface-0);
  border-radius: var(--radius-2xl);
  box-shadow: 0 20px 24px -4px rgba(16,24,40,0.18), 0 8px 8px -4px rgba(16,24,40,0.08);
  width: 100%;
  max-width: 520px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* ── Close button (DS spec: 28×28, radius 6px) ── */
.wm-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: #737373;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--dur-base), color var(--dur-base);
  z-index: 1;
}
.wm-close:hover { background: #F5F5F5; color: var(--rap-red); }
.wm-close:focus-visible { outline: none; box-shadow: var(--ring-brand); }

/* ── Steps ── */
.wm-step {
  padding: 36px 36px 24px;
  flex: 1;
}

/* ── Brand mark ── */
.wm-brand {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 24px;
  color: var(--text-primary);
}
.wm-rmark {
  height: 26px;
  width: auto;
  display: block;
  color: var(--text-primary);
}
.wm-brand-name {
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: 17px;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  line-height: 1;
}
.wm-brand-sport {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  line-height: 1;
  padding-top: 1px;
}

/* ── Eyebrow ── */
.wm-eyebrow {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--rap-red);
  margin-bottom: 10px;
}

/* ── Headline ── */
.wm-headline {
  font-family: var(--font-display);
  font-size: 52px;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 0.93;
  color: var(--text-primary);
  margin-bottom: 18px;
  letter-spacing: 0.01em;
}
.wm-headline--sm { font-size: 40px; }
.wm-accent { color: var(--rap-red); }

/* ── Body ── */
.wm-body {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: 14px;
}
.wm-caption {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
}

/* ── How it works tiles ── */
.wm-tiles {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
}
.wm-tile {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  transition: background var(--dur-base);
}
.wm-tile:hover { background: var(--surface-1); }
.wm-tile-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--surface-1);
  border: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  flex-shrink: 0;
}
.wm-tile-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 2px;
}
.wm-tile-text strong {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}
.wm-tile-text span {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* ── Expect list ── */
.wm-expects {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
  list-style: none;
  padding: 0;
}
.wm-expect-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.wm-expect-num {
  width: 22px;
  height: 22px;
  border-radius: var(--radius-sm);
  background: var(--surface-1);
  border: 1px solid var(--border-default);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}
.wm-expect-row p {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

/* ── Footer ── */
.wm-footer {
  background: var(--surface-1);
  border-top: 1px solid var(--border-default);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Step dots */
.wm-dots {
  display: flex;
  align-items: center;
  gap: 6px;
}
.wm-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c0c4cc;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background var(--dur-base), width var(--dur-base), border-radius var(--dur-base);
}
.wm-dot.active {
  width: 24px;
  border-radius: 4px;
  background: var(--rap-red);
}

.wm-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}


/* Buttons */
.wm-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 0 20px;
  background: var(--rap-red);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: var(--tracking-cta);
  text-transform: uppercase;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--dur-base), transform 120ms var(--ease-out), box-shadow var(--dur-base);
  white-space: nowrap;
}
.wm-btn-primary:hover { background: var(--rap-red-hover); }
.wm-btn-primary:active { background: var(--rap-red-dark); transform: translateY(1px); }
.wm-btn-primary:focus-visible { outline: none; box-shadow: var(--ring-brand); }

.wm-btn-ghost {
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: var(--tracking-cta);
  text-transform: uppercase;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--dur-base), border-color var(--dur-base), color var(--dur-base);
  white-space: nowrap;
}
.wm-btn-ghost:hover { background: var(--surface-1); border-color: var(--border-strong); color: var(--text-primary); }

/* ── Transition ── */
.modal-fade-enter-active { transition: opacity 240ms var(--ease-out), transform 240ms var(--ease-out); }
.modal-fade-leave-active { transition: opacity 160ms ease-in, transform 160ms ease-in; }
.modal-fade-enter-from  { opacity: 0; transform: scale(0.97); }
.modal-fade-leave-to    { opacity: 0; transform: scale(0.97); }
</style>
