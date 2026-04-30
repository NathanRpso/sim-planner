<template>
  <div class="dp">

    <!-- Brand header -->
    <div class="dp-hdr">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="color: var(--rap-red); flex-shrink: 0" aria-hidden="true">
        <g transform="translate(2.000 2.000) scale(1.19048)"><path d="M 9.15 0 C 9.15 -0.414 8.814 -0.75 8.4 -0.75 C 7.986 -0.75 7.65 -0.414 7.65 0 L 8.4 0 L 9.15 0 Z M 2.85 0 C 2.85 -0.414 2.514 -0.75 2.1 -0.75 C 1.686 -0.75 1.35 -0.414 1.35 0 L 2.1 0 L 2.85 0 Z M 7.65 16.8 C 7.65 17.214 7.986 17.55 8.4 17.55 C 8.814 17.55 9.15 17.214 9.15 16.8 L 8.4 16.8 L 7.65 16.8 Z M 15.45 0 C 15.45 -0.414 15.114 -0.75 14.7 -0.75 C 14.286 -0.75 13.95 -0.414 13.95 0 L 14.7 0 L 15.45 0 Z M 1.35 16.8 C 1.35 17.214 1.686 17.55 2.1 17.55 C 2.514 17.55 2.85 17.214 2.85 16.8 L 2.1 16.8 L 1.35 16.8 Z M 13.95 16.8 C 13.95 17.214 14.286 17.55 14.7 17.55 C 15.114 17.55 15.45 17.214 15.45 16.8 L 14.7 16.8 L 13.95 16.8 Z M 8.4 2.1 L 9.15 2.1 L 9.15 0 L 8.4 0 L 7.65 0 L 7.65 2.1 L 8.4 2.1 Z M 4.2 12.6 L 3.45 12.6 C 3.45 13.346 2.846 13.95 2.1 13.95 L 2.1 14.7 L 2.1 15.45 C 3.674 15.45 4.95 14.174 4.95 12.6 L 4.2 12.6 Z M 2.1 14.7 L 2.1 13.95 C 1.354 13.95 0.75 13.346 0.75 12.6 L 0 12.6 L -0.75 12.6 C -0.75 14.174 0.526 15.45 2.1 15.45 L 2.1 14.7 Z M 0 12.6 L 0.75 12.6 C 0.75 11.854 1.354 11.25 2.1 11.25 L 2.1 10.5 L 2.1 9.75 C 0.526 9.75 -0.75 11.026 -0.75 12.6 L 0 12.6 Z M 2.1 10.5 L 2.1 11.25 C 2.846 11.25 3.45 11.854 3.45 12.6 L 4.2 12.6 L 4.95 12.6 C 4.95 11.026 3.674 9.75 2.1 9.75 L 2.1 10.5 Z M 10.5 4.2 L 9.75 4.2 C 9.75 4.946 9.146 5.55 8.4 5.55 L 8.4 6.3 L 8.4 7.05 C 9.974 7.05 11.25 5.774 11.25 4.2 L 10.5 4.2 Z M 8.4 6.3 L 8.4 5.55 C 7.654 5.55 7.05 4.946 7.05 4.2 L 6.3 4.2 L 5.55 4.2 C 5.55 5.774 6.826 7.05 8.4 7.05 L 8.4 6.3 Z M 6.3 4.2 L 7.05 4.2 C 7.05 3.454 7.654 2.85 8.4 2.85 L 8.4 2.1 L 8.4 1.35 C 6.826 1.35 5.55 2.626 5.55 4.2 L 6.3 4.2 Z M 8.4 2.1 L 8.4 2.85 C 9.146 2.85 9.75 3.454 9.75 4.2 L 10.5 4.2 L 11.25 4.2 C 11.25 2.626 9.974 1.35 8.4 1.35 L 8.4 2.1 Z M 16.8 12.6 L 16.05 12.6 C 16.05 13.346 15.446 13.95 14.7 13.95 L 14.7 14.7 L 14.7 15.45 C 16.274 15.45 17.55 14.174 17.55 12.6 L 16.8 12.6 Z M 14.7 14.7 L 14.7 13.95 C 13.954 13.95 13.35 13.346 13.35 12.6 L 12.6 12.6 L 11.85 12.6 C 11.85 14.174 13.126 15.45 14.7 15.45 L 14.7 14.7 Z M 12.6 12.6 L 13.35 12.6 C 13.35 11.854 13.954 11.25 14.7 11.25 L 14.7 10.5 L 14.7 9.75 C 13.126 9.75 11.85 11.026 11.85 12.6 L 12.6 12.6 Z M 14.7 10.5 L 14.7 11.25 C 15.446 11.25 16.05 11.854 16.05 12.6 L 16.8 12.6 L 17.55 12.6 C 17.55 11.026 16.274 9.75 14.7 9.75 L 14.7 10.5 Z M 2.1 10.5 L 2.85 10.5 L 2.85 0 L 2.1 0 L 1.35 0 L 1.35 10.5 L 2.1 10.5 Z M 8.4 16.8 L 9.15 16.8 L 9.15 6.3 L 8.4 6.3 L 7.65 6.3 L 7.65 16.8 L 8.4 16.8 Z M 14.7 10.5 L 15.45 10.5 L 15.45 0 L 14.7 0 L 13.95 0 L 13.95 10.5 L 14.7 10.5 Z M 2.1 16.8 L 2.85 16.8 L 2.85 14.7 L 2.1 14.7 L 1.35 14.7 L 1.35 16.8 L 2.1 16.8 Z M 14.7 16.8 L 15.45 16.8 L 15.45 14.7 L 14.7 14.7 L 13.95 14.7 L 13.95 16.8 L 14.7 16.8 Z" fill="currentColor" fill-rule="nonzero"/></g>
      </svg>
      <span class="dp-hdr-title">GOLF SIM PLANNER <span class="dp-hdr-sub">by Rapsodo</span></span>
    </div>

    <!-- Steps -->
    <div class="dp-list">

      <!-- ── STEP 1: Setup ── -->
      <div class="dp-step" :class="stepCls(0)">
        <div class="dp-step-hdr" @click="clickStep(0)">
          <div class="dp-num">
            <svg v-if="reachedStep > 0" width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span v-else>1</span>
          </div>
          <span class="dp-ttl">Basic Setup</span>
          <svg v-if="reachedStep >= 0" class="dp-chev" :class="{ open: openStep === 0 }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          <svg v-else class="dp-lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <transition name="slide">
          <div v-show="openStep === 0" class="dp-step-body">

            <div class="dp-field">
              <div class="dp-label">Units</div>
              <div class="dp-pills">
                <span class="dp-pill" :class="{ active: isMetric }" @click="setUnit('metric')">Metric</span>
                <span class="dp-pill" :class="{ active: !isMetric }" @click="setUnit('imperial')">Imperial</span>
              </div>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-label">Display</div>
              <div class="dp-pills">
                <span class="dp-pill" :class="{ active: displayType === 'projector' }" @click="setDisplay('projector')">Projector</span>
                <span class="dp-pill" :class="{ active: displayType === 'net' }" @click="setDisplay('net')">Net</span>
              </div>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-label">Computer</div>
              <div class="dp-pills">
                <span class="dp-pill" :class="{ active: computerType === 'desktop' }" @click="setComputer('desktop')">Desktop</span>
                <span class="dp-pill" :class="{ active: computerType === 'laptop' }" @click="setComputer('laptop')">Laptop</span>
              </div>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-label">Golfer Height</div>
              <div v-if="!isMetric" class="dp-inline">
                <input class="dp-input sm" type="number" min="4" max="8" :value="golferFt" @change="onFtChange"/>
                <span class="dp-unit">ft</span>
                <input class="dp-input sm" type="number" min="0" :max="golferFt >= 8 ? 1 : 11" :value="golferIn" @change="onInChange"/>
                <span class="dp-unit">in</span>
              </div>
              <div v-else class="dp-inline">
                <input class="dp-input" type="number" min="122" max="244" step="1" :value="golferCmLocal" @input="onCmInput"/>
                <span class="dp-unit">cm</span>
              </div>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-label">Handedness</div>
              <div class="dp-pills">
                <span class="dp-pill" :class="{ active: handedness === 'right' }" @click="setHand('right')">Right</span>
                <span class="dp-pill" :class="{ active: handedness === 'left' }" @click="setHand('left')">Left</span>
              </div>
            </div>

            <button class="dp-continue" @click.stop="advance(0)">Continue <span class="dp-arr">→</span></button>
          </div>
        </transition>
      </div>

      <!-- ── STEP 2: Room Specs ── -->
      <div class="dp-step" :class="stepCls(1)">
        <div class="dp-step-hdr" @click="clickStep(1)">
          <div class="dp-num">
            <svg v-if="reachedStep > 1" width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span v-else>2</span>
          </div>
          <span class="dp-ttl">Room Specs</span>
          <svg v-if="reachedStep >= 1" class="dp-chev" :class="{ open: openStep === 1 }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          <svg v-else class="dp-lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <transition name="slide">
          <div v-show="openStep === 1" class="dp-step-body">

            <div class="dp-field">
              <div class="dp-row-label">Ceiling Height</div>
              <div class="dp-inline">
                <input class="dp-input" type="number" step="0.1" :min="fd(7.5)" :max="fd(15)" :value="fd(wallHeight)" @input="e => commit('wall/setWallHeight', df(e.target.value))" :class="{ err: !roomHValid }"/>
                <span class="dp-unit">{{ dispUnit }}</span>
                <span class="dp-muted">{{ fmtFtIn(wallHeight) }}</span>
              </div>
              <input class="dp-slider" type="range" :min="fd(7.5)" :max="fd(15)" step="0.1" :value="fd(wallHeight)" @input="e => commit('wall/setWallHeight', df(e.target.value))"/>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-row-label">Room Width</div>
              <div class="dp-inline">
                <input class="dp-input" type="number" step="0.1" :min="fd(9.5)" :max="fd(20)" :value="fd(wallWidth)" @input="e => commit('wall/setWallWidth', df(e.target.value))" :class="{ err: !roomWValid }"/>
                <span class="dp-unit">{{ dispUnit }}</span>
                <span class="dp-muted">{{ fmtFtIn(wallWidth) }}</span>
              </div>
              <input class="dp-slider" type="range" :min="fd(9.5)" :max="fd(20)" step="0.1" :value="fd(wallWidth)" @input="e => commit('wall/setWallWidth', df(e.target.value))"/>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-row-label">Room Depth</div>
              <div class="dp-inline">
                <input class="dp-input" type="number" step="0.1" :min="minRoomDepth" :max="fd(30)" :value="fd(wallDepth)" @input="e => commit('wall/setWallDepth', df(e.target.value))" :class="{ err: !roomDValid }"/>
                <span class="dp-unit">{{ dispUnit }}</span>
                <span class="dp-muted">{{ fmtFtIn(wallDepth) }}</span>
              </div>
              <input class="dp-slider" type="range" :min="minRoomDepth" :max="fd(30)" step="0.1" :value="fd(wallDepth)" @input="e => commit('wall/setWallDepth', df(e.target.value))"/>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-row-label">Ceiling Material</div>
              <div class="dp-mat-grid">
                <div v-for="opt in ceilOptions" :key="opt.value"
                  class="dp-mat-card" :class="{ active: ceilingMaterial === opt.value }"
                  @click="commit('wall/setCeilingMaterial', opt.value)">
                  <div class="dp-mat-name">{{ opt.label }}</div>
                  <div class="dp-mat-sub">{{ opt.sub }}</div>
                </div>
              </div>
            </div>

            <button class="dp-continue" @click.stop="advance(1)">Continue <span class="dp-arr">→</span></button>
          </div>
        </transition>
      </div>

      <!-- ── STEP 3: Enclosure / Net ── -->
      <div class="dp-step" :class="stepCls(2)">
        <div class="dp-step-hdr" @click="clickStep(2)">
          <div class="dp-num">
            <svg v-if="reachedStep > 2" width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span v-else>3</span>
          </div>
          <span class="dp-ttl">{{ displayType === 'net' ? 'Net' : 'Enclosure' }}</span>
          <svg v-if="reachedStep >= 2" class="dp-chev" :class="{ open: openStep === 2 }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          <svg v-else class="dp-lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <transition name="slide">
          <div v-show="openStep === 2" class="dp-step-body">

            <div class="dp-field">
              <div class="dp-row-label">Width</div>
              <div class="dp-inline">
                <input class="dp-input" type="number" step="0.1" :min="fd(4)" :max="fd(parseFloat(wallWidth) - 0.33)" :value="fd(activeEncWidth)" @input="onEncWidthInput"/>
                <span class="dp-unit">{{ dispUnit }}</span>
                <span class="dp-muted">{{ fmtFtIn(activeEncWidth) }}</span>
              </div>
              <input class="dp-slider" type="range" :min="fd(4)" :max="fd(parseFloat(wallWidth) - 0.33)" step="0.1" :value="fd(activeEncWidth)" @input="onEncWidthInput"/>
              <p v-if="!isNet && screenWidthFt > activeEncWidth" class="dp-warn">Screen is wider than enclosure</p>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-row-label">Height</div>
              <div class="dp-inline">
                <input class="dp-input" type="number" step="0.1" :min="fd(4)" :max="fd(parseFloat(wallHeight) - 0.33)" :value="fd(activeEncHeight)" @input="onEncHeightInput"/>
                <span class="dp-unit">{{ dispUnit }}</span>
                <span class="dp-muted">{{ fmtFtIn(activeEncHeight) }}</span>
              </div>
              <input class="dp-slider" type="range" :min="fd(4)" :max="fd(parseFloat(wallHeight) - 0.33)" step="0.1" :value="fd(activeEncHeight)" @input="onEncHeightInput"/>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-row-label">Depth</div>
              <div class="dp-inline">
                <input class="dp-input" type="number" step="0.1" :min="fd(1)" :max="fd(parseFloat(wallDepth) - 0.33)" :value="fd(activeEncDepth)" @input="onEncDepthInput"/>
                <span class="dp-unit">{{ dispUnit }}</span>
              </div>
              <input class="dp-slider" type="range" :min="fd(1)" :max="fd(parseFloat(wallDepth) - 0.33)" step="0.1" :value="fd(activeEncDepth)" @input="onEncDepthInput"/>
            </div>

            <button class="dp-continue" @click.stop="advance(2)">Continue <span class="dp-arr">→</span></button>
          </div>
        </transition>
      </div>

      <!-- ── STEP 4: Screen (hidden in net mode) ── -->
      <div class="dp-step" :class="stepCls(3)" v-show="displayType !== 'net'">
        <div class="dp-step-hdr" @click="clickStep(3)">
          <div class="dp-num">
            <svg v-if="reachedStep > 3" width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span v-else>4</span>
          </div>
          <span class="dp-ttl">Screen</span>
          <svg v-if="reachedStep >= 3" class="dp-chev" :class="{ open: openStep === 3 }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          <svg v-else class="dp-lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <transition name="slide">
          <div v-show="openStep === 3" class="dp-step-body">

            <div class="dp-field">
              <div class="dp-row-label">Screen Aspect Ratio</div>
              <div class="dp-inline">
                <select class="dp-select" :value="aspectRatio" @change="onARChange">
                  <option value="16:9">16:9 (HD)</option>
                  <option value="16:10">16:10 (WUXGA)</option>
                  <option value="4:3">4:3 (Standard)</option>
                  <option value="1:1">1:1 (Square)</option>
                </select>
                <div class="dp-ar-preview" :style="arPreviewStyle"/>
              </div>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-row-label">
                Desired Screen Size
                <button class="dp-swap-btn" @click="screenDiagMode = !screenDiagMode" title="Switch input mode">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 16V4m0 0L3 8m4-4l4 4"/><path d="M17 8v12m0 0l4-4m-4 4l-4-4"/>
                  </svg>
                </button>
              </div>
              <template v-if="!screenDiagMode">
                <div class="dp-inline">
                  <span class="dp-dim-lbl">H</span>
                  <input class="dp-input sm" type="number" :step="isMetric ? 1 : 0.5" :value="scrFd(screenHeight)" @input="onHeightInput" :class="{ err: !heightValid }"/>
                  <span class="dp-unit">{{ screenUnitLabel }}</span>
                  <span class="dp-dim-lbl" style="margin-left:6px">W</span>
                  <input class="dp-input sm" type="number" :step="isMetric ? 1 : 0.5" :value="scrFd(screenWidthFt)" @input="onWidthInput" :class="{ err: !widthValid }"/>
                  <span class="dp-unit">{{ screenUnitLabel }}</span>
                </div>
                <div class="dp-diag-row">
                  <span class="dp-muted">Diagonal:</span>
                  <span class="dp-diag-val">{{ screenDiagVal }}{{ screenUnitLabel }}</span>
                </div>
              </template>
              <template v-else>
                <div class="dp-inline">
                  <span class="dp-dim-lbl">Diag</span>
                  <input class="dp-input" type="number" :step="isMetric ? 1 : 0.5" :value="screenDiagVal" @input="onDiagInput"/>
                  <span class="dp-unit">{{ screenUnitLabel }}</span>
                </div>
                <div class="dp-diag-row">
                  <span class="dp-muted">H × W:</span>
                  <span class="dp-diag-val">{{ scrFd(screenHeight) }} × {{ scrFd(screenWidthFt) }}{{ screenUnitLabel }}</span>
                </div>
              </template>
            </div>

            <button class="dp-continue" @click.stop="advance(3)">Continue <span class="dp-arr">→</span></button>
          </div>
        </transition>
      </div>

      <!-- ── STEP 5: Hitting Position ── -->
      <div class="dp-step" :class="stepCls(4)">
        <div class="dp-step-hdr" @click="clickStep(4)">
          <div class="dp-num">
            <svg v-if="reachedStep > 4" width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span v-else>{{ displayType === 'net' ? 4 : 5 }}</span>
          </div>
          <span class="dp-ttl">Hitting Position</span>
          <svg v-if="reachedStep >= 4" class="dp-chev" :class="{ open: openStep === 4 }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          <svg v-else class="dp-lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <transition name="slide">
          <div v-show="openStep === 4" class="dp-step-body">

            <div class="dp-field">
              <div class="dp-row-label">Mat Size</div>
              <div class="dp-inline">
                <span class="dp-dim-lbl">W</span>
                <input class="dp-input sm" type="number" step="0.1" :min="fd(2)" :max="fd(10)" :value="fd(matWidth)" @input="e => commit('golfer/setMatWidth', df(e.target.value))"/>
                <span class="dp-unit">{{ dispUnit }}</span>
                <span class="dp-dim-lbl" style="margin-left:6px">D</span>
                <input class="dp-input sm" type="number" step="0.1" :min="fd(2)" :max="fd(6)" :value="fd(matDepth)" @input="e => commit('golfer/setMatDepth', df(e.target.value))"/>
                <span class="dp-unit">{{ dispUnit }}</span>
              </div>
            </div>

            <div class="dp-sep"/>

            <div class="dp-field">
              <div class="dp-row-label">{{ isNet ? 'Hitting Area to Net' : 'Hitting Area to Screen' }}</div>
              <div class="dp-inline">
                <input class="dp-input" type="number" step="0.1" :min="fd(2)" :max="fd(parseFloat(wallDepth))" :value="fd(hittingAreaToScreen)" @input="onHitInput" :class="{ err: !hitValid }"/>
                <span class="dp-unit">{{ dispUnit }}</span>
              </div>
              <input class="dp-slider" type="range" :min="fd(2)" :max="fd(parseFloat(wallDepth))" step="0.1" :value="fd(hittingAreaToScreen)" @input="onHitInput"/>
            </div>

            <button class="dp-continue" @click.stop="advance(4)">Finish Setup <span class="dp-arr">→</span></button>
          </div>
        </transition>
      </div>

      <!-- ── STEP 6: Ready ── -->
      <div class="dp-step" :class="stepCls(5)">
        <div class="dp-step-hdr" @click="clickStep(5)">
          <div class="dp-num done-star">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <span class="dp-ttl">Review</span>
          <svg v-if="reachedStep >= 5" class="dp-chev" :class="{ open: openStep === 5 }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          <svg v-else class="dp-lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <transition name="slide">
          <div v-show="openStep === 5" class="dp-step-body">
            <p class="dp-ready-msg">Drag any component in the 3D view to fine-tune its position. Tap any section above to make changes.</p>
            <div class="dp-summary">
              <div class="dp-sum-row"><span class="dp-sum-lbl">Room</span><span class="dp-sum-val">{{ fd(wallWidth) }} × {{ fd(wallHeight) }} × {{ fd(wallDepth) }} {{ dispUnit }}</span></div>
              <div class="dp-sum-row"><span class="dp-sum-lbl">{{ displayType === 'net' ? 'Net' : 'Enclosure' }}</span><span class="dp-sum-val">{{ fd(activeEncWidth) }} × {{ fd(activeEncHeight) }} × {{ fd(activeEncDepth) }} {{ dispUnit }}</span></div>
              <div class="dp-sum-row" v-if="displayType !== 'net'"><span class="dp-sum-lbl">Screen</span><span class="dp-sum-val">{{ fd(screenWidthFt) }} × {{ fd(screenHeight) }} {{ dispUnit }} · {{ aspectRatio }}</span></div>
              <div class="dp-sum-row"><span class="dp-sum-lbl">Display</span><span class="dp-sum-val" style="text-transform:capitalize">{{ displayType }}</span></div>
              <div class="dp-sum-row"><span class="dp-sum-lbl">{{ isNet ? 'To Net' : 'To Screen' }}</span><span class="dp-sum-val">{{ fd(hittingAreaToScreen) }} {{ dispUnit }}</span></div>
            </div>
            <button class="dp-save" @click="onSave">Validate My Setup</button>
          </div>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>
import unitMixin from '@/mixins/units'
const AR_MAP = { '16:9': 16/9, '16:10': 16/10, '4:3': 4/3, '1:1': 1 }

export default {
  name: 'ControlPanel',
  mixins: [unitMixin],
  data() {
    return {
      openStep: 0,
      reachedStep: 0,
      ceilOptions: [
        { value: 'drywall',  label: 'Drywall',    sub: 'Standard stud' },
        { value: 'concrete', label: 'Concrete',   sub: 'Masonry / block' },
        { value: 'wood',     label: 'Wood / Beam', sub: 'Exposed timber' },
        { value: 'other',    label: 'Other',      sub: 'Unsure / unusual' },
      ],
      screenDiagMode: false,
      golferCmLocal: 178,
    }
  },
  watch: {
    isMetric(newVal) {
      if (newVal) {
        const ft = parseInt(this.golferFt) || 5
        const inches = parseInt(this.golferIn) || 10
        this.golferCmLocal = Math.round((ft * 12 + inches) * 2.54)
      }
    },
  },
  computed: {
    // env
    displayType()   { return this.$store.state.env.displayType },
    computerType()  { return this.$store.state.env.computerType },
    handedness()    { return this.$store.state.env.handedness },
    showEnclosure() { return this.$store.state.env.showEnclosure },
    // golfer
    golferFt()  { return this.$store.state.golfer.golferHeight },
    golferIn()  { return this.$store.state.golfer.golferHeightIn },
    minRoomDepthFt() {
      const hitPos = parseFloat(this.hitPosition) || 8.5
      const matD   = parseFloat(this.matDepth) || 3
      return Math.max(9.5, hitPos + matD / 2 + 1)
    },
    minRoomDepth() { return this.fd(this.minRoomDepthFt) },
    // room
    wallHeight()      { return this.$store.state.wall.wallHeight },
    wallWidth()       { return this.$store.state.wall.wallWidth },
    wallDepth()       { return this.$store.state.wall.wallDepth },
    ceilingMaterial() { return this.$store.state.wall.ceilingMaterial },
    roomHValid() { const v = parseFloat(this.wallHeight); return v >= 7.5 && v <= 15 },
    roomWValid() { const v = parseFloat(this.wallWidth);  return v >= 9.5 && v <= 20 },
    roomDValid() { const v = parseFloat(this.wallDepth);  return v >= this.minRoomDepthFt && v <= 30 },
    // screen
    aspectRatio()    { return this.$store.state.screen.aspectRatio },
    screenHeight()   { return this.$store.state.screen.screenHeight },
    screenToCeiling(){ return this.$store.state.screen.screenToCeiling },
    screenWidthFt()  { return parseFloat(this.$store.state.screen.screenWidth) },
    arFloat()        { return AR_MAP[this.aspectRatio] || 16/9 },
    screenDiagonalIn() {
      const h = parseFloat(this.screenHeight), w = this.screenWidthFt
      return Math.sqrt(h*h + w*w) * 12
    },
    screenUnitLabel() { return this.isMetric ? 'cm' : '"' },
    screenDiagVal() {
      return this.isMetric
        ? Math.round(this.screenDiagonalIn * 2.54)
        : +this.screenDiagonalIn.toFixed(1)
    },
    heightValid() { const v = parseFloat(this.screenHeight); return v >= 3 && v <= 9 },
    widthValid()  { const v = this.screenWidthFt; return v >= 3 && v <= 20 },
    arPreviewStyle() {
      const h = 28, w = Math.round(h * this.arFloat)
      return { height: h+'px', width: w+'px', background:'#fff5f5', border:'1.5px solid #CD1B32', borderRadius:'2px', flexShrink: 0 }
    },
    // enclosure / net
    isNet() { return this.displayType === 'net' },
    activeEncWidth()  { return this.isNet ? this.$store.state.enclosure.netWidth  : this.$store.state.enclosure.encWidth  },
    activeEncHeight() { return this.isNet ? this.$store.state.enclosure.netHeight : this.$store.state.enclosure.encHeight },
    activeEncDepth()  { return this.isNet ? this.$store.state.enclosure.netDepth  : this.$store.state.enclosure.encDepth  },
    // hitting
    matWidth()   { return this.$store.state.golfer.matWidth },
    matDepth()   { return this.$store.state.golfer.matDepth },
    hitPosition(){ return this.$store.state.projector.hitPosition },
    screenOffsetFt() {
      return (this.isNet || (this.showEnclosure && this.displayType === 'projector')) ? 30 / 30.48 : 0
    },
    hittingAreaToScreen() {
      return parseFloat(this.hitPosition) - this.screenOffsetFt
    },
    hitValid() {
      const v = this.hittingAreaToScreen
      return v >= 2 && v <= parseFloat(this.wallDepth)
    },
  },
  methods: {
    commit(path, val) { this.$store.commit(path, val) },

    advance(stepIdx) {
      let next = stepIdx + 1
      if (this.isNet && next === 3) next = 4
      if (next > this.reachedStep) this.reachedStep = next
      this.openStep = next
      this.$store.commit('env/setOpenStep', next)
      if (stepIdx === 0) this.$store.commit('env/setCameraFocus', 'iso')
    },
    clickStep(i) {
      if (i > this.reachedStep) return
      const next = this.openStep === i ? -1 : i
      this.openStep = next
      this.$store.commit('env/setOpenStep', next)
    },
    stepCls(i) {
      return {
        'is-active': this.openStep === i,
        'is-done':   i < this.reachedStep,
        'is-locked': i > this.reachedStep,
      }
    },

    // Unit
    setUnit(u) { this.$store.commit('env/setUnit', u) },

    // Display
    setDisplay(v) {
      this.$store.commit('env/setDisplayType', v)
      this.$store.commit('env/setCameraFocus', 'display')
    },

    // Computer
    setComputer(v) {
      this.$store.commit('env/setComputerType', v)
      this.$store.commit('env/setCameraFocus', 'computer')
    },

    // Handedness
    setHand(v) { this.$store.commit('env/setHandedness', v) },

    // Golfer height
    onFtChange(e) {
      const ft = Math.min(8, Math.max(4, parseInt(e.target.value) || 5))
      const maxIn = ft >= 8 ? 1 : 11
      const inches = Math.min(maxIn, parseInt(this.golferIn) || 0)
      this.$store.commit('golfer/setGolferHeight', { ft: String(ft), inches: String(inches) })
    },
    onInChange(e) {
      const maxIn = parseInt(this.golferFt) >= 8 ? 1 : 11
      const v = Math.min(maxIn, Math.max(0, parseInt(e.target.value) || 0))
      this.$store.commit('golfer/setGolferHeight', { ft: this.golferFt, inches: String(v) })
    },
    onCmInput(e) {
      const cm = Math.min(244, Math.max(122, parseInt(e.target.value) || 178))
      this.golferCmLocal = cm
      const totalIn = Math.round(cm / 2.54)
      const ft = Math.floor(totalIn / 12)
      const inches = totalIn % 12
      this.$store.commit('golfer/setGolferHeight', { ft: String(ft), inches: String(inches), cm })
    },

    // Screen unit helpers (cm / inches, not m / ft)
    scrFd(ft) {
      const v = parseFloat(ft)
      return this.isMetric ? Math.round(v * 30.48) : +(v * 12).toFixed(1)
    },
    scrDf(displayVal) {
      const v = parseFloat(displayVal)
      return this.isMetric ? (v / 30.48).toFixed(3) : (v / 12).toFixed(3)
    },

    // Screen
    onARChange(e) {
      this.$store.commit('screen/setAspectRatio', e.target.value)
      this.$nextTick(() => this.recalcWidth())
    },
    onHeightInput(e) {
      this.$store.commit('screen/setScreenHeight', this.scrDf(e.target.value))
      this.recalcWidth()
    },
    onWidthInput(e) {
      this.$store.commit('screen/setScreenWidth', this.scrDf(e.target.value))
      this.recalcHeight()
    },
    onDiagInput(e) {
      const diagFt = parseFloat(this.scrDf(e.target.value))
      if (isNaN(diagFt) || diagFt <= 0) return
      const ar = this.arFloat
      const h = diagFt / Math.sqrt(ar * ar + 1)
      this.$store.commit('screen/setScreenHeight', h.toFixed(3))
      this.$store.commit('screen/setScreenWidth', (h * ar).toFixed(3))
    },
    recalcWidth() {
      const h = parseFloat(this.$store.state.screen.screenHeight)
      this.$store.commit('screen/setScreenWidth', (h * this.arFloat).toFixed(2))
    },
    recalcHeight() {
      const w = parseFloat(this.$store.state.screen.screenWidth)
      this.$store.commit('screen/setScreenHeight', (w / this.arFloat).toFixed(2))
    },

    // Enclosure / Net
    onEncWidthInput(e) {
      const v = Math.min(parseFloat(this.df(e.target.value)), parseFloat(this.wallWidth) - 0.33)
      this.commit(this.isNet ? 'enclosure/setNetWidth' : 'enclosure/setEncWidth', +v.toFixed(2))
    },
    onEncHeightInput(e) {
      const v = Math.min(parseFloat(this.df(e.target.value)), parseFloat(this.wallHeight) - 0.33)
      this.commit(this.isNet ? 'enclosure/setNetHeight' : 'enclosure/setEncHeight', +v.toFixed(2))
    },
    onEncDepthInput(e) {
      const v = Math.min(parseFloat(this.df(e.target.value)), parseFloat(this.wallDepth) - 0.33)
      this.commit(this.isNet ? 'enclosure/setNetDepth' : 'enclosure/setEncDepth', +v.toFixed(2))
    },

    // Hitting
    onHitInput(e) {
      const v = (parseFloat(this.df(e.target.value)) + this.screenOffsetFt).toFixed(2)
      this.$store.commit('projector/setHitPosition', v)
      this.$store.commit('golfer/setHitPosition', v)
    },

    // Save / Validate
    onSave() {
      this.$store.commit('env/setShowResults', true)
    },
  },
}
</script>

<style scoped>
/* ── Root ── */
.dp {
  position: absolute;
  top: 16px;
  right: 18px;
  width: 308px;
  height: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
  z-index: 100;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
}

@media (max-width: 1280px) { .dp { width: 284px; } }
@media (max-width: 1024px) { .dp { width: 264px; right: 12px; } }
@media (max-height: 620px) { .dp { top: 12px; right: 8px; height: calc(100% - 24px); } }

/* ── Header ── */
.dp-hdr {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid #1a1a1a;
  background: #000;
  flex-shrink: 0;
}
.dp-hdr-title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: #fff;
}
.dp-hdr-sub {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 400;
  color: rgba(255,255,255,0.4);
  margin-left: 4px;
  letter-spacing: 0.04em;
  text-transform: none;
}

/* ── Step list ── */
.dp-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
}

/* ── Individual step ── */
.dp-step {
  border-bottom: 1px solid var(--border-default);
  flex-shrink: 0;
}
.dp-step.is-active {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.dp-step-hdr {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 16px;
  cursor: pointer;
  user-select: none;
  transition: background var(--dur-base);
}
.dp-step-hdr:hover { background: var(--surface-1); }
.is-active .dp-step-hdr {
  background: #fff5f5;
  border-left: 2px solid var(--rap-red);
  padding-left: 14px;
}

/* Step number badge — DS stepper states */
.dp-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--border-default);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  color: var(--text-tertiary);
  flex-shrink: 0;
  transition: all var(--dur-base);
}
.is-active .dp-num {
  background: #fff;
  border-color: var(--rap-red);
  color: var(--rap-red);
  box-shadow: var(--ring-brand);
}
.is-done .dp-num {
  background: var(--rap-red);
  border-color: var(--rap-red);
  color: #fff;
}
.done-star {
  background: #fff;
  border-color: var(--border-default);
  color: var(--text-tertiary);
}
.is-active .done-star {
  background: #fff;
  border-color: var(--rap-red);
  color: var(--rap-red);
  box-shadow: var(--ring-brand);
}

/* Step title */
.dp-ttl {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  flex: 1;
  transition: color var(--dur-base);
}
.is-active .dp-ttl { color: var(--text-primary); }
.is-done .dp-ttl   { color: var(--text-secondary); }

/* Chevron */
.dp-chev {
  color: var(--border-default);
  transition: transform var(--dur-base);
  flex-shrink: 0;
}
.dp-chev.open { transform: rotate(180deg); }
.is-active .dp-chev { color: var(--text-tertiary); }

/* Lock icon */
.dp-lock { color: var(--border-default); flex-shrink: 0; }

/* Step body */
.dp-step-body {
  padding: 4px 16px 16px;
  background: var(--surface-0);
  overflow-y: auto;
  min-height: 0;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: var(--border-default) transparent;
}
.dp-step-body::-webkit-scrollbar { width: 3px; }
.dp-step-body::-webkit-scrollbar-thumb { background: var(--border-default); border-radius: 2px; }

/* Slide transition */
.slide-enter-active, .slide-leave-active { transition: opacity var(--dur-base), transform var(--dur-base); }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-6px); }

/* ── Form elements ── */
.dp-field { margin-top: 14px; }
.dp-field:first-child { margin-top: 6px; }

.dp-sep {
  height: 1px;
  background: var(--border-default);
  margin: 14px 0 0;
}

.dp-label, .dp-row-label {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.dp-swap-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  color: var(--text-tertiary);
  line-height: 1;
  display: flex;
  align-items: center;
  margin-left: auto;
}
.dp-swap-btn:hover { color: var(--text-primary); }

.dp-inline {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.dp-input {
  background: var(--surface-0);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 13px;
  padding: 6px 9px;
  width: 80px;
  outline: none;
  transition: border-color var(--dur-base), box-shadow var(--dur-base);
}
.dp-input.sm { width: 60px; }
.dp-input:focus {
  border-color: var(--rap-red);
  box-shadow: var(--ring-brand);
}
.dp-input.err {
  border-color: var(--rap-red);
  box-shadow: var(--ring-brand);
}

.dp-unit {
  font-family: var(--font-sans);
  font-size: 11px;
  color: var(--text-tertiary);
}

.dp-muted {
  font-family: var(--font-sans);
  font-size: 11px;
  color: var(--border-default);
}

.dp-dim-lbl {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.dp-pills {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.dp-pill {
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-default);
  background: var(--surface-1);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  user-select: none;
  transition: all var(--dur-base);
}
.dp-pill:hover { background: #ebebeb; border-color: var(--border-strong); }
.dp-pill.active {
  background: var(--rap-red);
  border-color: var(--rap-red);
  color: #fff;
}

.dp-select {
  background: var(--surface-0);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 12px;
  padding: 6px 9px;
  outline: none;
  cursor: pointer;
  flex: 1;
  transition: border-color var(--dur-base);
}
.dp-select:focus { border-color: var(--rap-red); }

.dp-slider {
  width: 100%;
  height: 3px;
  accent-color: var(--rap-red);
  cursor: pointer;
  margin-top: 8px;
  display: block;
}

/* AR preview */
.dp-ar-preview { flex-shrink: 0; }

/* Diagonal display */
.dp-diag-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
}
.dp-diag-val {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Ceiling material cards */
.dp-mat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}
.dp-mat-card {
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 9px 10px;
  cursor: pointer;
  background: var(--surface-1);
  transition: all var(--dur-base);
  user-select: none;
}
.dp-mat-card:hover { background: #ebebeb; border-color: var(--border-strong); }
.dp-mat-card.active {
  border-color: var(--rap-red);
  background: #fff5f5;
}
.dp-mat-name {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-primary);
}
.dp-mat-card.active .dp-mat-name { color: var(--rap-red); }
.dp-mat-sub {
  font-family: var(--font-sans);
  font-size: 10px;
  color: var(--text-tertiary);
  margin-top: 2px;
}

/* Continue button */
.dp-continue {
  width: 100%;
  margin-top: 18px;
  background: var(--rap-red);
  border: none;
  border-radius: var(--radius-md);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: var(--tracking-cta);
  text-transform: uppercase;
  padding: 10px 16px;
  cursor: pointer;
  transition: background var(--dur-base);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.dp-continue:hover { background: var(--rap-red-hover); }
.dp-arr { font-size: 13px; }

/* Ready step */
.dp-ready-msg {
  font-family: var(--font-sans);
  font-size: 12px;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-top: 6px;
  margin-bottom: 14px;
}
.dp-summary {
  background: var(--surface-1);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 14px;
}
.dp-sum-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dp-sum-lbl {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}
.dp-sum-val {
  font-family: var(--font-sans);
  font-size: 11px;
  color: var(--text-primary);
  font-weight: 500;
}
.dp-save {
  width: 100%;
  background: var(--rap-red);
  border: none;
  border-radius: var(--radius-md);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: var(--tracking-cta);
  text-transform: uppercase;
  padding: 12px;
  cursor: pointer;
  transition: background var(--dur-base);
  box-shadow: 0 2px 8px rgba(205,27,50,0.35);
}
.dp-save:hover { background: var(--rap-red-hover); }

.dp-warn {
  font-family: var(--font-sans);
  font-size: 10px;
  color: #d97706;
  margin: 5px 0 0;
  line-height: 1.4;
}
</style>
