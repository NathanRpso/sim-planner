<template>
  <div class="rp-overlay">

    <!-- Left half: transparent — 3D scene shows through -->
    <div class="rp-left" />

    <!-- Right half: results page -->
    <div class="rp-right">

      <!-- Header -->
      <div class="rp-header">
        <button class="rp-back" @click="goBack">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to Configurator
        </button>
        <div class="rp-header-brand">
          <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="#CD1B32" stroke-width="1.5"/>
            <path d="M8 14 Q14 6 20 14 Q14 22 8 14Z" fill="#CD1B32" opacity="0.3"/>
            <circle cx="14" cy="14" r="3" fill="#CD1B32"/>
          </svg>
          <span>Setup Validation</span>
        </div>
      </div>

      <!-- Scrollable body -->
      <div class="rp-body">

        <!-- ── Verdict card ── -->
        <div class="rp-verdict" :class="verdictCls">
          <div class="rp-verdict-top">
            <div class="rp-verdict-icon" :class="verdictIconCls">
              <!-- Compatible -->
              <svg v-if="result.status === 'compatible'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg>
              <!-- Conditional -->
              <svg v-else-if="result.status === 'conditional'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <!-- Incompatible -->
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            </div>
          </div>
          <h2 class="rp-verdict-headline">{{ headline }}</h2>
          <p class="rp-verdict-sub">{{ subtext }}</p>

          <div class="rp-verdict-ctas">
            <!-- Incompatible -->
            <template v-if="result.status === 'incompatible'">
              <a href="#" class="rp-cta-btn rp-cta-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                Shop MLM2PRO Instead
              </a>
              <a href="#" class="rp-cta-btn rp-cta-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Contact Support
              </a>
            </template>
            <!-- Compatible / Conditional -->
            <template v-else>
              <a v-if="!hasUnverifiedCeiling" href="#" class="rp-cta-btn rp-cta-primary">Shop CLM PRO →</a>
              <a v-else href="#" class="rp-cta-btn rp-cta-dark">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Contact Support
              </a>
            </template>
          </div>
        </div>

        <!-- ── Issues ── -->
        <div v-if="result.issues.length" class="rp-section">
          <div class="rp-section-label">Details</div>
          <div
            v-for="(issue, i) in result.issues"
            :key="i"
            class="rp-issue"
            :class="[issue.severity, { open: openIssues[i] }]"
            @click="toggleIssue(i)"
          >
            <div class="rp-issue-stripe" />
            <div class="rp-issue-body">
              <div class="rp-issue-top">
                <span class="rp-issue-title">{{ issue.title }}</span>
                <svg class="rp-issue-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <p class="rp-issue-msg">{{ issue.message }}</p>
              <div class="rp-issue-expand">
                <p class="rp-issue-rec">{{ issue.rec }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Component checklist ── -->
        <div class="rp-section">
          <div class="rp-section-label">What You'll Need</div>

          <!-- In the box -->
          <div class="rp-comp-section">
            <div class="rp-comp-heading">
              <span class="rp-comp-dot inbox" />In the Box
            </div>
            <div class="rp-comp-grid">
              <div v-for="c in result.components.inBox" :key="c.name"
                   class="rp-comp-tile" :class="{ open: openTiles[c.name] }"
                   @click="toggleTile(c.name)">
                <div class="rp-tile-img">
                  <img v-if="c.image" :src="c.image" :alt="c.name" />
                  <span class="rp-tile-badge inbox">Included</span>
                </div>
                <div class="rp-tile-bottom">
                  <span class="rp-tile-name">{{ c.name }}</span>
                  <svg class="rp-tile-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="rp-tile-expand"><p class="rp-tile-note">{{ c.note }}</p></div>
              </div>
            </div>
          </div>

          <!-- Required -->
          <div class="rp-comp-section">
            <div class="rp-comp-heading">
              <span class="rp-comp-dot required" />Required Extras
            </div>
            <div class="rp-comp-grid">
              <div v-for="c in result.components.required" :key="c.name"
                   class="rp-comp-tile" :class="{ open: openTiles[c.name] }"
                   @click="toggleTile(c.name)">
                <div class="rp-tile-img">
                  <img v-if="c.image" :src="c.image" :alt="c.name" />
                  <span class="rp-tile-badge required">Required</span>
                </div>
                <div class="rp-tile-bottom">
                  <span class="rp-tile-name">{{ c.name }}</span>
                  <svg class="rp-tile-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="rp-tile-expand"><p class="rp-tile-note">{{ c.note }}</p></div>
              </div>
            </div>
          </div>

          <!-- Recommended -->
          <div class="rp-comp-section">
            <div class="rp-comp-heading">
              <span class="rp-comp-dot recommended" />Recommended
            </div>
            <div class="rp-comp-grid">
              <div v-for="c in result.components.recommended" :key="c.name"
                   class="rp-comp-tile" :class="{ open: openTiles[c.name] }"
                   @click="toggleTile(c.name)">
                <div class="rp-tile-img">
                  <img v-if="c.image" :src="c.image" :alt="c.name" />
                  <span class="rp-tile-badge recommended">Rec.</span>
                </div>
                <div class="rp-tile-bottom">
                  <span class="rp-tile-name">{{ c.name }}</span>
                  <svg class="rp-tile-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="rp-tile-expand"><p class="rp-tile-note">{{ c.note }}</p></div>
              </div>
            </div>
          </div>

        </div>
        <!-- ── Save results ── -->
        <div v-if="result.status !== 'incompatible'" class="rp-save-section">
          <div class="rp-save-label">Get your shopping list</div>
          <div v-if="!emailSaved" class="rp-email-row">
            <input v-model="email" type="email" placeholder="your@email.com" class="rp-email-input" @keyup.enter="saveResults" />
            <button class="rp-save-btn" @click="saveResults">Send My Shopping List</button>
          </div>
          <p v-else class="rp-saved-msg">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Results saved — check your inbox.
          </p>
        </div>

        <!-- ── Support link ── -->
        <div v-if="result.status !== 'incompatible'" class="rp-support-row">
          <a href="#" class="rp-support-link">Need help? Contact support →</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { runValidation } from '@/lib/validate'

export default {
  name: 'ResultsPanel',

  data() {
    return { openTiles: {}, openIssues: {}, email: '', emailSaved: false }
  },

  computed: {
    result() { return runValidation(this.$store.state) },

    verdictCls() {
      return {
        'verdict-compatible':   this.result.status === 'compatible',
        'verdict-conditional':  this.result.status === 'conditional',
        'verdict-incompatible': this.result.status === 'incompatible',
      }
    },
    verdictIconCls() {
      return {
        'icon-compatible':   this.result.status === 'compatible',
        'icon-conditional':  this.result.status === 'conditional',
        'icon-incompatible': this.result.status === 'incompatible',
      }
    },
    badgeCls() {
      return {
        'badge-compatible':   this.result.status === 'compatible',
        'badge-conditional':  this.result.status === 'conditional',
        'badge-incompatible': this.result.status === 'incompatible',
      }
    },
    badgeLabel() {
      return { compatible: 'Compatible', conditional: 'Compatible with adjustments', incompatible: 'Not Compatible' }[this.result.status]
    },
    hasUnverifiedCeiling() {
      return this.$store.state.wall.ceilingMaterial === 'other'
    },
    headline() {
      return { compatible: 'Compatible', conditional: 'Compatible with adjustments', incompatible: 'Not Compatible' }[this.result.status]
    },
    subtext() {
      if (this.result.status === 'compatible') return "Your room meets all CLM PRO requirements. You're cleared for purchase."
      if (this.result.status === 'conditional') {
        const w = this.result.warningCount
        return `${w} thing${w !== 1 ? 's' : ''} to review before you buy — your room works but check the details below.`
      }
      const e = this.result.errorCount
      return `${e} critical requirement${e !== 1 ? 's' : ''} not met. Adjusting your space may resolve this.`
    },
  },

  methods: {
    goBack() { this.$store.commit('env/setShowResults', false) },
    toggleTile(name) { this.openTiles = { ...this.openTiles, [name]: !this.openTiles[name] } },
    toggleIssue(i) { this.openIssues = { ...this.openIssues, [i]: !this.openIssues[i] } },
    saveResults() { if (this.email) this.emailSaved = true },
  },
}
</script>

<style scoped>
/* ── Overlay ── */
.rp-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  display: flex;
  pointer-events: none;
}

.rp-left { flex: 1; }

.rp-right {
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: rgba(242, 243, 245, 0.86);
  backdrop-filter: blur(22px) saturate(1.4);
  -webkit-backdrop-filter: blur(22px) saturate(1.4);
  border-left: 1px solid rgba(0,0,0,0.07);
  pointer-events: all;
  overflow: hidden;
}

/* ── Header ── */
.rp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: #000;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.rp-back {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-sm);
  color: rgba(255,255,255,0.75);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  padding: 6px 12px;
  cursor: pointer;
  transition: background var(--dur-base), color var(--dur-base);
}
.rp-back:hover { background: rgba(255,255,255,0.14); color: #fff; }
.rp-back:focus-visible { outline: none; box-shadow: var(--ring-brand); }

.rp-header-brand {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: #fff;
}

/* ── Body ── */
.rp-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.rp-body::-webkit-scrollbar { width: 4px; }
.rp-body::-webkit-scrollbar-track { background: transparent; }
.rp-body::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 2px; }

/* ── Verdict card ── */
.rp-verdict {
  border-radius: var(--radius-lg);
  padding: 18px 18px 18px 16px;
  border: 1px solid rgba(0,0,0,0.07);
  border-left-width: 3px;
  background: rgba(255,255,255,0.58);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.verdict-compatible   { border-left-color: #16a34a; }
.verdict-conditional  { border-left-color: #d97706; }
.verdict-incompatible { border-left-color: #dc2626; }

.rp-verdict-top {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 10px;
}

.rp-verdict-icon {
  flex-shrink: 0;
  display: flex;
}
.icon-compatible   { color: #16a34a; }
.icon-conditional  { color: #d97706; }
.icon-incompatible { color: #dc2626; }

.rp-badge {
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 3px 8px;
  border-radius: 3px;
}
.badge-compatible   { background: rgba(220,252,231,0.8); color: #166534; }
.badge-conditional  { background: rgba(254,243,199,0.8); color: #92400e; }
.badge-incompatible { background: rgba(254,226,226,0.8); color: #9f1239; }

.rp-verdict-headline {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  color: var(--text-primary);
  margin: 0 0 6px;
  line-height: 0.95;
  letter-spacing: 0.01em;
}
.rp-verdict-sub {
  font-family: var(--font-sans);
  font-size: 12.5px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

/* ── Section ── */
.rp-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.rp-section-label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 2px;
}
.rp-section-label::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--rap-red);
  flex-shrink: 0;
}

/* ── Issues ── */
.rp-issue {
  display: flex;
  background: rgba(255,255,255,0.52);
  border-radius: var(--radius-md);
  border: 1px solid rgba(0,0,0,0.07);
  overflow: hidden;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.rp-issue:hover,
.rp-issue.open { background: rgba(255,255,255,0.72); }
.rp-issue.error   { border-color: rgba(248,113,113,0.3); }
.rp-issue.warning { border-color: rgba(251,191,36,0.3); }

.rp-issue-stripe {
  width: 3px;
  flex-shrink: 0;
}
.error   .rp-issue-stripe { background: #f87171; }
.warning .rp-issue-stripe { background: #fbbf24; }

.rp-issue-body {
  padding: 10px 12px;
  flex: 1;
  min-width: 0;
}

.rp-issue-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 3px;
}

.rp-issue-title {
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--text-primary);
  flex: 1;
}

.rp-issue-chevron {
  flex-shrink: 0;
  color: rgba(0,0,0,0.22);
  transition: transform 0.25s ease;
}
.rp-issue.open .rp-issue-chevron { transform: rotate(180deg); color: rgba(0,0,0,0.4); }

.rp-issue-msg {
  font-family: var(--font-sans);
  font-size: 11.5px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.45;
}

.rp-issue-expand {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}
.rp-issue.open .rp-issue-expand { max-height: 120px; }

.rp-issue-rec {
  font-family: var(--font-sans);
  font-size: 11px;
  color: var(--text-secondary);
  margin: 6px 0 0;
  line-height: 1.45;
  padding-top: 6px;
  border-top: 1px solid rgba(0,0,0,0.05);
}

/* ── Component checklist ── */
.rp-comp-section { display: flex; flex-direction: column; gap: 7px; margin-bottom: 4px; }

.rp-comp-heading {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--text-secondary);
}
.rp-comp-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.rp-comp-dot.inbox       { background: #22c55e; }
.rp-comp-dot.required    { background: var(--rap-red); }
.rp-comp-dot.recommended { background: transparent; border: 1.5px solid #94a3b8; }

.rp-comp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
}

/* Tile */
.rp-comp-tile {
  background: rgba(255,255,255,0.52);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.rp-comp-tile:hover,
.rp-comp-tile.open {
  background: rgba(255,255,255,0.72);
  border-color: rgba(0,0,0,0.13);
}

/* Image area — fixed height, image centred */
.rp-tile-img {
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  background: rgba(248,250,252,0.65);
}
.rp-tile-img img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  opacity: 0.82;
}

.rp-tile-badge {
  position: absolute;
  top: 6px;
  left: 6px;
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 5px;
  border-radius: 3px;
  white-space: nowrap;
  line-height: 1;
}
.rp-tile-badge.inbox       { background: rgba(220,252,231,0.9); color: #166534; }
.rp-tile-badge.required    { background: rgba(255,241,242,0.9); color: var(--rap-red); }
.rp-tile-badge.recommended { background: rgba(254,243,199,0.9); color: #92400e; }

/* Name + chevron row */
.rp-tile-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 7px 9px;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.rp-tile-name {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  flex: 1;
}

.rp-tile-chevron {
  flex-shrink: 0;
  color: rgba(0,0,0,0.22);
  transition: transform 0.25s ease;
}
.rp-comp-tile.open .rp-tile-chevron { transform: rotate(180deg); color: rgba(0,0,0,0.4); }

/* Expand */
.rp-tile-expand {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease, padding 0.25s ease;
  padding: 0 10px;
}
.rp-comp-tile.open .rp-tile-expand {
  max-height: 120px;
  padding: 7px 10px 10px;
}

.rp-tile-note {
  font-family: var(--font-sans);
  font-size: 10.5px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
  border-top: 1px solid rgba(0,0,0,0.06);
  padding-top: 7px;
}

/* ── Verdict CTAs ── */
.rp-verdict-ctas {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.rp-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 40px;
  padding: 0 20px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--tracking-cta);
  border-radius: var(--radius-md);
  text-decoration: none;
  cursor: pointer;
  transition: background var(--dur-base), transform var(--dur-base), box-shadow var(--dur-base);
  white-space: nowrap;
}
.rp-cta-btn:active { transform: translateY(1px); }
.rp-cta-btn:focus-visible { outline: none; box-shadow: var(--ring-brand); }

.rp-cta-primary {
  background: var(--rap-red);
  color: #fff;
}
.rp-cta-primary:hover { background: var(--rap-red-hover); }
.rp-cta-primary:active { background: var(--rap-red-dark); }

.rp-cta-secondary {
  background: rgba(255,255,255,0.7);
  color: var(--text-primary);
  border: 1px solid rgba(0,0,0,0.12);
}
.rp-cta-secondary:hover { background: rgba(255,255,255,0.9); }

.rp-cta-dark {
  background: var(--text-primary);
  color: #fff;
}
.rp-cta-dark:hover { background: #262626; }

/* ── Save results ── */
.rp-save-section {
  background: rgba(255,255,255,0.52);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rp-save-label {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.02em;
}

.rp-email-row {
  display: flex;
  gap: 6px;
}

.rp-email-input {
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  background: rgba(255,255,255,0.7);
  font-family: var(--font-sans);
  font-size: 15px;
  color: var(--text-primary);
  outline: none;
  transition: border-color var(--dur-base), box-shadow var(--dur-base);
}
.rp-email-input::placeholder { color: var(--text-tertiary); }
.rp-email-input:focus { border-color: var(--rap-red); box-shadow: var(--ring-brand); }

.rp-save-btn {
  height: 48px;
  padding: 0 20px;
  background: var(--rap-red);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--tracking-cta);
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--dur-base), transform var(--dur-base), box-shadow var(--dur-base);
}
.rp-save-btn:hover { background: var(--rap-red-hover); }
.rp-save-btn:active { background: var(--rap-red-dark); transform: translateY(1px); }
.rp-save-btn:focus-visible { outline: none; box-shadow: var(--ring-brand); }

.rp-saved-msg {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  color: #16a34a;
  margin: 0;
}

/* ── Support link ── */
.rp-support-row {
  text-align: center;
  padding-bottom: 4px;
}
.rp-support-link {
  font-family: var(--font-sans);
  font-size: 11.5px;
  font-weight: 600;
  color: var(--rap-red);
  text-decoration: none;
  transition: color var(--dur-base);
}
.rp-support-link:hover { color: var(--rap-red-hover); }
</style>
