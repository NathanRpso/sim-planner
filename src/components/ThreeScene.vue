<template>
  <div class="canvas-area" ref="container">
    <div v-if="!readOnly" class="controls-hint">Left drag: rotate &nbsp;|&nbsp; Right drag: pan &nbsp;|&nbsp; Scroll: zoom</div>
    <div v-if="glbLoading" class="golfer-status">Loading golfer model…</div>
    <div v-if="glbError" class="golfer-status golfer-error">⚠ golfer.glb not found — place the file in /public</div>

    <div v-if="!readOnly" class="vc-bar">

      <!-- View group -->
      <div class="vc-group">
        <div v-if="openPanel === 'view'" class="vc-flyout">
          <button class="vc-btn" :class="{ 'vc-active': activeView === 'iso' }" @click="setView('iso')" title="3D view">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><g transform="translate(2.000 2.000) scale(1.19048)"><path d="M 0.051 6.717 C -0.363 6.717 -0.699 7.052 -0.699 7.467 C -0.699 7.881 -0.363 8.217 0.051 8.217 L 0.051 7.467 L 0.051 6.717 Z M 6.717 16.749 C 6.717 17.163 7.052 17.499 7.467 17.499 C 7.881 17.499 8.217 17.163 8.217 16.749 L 7.467 16.749 L 6.717 16.749 Z M 5.417 0.873 C 5.417 0.459 5.081 0.123 4.667 0.123 C 4.252 0.123 3.917 0.459 3.917 0.873 L 4.667 0.873 L 5.417 0.873 Z M 14.933 4.667 L 14.933 5.417 L 14.933 5.417 L 14.933 4.667 Z M 15.927 5.417 C 16.341 5.417 16.677 5.081 16.677 4.667 C 16.677 4.252 16.341 3.917 15.927 3.917 L 15.927 4.667 L 15.927 5.417 Z M 10.45 16.322 C 10.45 16.736 10.786 17.072 11.2 17.072 C 11.614 17.072 11.95 16.736 11.95 16.322 L 11.2 16.322 L 10.45 16.322 Z M 15.927 12.883 C 16.341 12.883 16.677 12.548 16.677 12.133 C 16.677 11.719 16.341 11.383 15.927 11.383 L 15.927 12.133 L 15.927 12.883 Z M 16.8 8.4 L 16.05 8.4 C 16.05 12.625 12.625 16.05 8.4 16.05 L 8.4 16.8 L 8.4 17.55 C 13.453 17.55 17.55 13.453 17.55 8.4 L 16.8 8.4 Z M 8.4 16.8 L 8.4 16.05 C 4.175 16.05 0.75 12.625 0.75 8.4 L 0 8.4 L -0.75 8.4 C -0.75 13.453 3.347 17.55 8.4 17.55 L 8.4 16.8 Z M 0 8.4 L 0.75 8.4 C 0.75 4.175 4.175 0.75 8.4 0.75 L 8.4 0 L 8.4 -0.75 C 3.347 -0.75 -0.75 3.347 -0.75 8.4 L 0 8.4 Z M 8.4 0 L 8.4 0.75 C 12.625 0.75 16.05 4.175 16.05 8.4 L 16.8 8.4 L 17.55 8.4 C 17.55 3.347 13.453 -0.75 8.4 -0.75 L 8.4 0 Z M 0.051 7.467 L 0.051 8.217 L 1.867 8.217 L 1.867 7.467 L 1.867 6.717 L 0.051 6.717 L 0.051 7.467 Z M 3.733 9.333 L 2.983 9.333 L 2.983 10.267 L 3.733 10.267 L 4.483 10.267 L 4.483 9.333 L 3.733 9.333 Z M 7.467 14 L 6.717 14 L 6.717 16.749 L 7.467 16.749 L 8.217 16.749 L 8.217 14 L 7.467 14 Z M 5.6 12.133 L 5.6 12.883 C 6.217 12.883 6.717 13.383 6.717 14 L 7.467 14 L 8.217 14 C 8.217 12.555 7.045 11.383 5.6 11.383 L 5.6 12.133 Z M 3.733 10.267 L 2.983 10.267 C 2.983 11.712 4.155 12.883 5.6 12.883 L 5.6 12.133 L 5.6 11.383 C 4.983 11.383 4.483 10.883 4.483 10.267 L 3.733 10.267 Z M 1.867 7.467 L 1.867 8.217 C 2.483 8.217 2.983 8.717 2.983 9.333 L 3.733 9.333 L 4.483 9.333 C 4.483 7.888 3.312 6.717 1.867 6.717 L 1.867 7.467 Z M 4.667 0.873 L 3.917 0.873 L 3.917 2.333 L 4.667 2.333 L 5.417 2.333 L 5.417 0.873 L 4.667 0.873 Z M 7 4.667 L 7 5.417 L 7.467 5.417 L 7.467 4.667 L 7.467 3.917 L 7 3.917 L 7 4.667 Z M 14.933 4.667 L 14.933 5.417 L 15.927 5.417 L 15.927 4.667 L 15.927 3.917 L 14.933 3.917 L 14.933 4.667 Z M 13.067 6.533 L 13.817 6.533 C 13.817 5.917 14.317 5.417 14.933 5.417 L 14.933 4.667 L 14.933 3.917 C 13.488 3.917 12.317 5.088 12.317 6.533 L 13.067 6.533 Z M 11.2 8.4 L 11.2 9.15 C 12.645 9.15 13.817 7.978 13.817 6.533 L 13.067 6.533 L 12.317 6.533 C 12.317 7.15 11.817 7.65 11.2 7.65 L 11.2 8.4 Z M 9.333 6.533 L 8.583 6.533 C 8.583 7.978 9.755 9.15 11.2 9.15 L 11.2 8.4 L 11.2 7.65 C 10.583 7.65 10.083 7.15 10.083 6.533 L 9.333 6.533 Z M 7.467 4.667 L 7.467 5.417 C 8.083 5.417 8.583 5.917 8.583 6.533 L 9.333 6.533 L 10.083 6.533 C 10.083 5.088 8.912 3.917 7.467 3.917 L 7.467 4.667 Z M 4.667 2.333 L 3.917 2.333 C 3.917 4.036 5.297 5.417 7 5.417 L 7 4.667 L 7 3.917 C 6.126 3.917 5.417 3.208 5.417 2.333 L 4.667 2.333 Z M 11.2 16.322 L 11.95 16.322 L 11.95 14 L 11.2 14 L 10.45 14 L 10.45 16.322 L 11.2 16.322 Z M 13.067 12.133 L 13.067 12.883 L 15.927 12.883 L 15.927 12.133 L 15.927 11.383 L 13.067 11.383 L 13.067 12.133 Z M 11.2 14 L 11.95 14 C 11.95 13.383 12.45 12.883 13.067 12.883 L 13.067 12.133 L 13.067 11.383 C 11.622 11.383 10.45 12.555 10.45 14 L 11.2 14 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>
            <span>3D</span>
          </button>
          <button class="vc-btn" :class="{ 'vc-active': activeView === 'rear' }" @click="setView('rear')" title="Rear view">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><g transform="translate(2.000 2.000) scale(1.19048)"><path d="M -0.53 12.07 C -0.823 12.363 -0.823 12.837 -0.53 13.13 C -0.237 13.423 0.237 13.423 0.53 13.13 L 0 12.6 L -0.53 12.07 Z M 4.815 7.785 L 5.345 8.315 L 5.345 8.315 L 4.815 7.785 Z M 7.785 7.785 L 8.315 7.255 L 8.315 7.255 L 7.785 7.785 Z M 12.07 13.13 C 12.363 13.423 12.837 13.423 13.13 13.13 C 13.423 12.837 13.423 12.363 13.13 12.07 L 12.6 12.6 L 12.07 13.13 Z M 9.97 9.97 C 9.677 10.263 9.677 10.737 9.97 11.03 C 10.263 11.323 10.737 11.323 11.03 11.03 L 10.5 10.5 L 9.97 9.97 Z M 15.135 8.835 L 14.605 9.365 L 14.605 9.365 L 15.135 8.835 Z M 16.27 11.03 C 16.563 11.323 17.037 11.323 17.33 11.03 C 17.623 10.737 17.623 10.263 17.33 9.97 L 16.8 10.5 L 16.27 11.03 Z M 10.5 3.45 C 10.086 3.45 9.75 3.786 9.75 4.2 C 9.75 4.614 10.086 4.95 10.5 4.95 L 10.5 4.2 L 10.5 3.45 Z M 10.51 4.95 C 10.925 4.95 11.26 4.614 11.26 4.2 C 11.26 3.786 10.925 3.45 10.51 3.45 L 10.51 4.2 L 10.51 4.95 Z M 2.1 0 L 2.1 0.75 L 14.7 0.75 L 14.7 0 L 14.7 -0.75 L 2.1 -0.75 L 2.1 0 Z M 16.8 2.1 L 16.05 2.1 L 16.05 14.7 L 16.8 14.7 L 17.55 14.7 L 17.55 2.1 L 16.8 2.1 Z M 14.7 16.8 L 14.7 16.05 L 2.1 16.05 L 2.1 16.8 L 2.1 17.55 L 14.7 17.55 L 14.7 16.8 Z M 0 14.7 L 0.75 14.7 L 0.75 2.1 L 0 2.1 L -0.75 2.1 L -0.75 14.7 L 0 14.7 Z M 2.1 16.8 L 2.1 16.05 C 1.354 16.05 0.75 15.446 0.75 14.7 L 0 14.7 L -0.75 14.7 C -0.75 16.274 0.526 17.55 2.1 17.55 L 2.1 16.8 Z M 16.8 14.7 L 16.05 14.7 C 16.05 15.446 15.446 16.05 14.7 16.05 L 14.7 16.8 L 14.7 17.55 C 16.274 17.55 17.55 16.274 17.55 14.7 L 16.8 14.7 Z M 14.7 0 L 14.7 0.75 C 15.446 0.75 16.05 1.354 16.05 2.1 L 16.8 2.1 L 17.55 2.1 C 17.55 0.526 16.274 -0.75 14.7 -0.75 L 14.7 0 Z M 2.1 0 L 2.1 -0.75 C 0.526 -0.75 -0.75 0.526 -0.75 2.1 L 0 2.1 L 0.75 2.1 C 0.75 1.354 1.354 0.75 2.1 0.75 L 2.1 0 Z M 0 12.6 L 0.53 13.13 L 5.345 8.315 L 4.815 7.785 L 4.285 7.255 L -0.53 12.07 L 0 12.6 Z M 7.785 7.785 L 7.255 8.315 L 12.07 13.13 L 12.6 12.6 L 13.13 12.07 L 8.315 7.255 L 7.785 7.785 Z M 4.815 7.785 L 5.345 8.315 C 5.873 7.788 6.727 7.788 7.255 8.315 L 7.785 7.785 L 8.315 7.255 C 7.202 6.142 5.398 6.142 4.285 7.255 L 4.815 7.785 Z M 10.5 10.5 L 11.03 11.03 L 12.695 9.365 L 12.165 8.835 L 11.635 8.305 L 9.97 9.97 L 10.5 10.5 Z M 15.135 8.835 L 14.605 9.365 L 16.27 11.03 L 16.8 10.5 L 17.33 9.97 L 15.665 8.305 L 15.135 8.835 Z M 12.165 8.835 L 12.695 9.365 C 13.223 8.838 14.077 8.838 14.605 9.365 L 15.135 8.835 L 15.665 8.305 C 14.552 7.192 12.748 7.192 11.635 8.305 L 12.165 8.835 Z M 10.5 4.2 L 10.5 4.95 L 10.51 4.95 L 10.51 4.2 L 10.51 3.45 L 10.5 3.45 L 10.5 4.2 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>
            <span>Rear</span>
          </button>
          <button class="vc-btn" :class="{ 'vc-active': activeView === 'top' }" @click="setView('top')" title="Top view">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><g transform="translate(2.000 3.111) scale(1.19048)"><path d="M 5.6 14.933 L 5.265 15.604 C 5.476 15.71 5.724 15.71 5.935 15.604 L 5.6 14.933 Z M 11.2 0 L 11.535 -0.671 C 11.324 -0.776 11.076 -0.776 10.865 -0.671 L 11.2 0 Z M 0.516 12.391 L 0.851 11.72 L 0.851 11.72 L 0.516 12.391 Z M 16.284 2.542 L 16.619 1.871 L 16.619 1.871 L 16.284 2.542 Z M 0 1.51 L -0.75 1.51 L -0.75 11.557 L 0 11.557 L 0.75 11.557 L 0.75 1.51 L 0 1.51 Z M 0.516 12.391 L 0.181 13.062 L 5.265 15.604 L 5.6 14.933 L 5.935 14.263 L 0.851 11.72 L 0.516 12.391 Z M 5.6 14.933 L 5.935 15.604 L 11.535 12.804 L 11.2 12.133 L 10.865 11.463 L 5.265 14.263 L 5.6 14.933 Z M 11.2 12.133 L 10.865 12.804 L 15.114 14.929 L 15.449 14.258 L 15.785 13.587 L 11.535 11.463 L 11.2 12.133 Z M 16.8 13.423 L 17.55 13.423 L 17.55 3.377 L 16.8 3.377 L 16.05 3.377 L 16.05 13.423 L 16.8 13.423 Z M 16.284 2.542 L 16.619 1.871 L 11.535 -0.671 L 11.2 0 L 10.865 0.671 L 15.949 3.213 L 16.284 2.542 Z M 11.2 0 L 10.865 -0.671 L 5.265 2.129 L 5.6 2.8 L 5.935 3.471 L 11.535 0.671 L 11.2 0 Z M 5.6 2.8 L 5.935 2.129 L 1.686 0.005 L 1.351 0.675 L 1.015 1.346 L 5.265 3.471 L 5.6 2.8 Z M 5.6 2.8 L 4.85 2.8 L 4.85 14.933 L 5.6 14.933 L 6.35 14.933 L 6.35 2.8 L 5.6 2.8 Z M 11.2 0 L 10.45 0 L 10.45 12.133 L 11.2 12.133 L 11.95 12.133 L 11.95 0 L 11.2 0 Z M 15.449 14.258 L 15.114 14.929 C 16.233 15.488 17.55 14.675 17.55 13.423 L 16.8 13.423 L 16.05 13.423 C 16.05 13.559 15.907 13.648 15.785 13.587 L 15.449 14.258 Z M 0 11.557 L -0.75 11.557 C -0.75 12.194 -0.39 12.777 0.181 13.062 L 0.516 12.391 L 0.851 11.72 C 0.789 11.689 0.75 11.626 0.75 11.557 L 0 11.557 Z M 16.8 3.377 L 17.55 3.377 C 17.55 2.739 17.19 2.156 16.619 1.871 L 16.284 2.542 L 15.949 3.213 C 16.011 3.244 16.05 3.307 16.05 3.377 L 16.8 3.377 Z M 0 1.51 L 0.75 1.51 C 0.75 1.374 0.893 1.285 1.015 1.346 L 1.351 0.675 L 1.686 0.005 C 0.567 -0.555 -0.75 0.259 -0.75 1.51 L 0 1.51 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>
            <span>Top</span>
          </button>
        </div>
        <button class="vc-trigger" :class="{ 'vc-trigger-on': openPanel === 'view' }" @click="togglePanel('view')" title="View">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><g transform="translate(2.000 2.000) scale(1.19048)"><path d="M 0.051 6.717 C -0.363 6.717 -0.699 7.052 -0.699 7.467 C -0.699 7.881 -0.363 8.217 0.051 8.217 L 0.051 7.467 L 0.051 6.717 Z M 6.717 16.749 C 6.717 17.163 7.052 17.499 7.467 17.499 C 7.881 17.499 8.217 17.163 8.217 16.749 L 7.467 16.749 L 6.717 16.749 Z M 5.417 0.873 C 5.417 0.459 5.081 0.123 4.667 0.123 C 4.252 0.123 3.917 0.459 3.917 0.873 L 4.667 0.873 L 5.417 0.873 Z M 14.933 4.667 L 14.933 5.417 L 14.933 5.417 L 14.933 4.667 Z M 15.927 5.417 C 16.341 5.417 16.677 5.081 16.677 4.667 C 16.677 4.252 16.341 3.917 15.927 3.917 L 15.927 4.667 L 15.927 5.417 Z M 10.45 16.322 C 10.45 16.736 10.786 17.072 11.2 17.072 C 11.614 17.072 11.95 16.736 11.95 16.322 L 11.2 16.322 L 10.45 16.322 Z M 15.927 12.883 C 16.341 12.883 16.677 12.548 16.677 12.133 C 16.677 11.719 16.341 11.383 15.927 11.383 L 15.927 12.133 L 15.927 12.883 Z M 16.8 8.4 L 16.05 8.4 C 16.05 12.625 12.625 16.05 8.4 16.05 L 8.4 16.8 L 8.4 17.55 C 13.453 17.55 17.55 13.453 17.55 8.4 L 16.8 8.4 Z M 8.4 16.8 L 8.4 16.05 C 4.175 16.05 0.75 12.625 0.75 8.4 L 0 8.4 L -0.75 8.4 C -0.75 13.453 3.347 17.55 8.4 17.55 L 8.4 16.8 Z M 0 8.4 L 0.75 8.4 C 0.75 4.175 4.175 0.75 8.4 0.75 L 8.4 0 L 8.4 -0.75 C 3.347 -0.75 -0.75 3.347 -0.75 8.4 L 0 8.4 Z M 8.4 0 L 8.4 0.75 C 12.625 0.75 16.05 4.175 16.05 8.4 L 16.8 8.4 L 17.55 8.4 C 17.55 3.347 13.453 -0.75 8.4 -0.75 L 8.4 0 Z M 0.051 7.467 L 0.051 8.217 L 1.867 8.217 L 1.867 7.467 L 1.867 6.717 L 0.051 6.717 L 0.051 7.467 Z M 3.733 9.333 L 2.983 9.333 L 2.983 10.267 L 3.733 10.267 L 4.483 10.267 L 4.483 9.333 L 3.733 9.333 Z M 7.467 14 L 6.717 14 L 6.717 16.749 L 7.467 16.749 L 8.217 16.749 L 8.217 14 L 7.467 14 Z M 5.6 12.133 L 5.6 12.883 C 6.217 12.883 6.717 13.383 6.717 14 L 7.467 14 L 8.217 14 C 8.217 12.555 7.045 11.383 5.6 11.383 L 5.6 12.133 Z M 3.733 10.267 L 2.983 10.267 C 2.983 11.712 4.155 12.883 5.6 12.883 L 5.6 12.133 L 5.6 11.383 C 4.983 11.383 4.483 10.883 4.483 10.267 L 3.733 10.267 Z M 1.867 7.467 L 1.867 8.217 C 2.483 8.217 2.983 8.717 2.983 9.333 L 3.733 9.333 L 4.483 9.333 C 4.483 7.888 3.312 6.717 1.867 6.717 L 1.867 7.467 Z M 4.667 0.873 L 3.917 0.873 L 3.917 2.333 L 4.667 2.333 L 5.417 2.333 L 5.417 0.873 L 4.667 0.873 Z M 7 4.667 L 7 5.417 L 7.467 5.417 L 7.467 4.667 L 7.467 3.917 L 7 3.917 L 7 4.667 Z M 14.933 4.667 L 14.933 5.417 L 15.927 5.417 L 15.927 4.667 L 15.927 3.917 L 14.933 3.917 L 14.933 4.667 Z M 13.067 6.533 L 13.817 6.533 C 13.817 5.917 14.317 5.417 14.933 5.417 L 14.933 4.667 L 14.933 3.917 C 13.488 3.917 12.317 5.088 12.317 6.533 L 13.067 6.533 Z M 11.2 8.4 L 11.2 9.15 C 12.645 9.15 13.817 7.978 13.817 6.533 L 13.067 6.533 L 12.317 6.533 C 12.317 7.15 11.817 7.65 11.2 7.65 L 11.2 8.4 Z M 9.333 6.533 L 8.583 6.533 C 8.583 7.978 9.755 9.15 11.2 9.15 L 11.2 8.4 L 11.2 7.65 C 10.583 7.65 10.083 7.15 10.083 6.533 L 9.333 6.533 Z M 7.467 4.667 L 7.467 5.417 C 8.083 5.417 8.583 5.917 8.583 6.533 L 9.333 6.533 L 10.083 6.533 C 10.083 5.088 8.912 3.917 7.467 3.917 L 7.467 4.667 Z M 4.667 2.333 L 3.917 2.333 C 3.917 4.036 5.297 5.417 7 5.417 L 7 4.667 L 7 3.917 C 6.126 3.917 5.417 3.208 5.417 2.333 L 4.667 2.333 Z M 11.2 16.322 L 11.95 16.322 L 11.95 14 L 11.2 14 L 10.45 14 L 10.45 16.322 L 11.2 16.322 Z M 13.067 12.133 L 13.067 12.883 L 15.927 12.883 L 15.927 12.133 L 15.927 11.383 L 13.067 11.383 L 13.067 12.133 Z M 11.2 14 L 11.95 14 C 11.95 13.383 12.45 12.883 13.067 12.883 L 13.067 12.133 L 13.067 11.383 C 11.622 11.383 10.45 12.555 10.45 14 L 11.2 14 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>
          <span>View</span>
        </button>
      </div>

      <!-- Show/Hide group -->
      <div class="vc-group">
        <div v-if="openPanel === 'show'" class="vc-flyout">
          <button class="vc-btn" :class="{ 'vc-off': !showMeasurements }" @click="toggleMeasurements" title="Toggle measurements">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="7" y2="12"/>
              <rect x="7" y="9" width="10" height="6" rx="3"/>
              <line x1="17" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="9" x2="3" y2="15"/>
              <line x1="21" y1="9" x2="21" y2="15"/>
            </svg>
            <span>Measurements</span>
          </button>
          <button class="vc-btn" :class="{ 'vc-off': !showGuidelines }" @click="toggleGuidelines" title="Toggle guidelines">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <line x1="2" y1="6" x2="22" y2="6" stroke-dasharray="3 2.5"/>
              <line x1="2" y1="12" x2="22" y2="12" stroke-dasharray="3 2.5"/>
              <line x1="2" y1="18" x2="22" y2="18" stroke-dasharray="3 2.5"/>
            </svg>
            <span>Guidelines</span>
          </button>
          <button class="vc-btn" :class="{ 'vc-off': !showEnclosure }" @click="toggleEnclosure" :title="displayType === 'net' ? 'Toggle net cage' : 'Toggle enclosure'">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="1"/>
              <line x1="3" y1="5" x2="7" y2="2"/>
              <line x1="21" y1="5" x2="17" y2="2"/>
              <line x1="7" y1="2" x2="17" y2="2"/>
            </svg>
            <span>{{ displayType === 'net' ? 'Net' : 'Enclosure' }}</span>
          </button>
        </div>
        <button class="vc-trigger" :class="{ 'vc-trigger-on': openPanel === 'show' }" @click="togglePanel('show')" title="Show / Hide">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><g transform="translate(2.000 4.664) scale(1.19048)"><path d="M 0 6.162 L -0.716 5.937 C -0.761 6.084 -0.761 6.241 -0.716 6.387 L 0 6.162 Z M 16.8 6.162 L 17.516 6.387 C 17.561 6.241 17.561 6.084 17.516 5.937 L 16.8 6.162 Z M 11.041 6.162 L 10.291 6.162 C 10.291 7.206 9.444 8.053 8.4 8.053 L 8.4 8.803 L 8.4 9.553 C 10.272 9.553 11.791 8.035 11.791 6.162 L 11.041 6.162 Z M 8.4 8.803 L 8.4 8.053 C 7.355 8.053 6.509 7.206 6.509 6.162 L 5.759 6.162 L 5.009 6.162 C 5.009 8.035 6.527 9.553 8.4 9.553 L 8.4 8.803 Z M 5.759 6.162 L 6.509 6.162 C 6.509 5.118 7.355 4.271 8.4 4.271 L 8.4 3.521 L 8.4 2.771 C 6.527 2.771 5.009 4.289 5.009 6.162 L 5.759 6.162 Z M 8.4 3.521 L 8.4 4.271 C 9.444 4.271 10.291 5.118 10.291 6.162 L 11.041 6.162 L 11.791 6.162 C 11.791 4.289 10.272 2.771 8.4 2.771 L 8.4 3.521 Z M 0 6.162 L 0.716 6.387 C 1.742 3.119 4.795 0.75 8.4 0.75 L 8.4 0 L 8.4 -0.75 C 4.121 -0.75 0.502 2.062 -0.716 5.937 L 0 6.162 Z M 8.4 0 L 8.4 0.75 C 12.005 0.75 15.058 3.119 16.084 6.387 L 16.8 6.162 L 17.516 5.937 C 16.298 2.062 12.679 -0.75 8.4 -0.75 L 8.4 0 Z M 16.8 6.162 L 16.084 5.937 C 15.058 9.205 12.005 11.574 8.4 11.574 L 8.4 12.324 L 8.4 13.074 C 12.679 13.074 16.298 10.262 17.516 6.387 L 16.8 6.162 Z M 8.4 12.324 L 8.4 11.574 C 4.795 11.574 1.742 9.205 0.716 5.937 L 0 6.162 L -0.716 6.387 C 0.502 10.262 4.121 13.074 8.4 13.074 L 8.4 12.324 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>
          <span>Show/Hide</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default {
  name: 'ThreeScene',

  props: { readOnly: { type: Boolean, default: false } },

  data() { return { glbLoading: true, glbError: false, showMeasurements: true, showGuidelines: true, activeView: 'iso', openPanel: null, dimmedGroups: { room: false, screen: false, golfer: false, projector: false, enclosure: false, mat: false } } },

  computed: {
    hCm() { return parseFloat(this.$store.state.wall.wallHeight) * 30.48 },
    wCm() { return parseFloat(this.$store.state.wall.wallWidth) * 30.48 },
    dCm() { return parseFloat(this.$store.state.wall.wallDepth) * 30.48 },
    sWCm() { return parseFloat(this.$store.state.screen.screenWidth) * 30.48 },
    sHCm() { return parseFloat(this.$store.state.screen.screenHeight) * 30.48 },
    aspectRatio() { return this.$store.state.screen.aspectRatio },
    sCY() {
      const toCeil = parseFloat(this.$store.state.screen.screenToCeiling) * 30.48
      return this.hCm - toCeil - this.sHCm / 2
    },
    pX() { return this.$store.state.projector.horizontal * 30.48 },
    pY() {
      const ctb = parseFloat(this.$store.state.projector.ceilingToBottom) * 30.48
      const m = this.$store.state.projector.selectedModel
      const lck = (m && m.lensCenterToLockHole) || 0
      return this.hCm - ctb - lck
    },
    pZ() { return parseFloat(this.$store.state.projector.hitPosition) * 30.48 },
    gZ() { return parseFloat(this.$store.state.golfer.hitPosition) * 30.48 },
    gHCm() { return this.$store.state.golfer.golferHeightCm },
    matWCm() { return parseFloat(this.$store.state.golfer.matWidth || 5) * 30.48 },
    matDCm() { return parseFloat(this.$store.state.golfer.matDepth || 3) * 30.48 },
    unit()        { return this.$store.state.env.unit },
    displayType()   { return this.$store.state.env.displayType },
    showEnclosure() { return this.$store.state.env.showEnclosure },
    computerType()  { return this.$store.state.env.computerType },
    handedness()   { return this.$store.state.env.handedness },
    cameraFocus()      { return this.$store.state.env.cameraFocus },
    ceilingMaterial()  { return this.$store.state.wall.ceilingMaterial },
    _mountY()          { return this.hCm > 320.5 ? 300 : this.hCm },
  },

  watch: {
    hCm()  { if (this._scene) { this._updateWalls(); this._updateGround(); this._updateCLM(); this._updateNet(); this._updateEnclosure(); this._updateScreen(); this._updateLines(); this._updateLabels() } },
    wCm()  { if (this._scene) { this._updateWalls(); this._updateGround(); this._updateScreen(); this._updateProjector(); this._clampLaptop(); this._updateLaptop(); this._updateNet(); this._updateEnclosure(); this._updateLines(); this._updateLabels() } },
    dCm()  { if (this._scene) { this._updateWalls(); this._updateGround(); this._clampLaptop(); this._updateLaptop(); this._updateNet(); this._updateEnclosure(); this._updateLines(); this._updateLabels() } },
    sHCm()       { if (this._scene) { this._updateScreen(); this._updateLines(); this._updateLabels() } },
    sWCm()       { if (this._scene) { this._updateScreen(); this._updateLines(); this._updateLabels() } },
    aspectRatio(){ if (this._scene) { this._updateScreen(); this._updateLines(); this._updateLabels() } },
    sCY()  { if (this._scene) { this._updateScreen(); this._updateLines(); this._updateLabels() } },
    pX()   { if (this._scene) { this._updateProjector(); this._updateLines(); this._updateLabels() } },
    pY()   { if (this._scene) { this._updateProjector(); this._updateLines(); this._updateLabels() } },
    pZ()   { if (this._scene) { this._updateProjector(); this._updateGolfer(); this._updateLines(); this._updateLabels() } },
    gZ()     { if (this._scene) { this._updateGolfer(); this._updateMat(); this._updateCLM(); this._updateLines(); this._updateLabels() } },
    gHCm()   { if (this._scene) { this._rebuildGolferFigure(); this._updateLabels(); this._onCameraFocus('golfer') } },
    matWCm() { if (this._scene) { this._updateMat(); this._updateLines(); this._updateLabels() } },
    matDCm() { if (this._scene) { this._updateMat(); this._updateLines(); this._updateLabels() } },
    '$store.state.env.openStep'() { if (this._scene) { this._updateLabels(); this._updateLines(); this._updateHoverDotVisibility() } },
    '$store.state.enclosure': { deep: true, handler() { if (this._scene) { this._updateEnclosure(); this._updateNet(); this._updateScreen(); this._updateLines(); this._updateLabels() } } },
    readOnly(val) {
      if (!this._scene) return
      if (val) {
        this._deselectAll()
        Object.keys(this.dimmedGroups).forEach(k => { this.dimmedGroups[k] = false })
        if (this._screenBorder)   this._screenBorder.visible   = false
        if (this._lightZoneLines) this._lightZoneLines.visible = false
        if (this._clmProjection)  this._clmProjection.visible  = false
        this._updateHoverDotVisibility()
        // ISO view centred on golfer; filmOffset shifts projection so golfer sits in the left half
        const { wCm, dCm, hCm, gZ, gHCm } = this
        const isLeft = this.$store.state.env.handedness === 'left'
        const sx = isLeft ? 1 : -1  // back-left for right-handed, back-right for left-handed
        const W = this._renderer.domElement.clientWidth  || 1440
        const H = this._renderer.domElement.clientHeight || 800
        // filmOffset = 0.5 * filmGauge * tan(vFOV/2) * aspect  → golfer at 25% from left
        this._camera.filmOffset = 0.5 * this._camera.filmGauge * Math.tan(25 * Math.PI / 180) * (W / H)
        this._camera.updateProjectionMatrix()
        this._camLerp = {
          pos:  new THREE.Vector3(sx * wCm * 1.495, hCm * 1.84, dCm * 1.553),
          look: new THREE.Vector3(0, gHCm * 0.5 + 30, gZ),
        }
        this.activeView = ''
      } else {
        const isNet = this.$store.state.env.displayType === 'net'
        if (this._screenBorder)   this._screenBorder.visible   = !isNet
        if (this._lightZoneLines) this._lightZoneLines.visible = !isNet && this.showGuidelines
        if (this._clmProjection)  this._clmProjection.visible  = this.showGuidelines
        this._updateHoverDotVisibility()
        this._camera.filmOffset = 0
        this._camera.updateProjectionMatrix()
      }
      this._updateLabels()
      this._updateLines()
    },
    unit()        { if (this._scene) this._updateLabels() },
    ceilingMaterial(val) { if (this._scene) this._updateCeilingMaterial(val) },
    displayType(val)   { if (this._scene) this._updateDisplayType(val) },
    showEnclosure(val) {
      if (!this._scene) return
      const isNet = this.displayType === 'net'
      if (isNet) { if (this._netGroup) this._netGroup.visible = val }
      else        { if (this._encGroup) this._encGroup.visible = val }
      if (!isNet) this._updateScreen()
      this._updateLines()
      this._updateLabels()
    },
    computerType(val)  { if (this._scene) this._updateComputerType(val) },
    handedness(val)   { if (this._scene) { this._updateHandedness(val); this._onCameraFocus('golfer') } },
    cameraFocus(val)  {
      if (val && this._scene) {
        this._onCameraFocus(val)
        this.$nextTick(() => this.$store.commit('env/setCameraFocus', null))
      }
    },
  },

  async mounted() {
    await this.$nextTick()
    const container = this.$refs.container
    const W = container.clientWidth || (window.innerWidth - 380)
    const H = container.clientHeight || window.innerHeight

    // ── Renderer ──────────────────────────────────────────────
    this._renderer = new THREE.WebGLRenderer({ antialias: true })
    this._renderer.setSize(W, H)
    this._renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this._renderer.shadowMap.enabled = true
    this._renderer.setClearColor(0xd0d0d0, 1)
    const c = this._renderer.domElement
    c.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;display:block;'
    container.appendChild(c)

    // ── CSS2D label renderer ──────────────────────────────────
    this._labelRenderer = new CSS2DRenderer()
    this._labelRenderer.setSize(W, H)
    const ld = this._labelRenderer.domElement
    ld.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;'
    container.appendChild(ld)

    // ── Scene ─────────────────────────────────────────────────
    this._scene = new THREE.Scene()
    this._scene.background = new THREE.Color(0xd0d0d0)
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5)
    hemi.position.set(0, 400, 200)
    this._scene.add(hemi)
    this._scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(200, 400, 300)
    this._scene.add(dir)

    // ── Camera ────────────────────────────────────────────────
    this._camera = new THREE.PerspectiveCamera(50, W / H, 1, 3000)
    this._camera.position.set(0, 300, 600) // temporary; setView('iso') below

    // ── Clock for animation mixer ─────────────────────────────
    this._clock = new THREE.Clock()
    this._mixer = null

    // ── OrbitControls ─────────────────────────────────────────
    this._controls = new OrbitControls(this._camera, this._renderer.domElement)
    this._controls.enableDamping = true
    this._controls.dampingFactor = 0.08
    this._controls.maxPolarAngle = Math.PI * 0.88
    this._controls.minDistance = 80
    this._controls.maxDistance = 2500
    this._controls.target.set(0, this.gHCm * 0.5, this.gZ)
    this._controls.update()
    this._controls.addEventListener('start', () => { this.activeView = '' })


    // ── Build scene ───────────────────────────────────────────
    this._imageOffsetX = 0
    this._imageOffsetY = 0
    this._clmOffsetX   = 0
    this._clmOffsetZ   = 0
    this._golferOffX   = 0
    this._golferOffZ   = 0
    this._laptopX      = this.wCm / 2 - 26       // default: against right wall
    this._laptopZ      = this.gZ
    this._laptopSelected = false
    this._buildWalls()
    this._buildCeilingTextures()
    this._updateCeilingMaterial(this.ceilingMaterial)
    this._buildGround()
    this._buildScreen()
    this._buildProjector()
    this._buildGolfer()
    this._buildMat()
    this._buildLaptop()
    this._updateComputerType(this.computerType)
    this._buildCLM()
    this._buildHitAreaLabels()
    this._buildCables()
    this._buildLabels()
    this._buildDragGuides()
    this._buildNet()
    this._buildEnclosure()
    this._buildLines()
    this._updateLines()
    this._updateLabels()
    this._setupDrag()

    window.addEventListener('resize', this._onResize)
    this.$store.commit('env/setInitialized', true)
    this.setView('iso')
    this._updateHoverDotVisibility()
    this._animate()
  },

  beforeUnmount() {
    cancelAnimationFrame(this._animId)
    window.removeEventListener('resize', this._onResize)
    const canvas = this._renderer?.domElement
    if (canvas && this._onPtrDown) {
      canvas.removeEventListener('pointerdown',  this._onPtrDown)
      canvas.removeEventListener('pointermove',  this._onPtrMove)
      canvas.removeEventListener('pointerup',    this._onPtrUp)
      canvas.removeEventListener('pointerleave', this._onPtrLeave)
    }
    this._controls?.dispose()
    this._renderer?.dispose()
  },

  methods: {
    _animate() {
      this._animId = requestAnimationFrame(this._animate.bind(this))
      const delta = this._clock.getDelta()
      this._mixer?.update(delta)
      if (this._camLerp) {
        this._camera.position.lerp(this._camLerp.pos, 0.09)
        this._controls.target.lerp(this._camLerp.look, 0.09)
        if (this._camera.position.distanceTo(this._camLerp.pos) < 3) {
          this._camera.position.copy(this._camLerp.pos)
          this._controls.target.copy(this._camLerp.look)
          this._camLerp = null
        }
      }
      this._controls?.update()
      this._renderer.render(this._scene, this._camera)
      this._labelRenderer.render(this._scene, this._camera)
    },

    _onResize() {
      const container = this.$refs.container
      if (!container) return
      const W = container.clientWidth
      const H = container.clientHeight
      if (!W || !H) return
      this._camera.aspect = W / H
      if (this.readOnly) {
        this._camera.filmOffset = 0.5 * this._camera.filmGauge * Math.tan(25 * Math.PI / 180) * (W / H)
      }
      this._camera.updateProjectionMatrix()
      this._renderer.setSize(W, H)
      this._labelRenderer.setSize(W, H)
    },

    // ── DRAG ──────────────────────────────────────────────────
    _setupDrag() {
      this._raycaster    = new THREE.Raycaster()
      this._wallPlane    = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
      this._dragState      = null
      this._projSelected   = false
      this._clmSelected    = false
      this._golferSelected = false
      this._screenSelected = false

      this._onPtrDown  = this._onPointerDown.bind(this)
      this._onPtrMove  = this._onPointerMove.bind(this)
      this._onPtrUp    = this._onPointerUp.bind(this)
      this._onPtrLeave = () => {
        for (const dot of [this._projHoverDot, this._clmHoverDot, this._golferHoverDot, this._laptopHoverDot, this._screenHoverDot]) {
          if (dot?.element) dot.element.classList.remove('hovered')
        }
      }

      const canvas = this._renderer.domElement
      canvas.addEventListener('pointerdown',  this._onPtrDown)
      canvas.addEventListener('pointermove',  this._onPtrMove)
      canvas.addEventListener('pointerup',    this._onPtrUp)
      canvas.addEventListener('pointerleave', this._onPtrLeave)
    },

    _ndc(e) {
      const rect = this._renderer.domElement.getBoundingClientRect()
      return new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width)  * 2 - 1,
        -((e.clientY - rect.top)  / rect.height) * 2 + 1
      )
    },

    _wallHit(e) {
      this._raycaster.setFromCamera(this._ndc(e), this._camera)
      const pt = new THREE.Vector3()
      return this._raycaster.ray.intersectPlane(this._wallPlane, pt) ? pt : null
    },

    _ceilHit(e) {
      this._raycaster.setFromCamera(this._ndc(e), this._camera)
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -this.hCm)
      const pt = new THREE.Vector3()
      return this._raycaster.ray.intersectPlane(plane, pt) ? pt : null
    },

    _floorHit(e) {
      this._raycaster.setFromCamera(this._ndc(e), this._camera)
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
      const pt = new THREE.Vector3()
      return this._raycaster.ray.intersectPlane(plane, pt) ? pt : null
    },

    _dotHit(e, dot, radiusPx = 30) {
      if (!dot || !dot.visible) return false
      const worldPos = new THREE.Vector3()
      dot.parent.getWorldPosition(worldPos)
      worldPos.project(this._camera)
      const rect = this._renderer.domElement.getBoundingClientRect()
      const sx = (worldPos.x * 0.5 + 0.5) * rect.width
      const sy = (-worldPos.y * 0.5 + 0.5) * rect.height
      const dx = e.clientX - rect.left - sx
      const dy = e.clientY - rect.top - sy
      return dx * dx + dy * dy <= radiusPx * radiusPx
    },

    _projHit(e)   { return !!this._projHoverDot   && (this._dotHit(e, this._projHoverDot)   || this._dotHit(e, this._projDragIcon)) },
    _clmHit(e)    { return !!this._clmHoverDot    && (this._dotHit(e, this._clmHoverDot)    || this._dotHit(e, this._clmDragIcon)) },
    _golferHit(e) { return !!this._golferHoverDot && (this._dotHit(e, this._golferHoverDot) || this._dotHit(e, this._golferDragIcon)) },
    _laptopHit(e) { return !!this._laptopHoverDot && (this._dotHit(e, this._laptopHoverDot) || this._dotHit(e, this._laptopDragIcon)) },

    _inProjection(pt) {
      const { sCY, sHCm, wCm, sWCm } = this
      const w   = Math.min(sWCm, wCm)
      const ix  = this._imageOffsetX ?? 0
      const iy  = this._imageOffsetY ?? 0
      const cy  = sCY + iy
      const PAD = 20
      return (
        pt.x >= ix - w / 2 - PAD && pt.x <= ix + w / 2 + PAD &&
        pt.y >= cy - sHCm / 2 - PAD && pt.y <= cy + sHCm / 2 + PAD
      )
    },

    _selectProjector(sel) {
      this._projSelected = sel
      if (sel) { this._undimScene(); this._dimSceneExcept(this._projGroup) }
      else this._undimScene()
      if (this._projDragIcon) this._projDragIcon.visible = sel
      if (this._projHoverDot) this._projHoverDot.visible = !sel
    },

    _selectCLM(sel) {
      this._clmSelected = sel
      if (sel) { this._undimScene(); this._dimSceneExcept(this._clmDevice) }
      else this._undimScene()
      if (this._clmDragIcon)  this._clmDragIcon.visible  = sel
      if (this._clmHoverDot)  this._clmHoverDot.visible  = !sel
    },

    _selectGolfer(sel) {
      this._golferSelected = sel
      if (sel) { this._undimScene(); this._dimSceneExcept(this._golferGroup) }
      else this._undimScene()
      if (this._golferDragIcon) this._golferDragIcon.visible = sel
      if (this._golferHoverDot) this._golferHoverDot.visible = !sel
    },

    _selectLaptop(sel) {
      this._laptopSelected = sel
      if (sel) { this._undimScene(); this._dimSceneExcept(this._laptopGroup) }
      else this._undimScene()
      if (this._laptopDragIcon) this._laptopDragIcon.visible = sel
      if (this._laptopHoverDot) this._laptopHoverDot.visible = !sel
    },

    _selectScreen(sel) {
      this._screenSelected = sel
      if (sel) { this._undimScene(); this._dimSceneExcept(this._screen, this._screenBorder) }
      else this._undimScene()
      if (this._screenDragIcon) this._screenDragIcon.visible = sel
      if (this._screenHoverDot) this._screenHoverDot.visible = !sel
    },

    _deselectAll() {
      if (this._projSelected)   this._selectProjector(false)
      if (this._clmSelected)    this._selectCLM(false)
      if (this._golferSelected) this._selectGolfer(false)
      if (this._laptopSelected) this._selectLaptop(false)
      if (this._screenSelected) this._selectScreen(false)
    },

    _L(cm) {
      const metric = this.$store.state.env.unit === 'metric'
      return metric ? `${(cm / 100).toFixed(1)} m` : `${(cm / 30.48).toFixed(1)} ft`
    },

    _dimSceneExcept(...skipObjects) {
      const skipSet = new Set()
      for (const obj of skipObjects) {
        if (obj) obj.traverse(o => skipSet.add(o))
      }
      if (this._dragGuideX) skipSet.add(this._dragGuideX)
      if (this._dragGuideZ) skipSet.add(this._dragGuideZ)
      if (this._labels) {
        for (const { div } of Object.values(this._labels)) div.style.opacity = '0.2'
      }
      const processed = new Set()
      const WASH = new THREE.Color(0xbbbbbb)
      this._scene.traverse(obj => {
        if (skipSet.has(obj)) return
        if ((obj.isMesh || obj.isLine || obj.isLineSegments) && obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          for (const mat of mats) {
            if (processed.has(mat)) continue
            processed.add(mat)
            if (!mat.userData._origColor) mat.userData._origColor = mat.color.clone()
            mat.color.lerpColors(mat.userData._origColor, WASH, 0.65)
            // Push textured / lit materials toward white via emissive
            if (mat.emissive !== undefined) {
              if (mat.userData._origEmissive === undefined) {
                mat.userData._origEmissive          = mat.emissive.clone()
                mat.userData._origEmissiveIntensity = mat.emissiveIntensity ?? 0
              }
              mat.emissive.setRGB(0.48, 0.48, 0.48)
              mat.emissiveIntensity = 1
            }
          }
        }
      })
    },

    _undimScene() {
      if (this._labels) {
        for (const { div } of Object.values(this._labels)) div.style.opacity = ''
      }
      this._scene.traverse(obj => {
        if ((obj.isMesh || obj.isLine || obj.isLineSegments) && obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          for (const mat of mats) {
            if (mat.userData?._origColor) {
              mat.color.copy(mat.userData._origColor)
              delete mat.userData._origColor
            }
            if (mat.userData?._origEmissive !== undefined) {
              mat.emissive.copy(mat.userData._origEmissive)
              mat.emissiveIntensity = mat.userData._origEmissiveIntensity
              delete mat.userData._origEmissive
              delete mat.userData._origEmissiveIntensity
            }
          }
        }
      })
    },

    _buildDragGuides() {
      const mkGuide = () => {
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3))
        const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x4caf50, opacity: 0.85, transparent: true }))
        line.visible = false
        this._scene.add(line)
        return line
      }
      this._dragGuideX = mkGuide()
      this._dragGuideZ = mkGuide()
    },

    _showDragGuides(objX, guideY, objZ) {
      if (!this._dragGuideX || !this._dragGuideZ) return
      this._setLine(this._dragGuideX, -this.wCm / 2, guideY, objZ, this.wCm / 2, guideY, objZ)
      this._setLine(this._dragGuideZ, objX, guideY, 1, objX, guideY, objZ)
      this._dragGuideX.visible = true
      this._dragGuideZ.visible = true
    },

    _showDragGuidesWall(objX, objY) {
      if (!this._dragGuideX || !this._dragGuideZ) return
      this._setLine(this._dragGuideX, -this.wCm / 2, objY, 0.5, this.wCm / 2, objY, 0.5)
      this._setLine(this._dragGuideZ, objX, 0, 0.5, objX, this.hCm, 0.5)
      this._dragGuideX.visible = true
      this._dragGuideZ.visible = true
    },

    _updateDragOverlay(text1, x1, y1, z1, text2, x2, y2, z2) {
      if (this._dragLabelX) {
        this._dragLabelX.div.textContent = text1
        this._dragLabelX.anchor.position.set(x1, y1, z1)
        this._dragLabelX.css2d.visible = true
      }
      if (this._dragLabelZ) {
        this._dragLabelZ.div.textContent = text2
        this._dragLabelZ.anchor.position.set(x2, y2, z2)
        this._dragLabelZ.css2d.visible = true
      }
    },

    // Constrain projector center (px, pz) to not be within 10cm of any CLM edge.
    // CLM box: 52 wide × 14 deep, centered at (0, clmZ).
    // Projector box: 28 wide × 22 deep. Combined half-extents + 10cm buffer:
    //   x: 26+10+14 = 50,  z: 7+10+11 = 28
    _clmConstrain(px, pz) {
      const clmX = this._clmOffsetX || 0
      const clmZ = this.gZ - 100 + (this._clmOffsetZ || 0)
      const fxMin = clmX - 50, fxMax = clmX + 50
      const fzMin = clmZ - 28, fzMax = clmZ + 28
      if (px < fxMin || px > fxMax || pz < fzMin || pz > fzMax) return [px, pz]
      const dl = Math.abs(px - fxMin), dr = Math.abs(px - fxMax)
      const df = Math.abs(pz - fzMin), db = Math.abs(pz - fzMax)
      const m  = Math.min(dl, dr, df, db)
      if (m === dl) return [fxMin, pz]
      if (m === dr) return [fxMax, pz]
      if (m === df) return [px, fzMin]
      return [px, fzMax]
    },

    _onPointerDown(e) {
      if (this.readOnly || e.button !== 0) return

      // Projector
      if (this._projHit(e)) {
        if (this._projSelected) {
          const pt = this._ceilHit(e)
          if (pt) {
            this._dragState = { type: 'device', startPt: pt.clone(), startPX: this.pX, startPZ: this.pZ }
            this._controls.enabled = false
            this._renderer.domElement.style.cursor = 'grabbing'
          }
        } else {
          this._deselectAll(); this._selectProjector(true)
        }
        e.stopPropagation(); return
      }

      // CLM
      if (this._clmHit(e)) {
        if (this._clmSelected) {
          const pt = this._ceilHit(e)
          if (pt) {
            this._dragState = { type: 'clm', startPt: pt.clone(), startOffX: this._clmOffsetX, startOffZ: this._clmOffsetZ }
            this._controls.enabled = false
            this._renderer.domElement.style.cursor = 'grabbing'
          }
        } else {
          this._deselectAll(); this._selectCLM(true)
        }
        e.stopPropagation(); return
      }

      // Golfer+Ball
      if (this._golferHit(e)) {
        if (this._golferSelected) {
          const pt = this._floorHit(e)
          if (pt) {
            this._dragState = { type: 'golfer', startPt: pt.clone(), startOffX: this._golferOffX, startOffZ: this._golferOffZ }
            this._controls.enabled = false
            this._renderer.domElement.style.cursor = 'grabbing'
          }
        } else {
          this._deselectAll(); this._selectGolfer(true)
        }
        e.stopPropagation(); return
      }

      // Laptop+table
      if (this._laptopHit(e)) {
        if (this._laptopSelected) {
          const pt = this._floorHit(e)
          if (pt) {
            this._dragState = { type: 'laptop', startPt: pt.clone(), startX: this._laptopX, startZ: this._laptopZ }
            this._controls.enabled = false
            this._renderer.domElement.style.cursor = 'grabbing'
          }
        } else {
          this._deselectAll(); this._selectLaptop(true)
        }
        e.stopPropagation(); return
      }

      // Projection screen — independent selectable (only in projector mode)
      if (this._dotHit(e, this._screenHoverDot) && this.$store.state.env.displayType === 'projector') {
        if (this._screenSelected) {
          const wallPt = this._wallHit(e)
          if (wallPt) {
            this._dragState = { type: 'projection', startX: wallPt.x, startY: wallPt.y, startImgX: this._imageOffsetX, startImgY: this._imageOffsetY }
            this._controls.enabled = false
            this._renderer.domElement.style.cursor = 'grabbing'
          }
        } else {
          this._deselectAll(); this._selectScreen(true)
        }
        e.stopPropagation(); return
      }

      // Click elsewhere → deselect
      this._deselectAll()
      this._controls.enabled = true
    },

    _onPointerMove(e) {
      if (this.readOnly) return
      if (!this._dragState) {
        // Screen-space dot proximity checks for hover
        const hitP = this._dotHit(e, this._projHoverDot)
        const hitC = !hitP && this._dotHit(e, this._clmHoverDot)
        const hitG = !hitP && !hitC && this._dotHit(e, this._golferHoverDot)
        const hitL = !hitP && !hitC && !hitG && this._dotHit(e, this._laptopHoverDot)
        const hitS = !hitP && !hitC && !hitG && !hitL && this._dotHit(e, this._screenHoverDot)

        // Update hover glow on dots
        for (const [dot, hit] of [[this._projHoverDot,hitP],[this._clmHoverDot,hitC],[this._golferHoverDot,hitG],[this._laptopHoverDot,hitL],[this._screenHoverDot,hitS]]) {
          if (dot?.element) dot.element.classList.toggle('hovered', !!hit)
        }

        if (hitP || hitC || hitG || hitL || hitS) {
          const onSelected = (hitP && this._projSelected) || (hitC && this._clmSelected) || (hitG && this._golferSelected) || (hitL && this._laptopSelected) || (hitS && this._screenSelected)
          this._renderer.domElement.style.cursor = onSelected ? 'grab' : 'pointer'
          return
        }
        this._renderer.domElement.style.cursor = ''
        return
      }

      if (this._dragState.type === 'projection') {
        const pt = this._wallHit(e); if (!pt) return
        const rawX = this._dragState.startImgX + (pt.x - this._dragState.startX)
        const rawY = this._dragState.startImgY + (pt.y - this._dragState.startY)
        const maxX = this.wCm / 2 - Math.min(this.sWCm, this.wCm) / 2
        const minY = this.sHCm / 2 - this.sCY
        const maxY = this.hCm - this.sHCm / 2 - this.sCY
        this._imageOffsetX = Math.max(-maxX, Math.min(maxX, rawX))
        this._imageOffsetY = Math.max(minY, Math.min(maxY, rawY))
        this._updateLightZone(); this._updateScreen(); this._updateLabels(); this._updateLines()
        const w = Math.min(this.sWCm, this.wCm)
        const cy = this.sCY + this._imageOffsetY
        this._updateDragOverlay(
          `X: ${this._L(this._imageOffsetX)}`, this._imageOffsetX, cy + this.sHCm / 2 + 28, 3,
          `Y: ${this._L(this._imageOffsetY)}`, this._imageOffsetX + w / 2 + 55, cy, 3
        )
        this._showDragGuidesWall(this._imageOffsetX, cy)
        return
      }

      if (this._dragState.type === 'device') {
        const pt = this._ceilHit(e); if (!pt) return
        const rawX = this._dragState.startPX + (pt.x - this._dragState.startPt.x)
        const rawZ = this._dragState.startPZ + (pt.z - this._dragState.startPt.z)
        const maxX = this.wCm / 2 - 20
        const cx = Math.max(-maxX, Math.min(maxX, rawX))
        const cz = Math.max(30, Math.min(this.dCm - 30, rawZ))
        const [fx, fz] = this._clmConstrain(cx, cz)
        this.$store.commit('projector/setHorizontal', fx / 30.48)
        this.$store.commit('projector/setHitPosition', fz / 30.48)
        this._updateDragOverlay(
          `X: ${this._L(fx)}`, fx, this.hCm - 10, fz,
          `D: ${this._L(fz)}`, fx + 55, this.hCm - 25, fz
        )
        this._showDragGuides(fx, this.hCm, fz)
        return
      }

      if (this._dragState.type === 'clm') {
        const pt = this._ceilHit(e); if (!pt) return
        const rawX = this._dragState.startOffX + (pt.x - this._dragState.startPt.x)
        const rawZ = this._dragState.startOffZ + (pt.z - this._dragState.startPt.z)
        const maxX = this.wCm / 2 - 36
        const defClmZ = this.gZ - 100
        const minZ = 17 - defClmZ, maxZ = this.dCm - 17 - defClmZ
        this._clmOffsetX = Math.max(-maxX, Math.min(maxX, rawX))
        this._clmOffsetZ = Math.max(minZ, Math.min(maxZ, rawZ))
        this._updateCLM()
        const clmAbsZ = this.gZ - 100 + this._clmOffsetZ
        this._updateDragOverlay(
          `X: ${this._L(this._clmOffsetX)}`, this._clmOffsetX, this.hCm - 10, clmAbsZ,
          `D: ${this._L(clmAbsZ)}`, this._clmOffsetX + 55, this.hCm - 25, clmAbsZ
        )
        this._showDragGuides(this._clmOffsetX, this.hCm, clmAbsZ)
        return
      }

      if (this._dragState.type === 'golfer') {
        const pt = this._floorHit(e); if (!pt) return
        const rawX = this._dragState.startOffX + (pt.x - this._dragState.startPt.x)
        const rawZ = this._dragState.startOffZ + (pt.z - this._dragState.startPt.z)
        const maxX = this.wCm / 2 - 30
        const minZ = 30 - this.gZ, maxZ = this.dCm - 30 - this.gZ
        this._golferOffX = Math.max(-maxX, Math.min(maxX, rawX))
        this._golferOffZ = Math.max(minZ, Math.min(maxZ, rawZ))
        this._updateGolfer()
        this._updateDragOverlay(
          `X: ${this._L(this._golferOffX)}`, this._golferOffX, 80, this.gZ + this._golferOffZ,
          `D: ${this._L(this.gZ + this._golferOffZ)}`, this._golferOffX + 55, 50, this.gZ + this._golferOffZ
        )
        this._showDragGuides(this._golferOffX, 3, this.gZ + this._golferOffZ)
        return
      }

      if (this._dragState.type === 'laptop') {
        const pt = this._floorHit(e); if (!pt) return
        const rawX = this._dragState.startX + (pt.x - this._dragState.startPt.x)
        const rawZ = this._dragState.startZ + (pt.z - this._dragState.startPt.z)
        const maxX = this.wCm / 2 - 21
        this._laptopX = Math.max(-maxX, Math.min(maxX, rawX))
        this._laptopZ = Math.max(30, Math.min(this.dCm - 30, rawZ))
        this._updateLaptop()
        this._updateDragOverlay(
          `X: ${this._L(this._laptopX)}`, this._laptopX, 80, this._laptopZ,
          `D: ${this._L(this._laptopZ)}`, this._laptopX + 55, 50, this._laptopZ
        )
        this._showDragGuides(this._laptopX, 3, this._laptopZ)
        return
      }
    },

    _onPointerUp() {
      if (!this._dragState) return
      if (this._dragLabelX) this._dragLabelX.css2d.visible = false
      if (this._dragLabelZ) this._dragLabelZ.css2d.visible = false
      if (this._dragGuideX) this._dragGuideX.visible = false
      if (this._dragGuideZ) this._dragGuideZ.visible = false
      this._dragState = null
      this._controls.enabled = true
      const anySelected = this._projSelected || this._clmSelected || this._golferSelected || this._laptopSelected || this._screenSelected
      this._renderer.domElement.style.cursor = anySelected ? 'grab' : ''
    },

    // ── VIEWPORT CONTROLS ─────────────────────────────────────
    togglePanel(name) {
      this.openPanel = this.openPanel === name ? null : name
    },
    toggleMeasurements() {
      this.showMeasurements = !this.showMeasurements
      if (this._scene) this._updateLabels()
    },

    toggleEnclosure() {
      this.$store.commit('env/setShowEnclosure', !this.showEnclosure)
    },

    _updateHoverDotVisibility() {
      const show = !this.readOnly && this.$store.state.env.openStep === 5
      const dots = [this._projHoverDot, this._clmHoverDot, this._golferHoverDot, this._laptopHoverDot, this._screenHoverDot]
      for (const d of dots) { if (d) d.visible = show }
    },

    toggleGuidelines() {
      this.showGuidelines = !this.showGuidelines
      const v = this.showGuidelines
      const isNet = this.$store.state.env.displayType === 'net'
      if (this._lines) Object.values(this._lines).forEach(l => { if (l) l.visible = v })
      if (this._lightZoneLines) this._lightZoneLines.visible = v && !isNet
      if (this._clmProjection)  this._clmProjection.visible  = v
    },

    setView(name) {
      this.activeView = name
      const { wCm, dCm, hCm, gZ, gHCm } = this
      const isLeft = this.$store.state.env.handedness === 'left'
      let pos, target
      if (name === 'iso') {
        // Back corner: right side for right-handed, left side for left-handed
        const sx = isLeft ? -1 : 1
        pos    = new THREE.Vector3(sx * wCm * 0.95, hCm * 1.25, dCm * 0.98)
        target = new THREE.Vector3(0, gHCm * 0.5, gZ)
      } else if (name === 'rear') {
        // Behind golfer, zoomed out to see full room
        pos    = new THREE.Vector3(0, hCm * 0.8, gZ + 700)
        target = new THREE.Vector3(0, gHCm * 0.5, gZ)
      } else if (name === 'top') {
        // High above, slightly behind so screen wall appears at top of viewport
        pos    = new THREE.Vector3(0, hCm * 4, dCm * 1.1)
        target = new THREE.Vector3(0, 0, gZ)
      }
      this._camera.position.copy(pos)
      this._controls.target.copy(target)
      this._controls.update()
    },

    // ── CEILING MATERIAL TEXTURES ─────────────────────────────
    _buildCeilingTextures() {
      const mk = (drawFn) => {
        const cv = document.createElement('canvas'); cv.width = 256; cv.height = 256
        const ctx = cv.getContext('2d')
        drawFn(ctx)
        const tex = new THREE.CanvasTexture(cv)
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping
        return tex
      }
      this._ceilTextures = {
        drywall: mk(ctx => {
          ctx.fillStyle = '#ccc8c0'; ctx.fillRect(0, 0, 256, 256)
          ctx.strokeStyle = 'rgba(140,135,128,0.35)'; ctx.lineWidth = 1
          for (let y = 64; y < 256; y += 64) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke() }
          ctx.fillStyle = 'rgba(110,105,100,0.45)'
          for (let x = 32; x < 256; x += 64)
            for (let y = 64; y < 256; y += 64) { ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill() }
        }),
        concrete: mk(ctx => {
          ctx.fillStyle = '#6e6e6e'; ctx.fillRect(0, 0, 256, 256)
          for (let i = 0; i < 700; i++) {
            const x = Math.random() * 256, y = Math.random() * 256, r = Math.random() * 2 + 0.4
            ctx.fillStyle = Math.random() > 0.5 ? 'rgba(155,155,155,0.4)' : 'rgba(40,40,40,0.3)'
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
          }
          ctx.strokeStyle = 'rgba(40,40,40,0.22)'; ctx.lineWidth = 1.2
          for (let y = 0; y < 256; y += 80) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke() }
          for (let x = 0; x < 256; x += 128) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 256); ctx.stroke() }
        }),
        wood: mk(ctx => {
          ctx.fillStyle = '#7a5230'; ctx.fillRect(0, 0, 256, 256)
          for (let i = 0; i < 18; i++) {
            const x = (i / 18) * 256
            ctx.strokeStyle = i % 2 === 0 ? 'rgba(255,195,130,0.2)' : 'rgba(50,18,0,0.18)'
            ctx.lineWidth = 8 + (i % 3) * 4
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.bezierCurveTo(x + 8, 80, x - 6, 170, x + 5, 256); ctx.stroke()
          }
          ctx.strokeStyle = 'rgba(35,12,0,0.28)'; ctx.lineWidth = 1.5
          for (let y = 0; y < 256; y += 38) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke() }
        }),
        other: mk(ctx => {
          ctx.fillStyle = '#8e8e8e'; ctx.fillRect(0, 0, 256, 256)
          ctx.strokeStyle = 'rgba(80,80,80,0.2)'; ctx.lineWidth = 1
          for (let i = 0; i < 256; i += 32) {
            ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke()
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke()
          }
        }),
      }
    },

    _updateCeilingMaterial(type) {
      if (!this._ceiling || !this._ceilTextures) return
      const tex = this._ceilTextures[type] || this._ceilTextures.other
      tex.repeat.set(4, 4)
      tex.needsUpdate = true
      this._ceiling.material.map = tex
      this._ceiling.material.color.set(0xffffff)
      this._ceiling.material.needsUpdate = true
    },

    // ── WALLS ─────────────────────────────────────────────────
    _buildWalls() {
      const mkPlane = (mat) => {
        const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat)
        this._scene.add(m)
        return m
      }
      const frontMat = new THREE.MeshPhongMaterial({ color: 0x9e9e9e, side: THREE.FrontSide })
      const sideMat  = new THREE.MeshPhongMaterial({ color: 0x757575, side: THREE.FrontSide })
      const ceilMat  = new THREE.MeshPhongMaterial({ color: 0xbdbdbd, side: THREE.DoubleSide, transparent: true, opacity: 0.5 })
      this._frontWall = mkPlane(frontMat)
      this._rightWall = mkPlane(sideMat);  this._rightWall.rotation.y = -Math.PI / 2
      this._leftWall  = mkPlane(sideMat);  this._leftWall.rotation.y  =  Math.PI / 2
      this._ceiling   = mkPlane(ceilMat);  this._ceiling.rotation.x   = -Math.PI / 2
      this._updateWalls()
    },

    _updateWalls() {
      const { hCm, wCm, dCm } = this
      this._frontWall.position.set(0, hCm/2, -0.5);      this._frontWall.scale.set(wCm, hCm, 1)
      this._rightWall.position.set(wCm/2, hCm/2, dCm/2); this._rightWall.scale.set(dCm, hCm, 1)
      this._leftWall.position.set(-wCm/2, hCm/2, dCm/2); this._leftWall.scale.set(dCm, hCm, 1)
      this._ceiling.position.set(0, hCm, dCm/2);          this._ceiling.scale.set(wCm, dCm, 1)
    },

    // ── GROUND ────────────────────────────────────────────────
    _buildGround() {
      const cv = document.createElement('canvas')
      cv.width = 256; cv.height = 256
      const ctx = cv.getContext('2d')
      const g = ctx.createLinearGradient(0, 0, 0, 256)
      g.addColorStop(0, '#2d5a1b'); g.addColorStop(0.5, '#4caf50'); g.addColorStop(1, '#388e3c')
      ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256)
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = i % 2 === 0 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.04)'
        ctx.fillRect(0, i * 32, 256, 32)
      }
      const tex = new THREE.CanvasTexture(cv)
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(4, 6)
      this._ground = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshPhongMaterial({ map: tex }))
      this._ground.rotation.x = -Math.PI / 2
      this._scene.add(this._ground)
      this._updateGround()
    },

    _updateGround() {
      this._ground.position.set(0, 0, this.dCm / 2)
      this._ground.scale.set(this.wCm, this.dCm, 1)
    },

    // ── SCREEN ────────────────────────────────────────────────
    _buildScreen() {
      const cv = document.createElement('canvas')
      cv.width = 512; cv.height = 288
      const ctx = cv.getContext('2d')
      const sky = ctx.createLinearGradient(0, 0, 0, 180)
      sky.addColorStop(0, '#87ceeb'); sky.addColorStop(1, '#b0e0ff')
      ctx.fillStyle = sky; ctx.fillRect(0, 0, 512, 180)
      const grn = ctx.createLinearGradient(0, 180, 0, 288)
      grn.addColorStop(0, '#4caf50'); grn.addColorStop(1, '#2e7d32')
      ctx.fillStyle = grn; ctx.fillRect(0, 180, 512, 108)
      ctx.fillStyle = '#66bb6a'; ctx.fillRect(150, 160, 212, 128)
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(280, 100); ctx.lineTo(280, 175); ctx.stroke()
      ctx.fillStyle = '#f44336'
      ctx.beginPath(); ctx.moveTo(280, 100); ctx.lineTo(310, 115); ctx.lineTo(280, 130); ctx.fill()
      ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(8, 8, 140, 26)
      ctx.fillStyle = '#fff'; ctx.font = 'bold 13px sans-serif'; ctx.fillText('HOLE 1 · PAR 4', 13, 26)
      const tex = new THREE.CanvasTexture(cv)
      this._screen = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshPhongMaterial({ map: tex, emissive: new THREE.Color(0.18, 0.18, 0.18), emissiveIntensity: 1 }))
      this._screen.position.z = 0.5
      this._scene.add(this._screen)
      const edges = new THREE.EdgesGeometry(new THREE.PlaneGeometry(1, 1))
      this._screenBorder = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x2196f3, linewidth: 2 }))
      this._screenBorder.position.z = 1
      this._scene.add(this._screenBorder)

      this._screenDotAnchor = new THREE.Object3D()
      this._scene.add(this._screenDotAnchor)
      this._screenDragIcon = this._makeDragIcon(this._screenDotAnchor, 0, 0, 0)
      this._screenHoverDot = this._makeHoverDot(this._screenDotAnchor, 0, 0, 0)
      this._updateScreen()
    },

    _getScreenZ() {
      return (this.showEnclosure && this.displayType === 'projector') ? 30.5 : 0.5
    },

    _updateScreen() {
      const { sWCm, sHCm, sCY, wCm } = this
      const w  = Math.min(sWCm, wCm)
      const ix = this._imageOffsetX ?? 0
      const iy = this._imageOffsetY ?? 0
      const sz = this._getScreenZ()
      this._screen.scale.set(w, sHCm, 1)
      this._screen.position.set(ix, sCY + iy, sz)
      this._screenBorder.scale.set(w, sHCm, 1)
      this._screenBorder.position.set(ix, sCY + iy, sz + 0.5)
      if (this._screenDotAnchor) this._screenDotAnchor.position.set(ix, sCY + iy, sz + 1)
      if (this._impactScreen) {
        const { w: encW, h: encH } = this._getEnclosureDims()
        this._impactScreen.scale.set(encW, encH, 1)
        this._impactScreen.position.set(0, encH / 2, 30)
      }
      this._updateLightZone()
    },

    // ── PROJECTOR ─────────────────────────────────────────────
    _buildProjector() {
      this._projGroup = new THREE.Group()

      // Short ceiling bracket arm
      const bracket = new THREE.Mesh(
        new THREE.BoxGeometry(3, 6, 3),
        new THREE.MeshPhongMaterial({ color: 0x1a1a1a })
      )
      bracket.position.set(0, -3, 20)
      this._projGroup.add(bracket)

      // Body sub-group: pivot at lens front face (0,-10,0) in main group space
      // rotation.x tilts back end up so lens angles slightly toward screen
      this._projBodyGroup = new THREE.Group()
      this._projBodyGroup.position.set(0, -10, 0)
      this._projBodyGroup.rotation.x = -0.12

      const body = new THREE.Mesh(
        new THREE.BoxGeometry(28, 10, 22),
        new THREE.MeshPhongMaterial({ color: 0x111111, emissive: 0x000000 })
      )
      body.position.set(0, 0, 17)
      this._projBody = body
      this._projBodyGroup.add(body)

      const lens = new THREE.Mesh(
        new THREE.CylinderGeometry(3.5, 3.5, 6, 12),
        new THREE.MeshPhongMaterial({ color: 0x444444 })
      )
      lens.rotation.x = Math.PI / 2
      lens.position.set(0, 0, 3)
      this._projBodyGroup.add(lens)

      this._projGroup.add(this._projBodyGroup)

      this._projDragIcon = this._makeDragIcon(this._projGroup, 0, -8, 17)
      this._projHoverDot = this._makeHoverDot(this._projGroup, 0, -8, 17)
      this._scene.add(this._projGroup)

      const projRod = new THREE.Mesh(
        new THREE.BoxGeometry(3, 1, 3),
        new THREE.MeshPhongMaterial({ color: 0x1a1a1a })
      )
      projRod.visible = false
      this._projDropRod = projRod
      this._scene.add(this._projDropRod)

      const lzGeo = new THREE.BufferGeometry()
      lzGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(48), 3))
      this._lightZoneLines = new THREE.LineSegments(lzGeo,
        new THREE.LineDashedMaterial({ color: 0xadd8e6, dashSize: 10, gapSize: 5, opacity: 0.6, transparent: true }))
      this._scene.add(this._lightZoneLines)
      this._updateProjector()
    },

    _updateProjector() {
      const { pX, hCm, pZ } = this
      const mountY = this._mountY
      this._projGroup.position.set(pX, mountY, pZ)

      if (this._projDropRod) {
        const dropActive = hCm > 320.5 && this.displayType !== 'net'
        this._projDropRod.visible = dropActive
        if (dropActive) {
          const rodH = hCm - 300
          this._projDropRod.scale.set(1, rodH, 1)
          this._projDropRod.position.set(pX, 300 + rodH / 2, pZ + 20)
        }
      }

      this._updateLightZone()
      this._updateCables()
    },

    _updateLightZone() {
      if (!this._lightZoneLines) return
      const { pX, hCm, pZ, sWCm, sHCm, sCY, wCm } = this
      const w  = Math.min(sWCm, wCm)
      const ix = this._imageOffsetX ?? 0
      const iy = this._imageOffsetY ?? 0
      const cy = sCY + iy
      const sz = this._getScreenZ()
      const tl = [-w/2 + ix, cy + sHCm/2, sz]
      const tr = [ w/2 + ix, cy + sHCm/2, sz]
      const bl = [-w/2 + ix, cy - sHCm/2, sz]
      const br = [ w/2 + ix, cy - sHCm/2, sz]
      const [ox, oy, oz] = [pX, this._mountY - 10, pZ]
      const v = [ox,oy,oz,...tl, ox,oy,oz,...tr, ox,oy,oz,...bl, ox,oy,oz,...br,
                 ...tl,...tr, ...tr,...br, ...br,...bl, ...bl,...tl]
      const pos = this._lightZoneLines.geometry.attributes.position
      for (let i = 0; i < 16; i++) pos.setXYZ(i, v[i*3], v[i*3+1], v[i*3+2])
      pos.needsUpdate = true
      this._lightZoneLines.computeLineDistances()
    },

    // ── GOLFER ────────────────────────────────────────────────
    _buildGolfer() {
      this._golferGroup = new THREE.Group()

      // Invisible hit proxy for raycasting (covers golfer figure + ball area)
      const proxy = new THREE.Mesh(
        new THREE.BoxGeometry(180, 210, 60),
        new THREE.MeshBasicMaterial({ visible: false })
      )
      proxy.position.set(-30, 105, 0)
      this._golferGroup.add(proxy)

      this._golferDragIcon = this._makeDragIcon(this._golferGroup, -30, 110, 0)
      this._golferHoverDot = this._makeHoverDot(this._golferGroup, -30, 110, 0)

      const teeMat = new THREE.MeshPhongMaterial({ color: 0x222222 })
      const teePost = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.4, 7, 10), teeMat)
      teePost.position.set(20, 3.5, 0)
      const teeCup = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 1.0, 1.5, 10), teeMat)
      teeCup.position.set(20, 7.5, 0)
      this._golferGroup.add(teePost, teeCup)

      const ball = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6), new THREE.MeshPhongMaterial({ color: 0xffffff }))
      ball.position.set(20, 10.5, 0); this._golferGroup.add(ball)

      this._scene.add(this._golferGroup)
      this._updateGolfer()
      this._tryLoadGolferGLB()
    },

    _tryLoadGolferGLB() {
      const loader = new GLTFLoader()
      loader.load(
        `${import.meta.env.BASE_URL}golfer.glb`,
        (gltf) => {
          this.glbLoading = false
          const model = gltf.scene
          model.position.set(0, 0, 0)
          model.rotation.set(0, 0, 0)
          model.scale.set(1, 1, 1)

          // Measured from console breakdown of this specific GLB:
          //   feet (Object_11 minY) = -0.094  →  essentially Y=0 ground contact
          //   head crown (Object_7 maxY) = 2.648 + 1.06 = 3.708
          //   native standing height = 3.708 - (-0.094) = 3.802 native units
          const NATIVE_HEIGHT = 3.802
          const NATIVE_FEET_Y  = -0.094

          const scale = this.gHCm / NATIVE_HEIGHT
          console.log(`[golfer.glb] scale=${scale.toFixed(2)} (${this.gHCm.toFixed(0)} cm / ${NATIVE_HEIGHT})`)

          model.scale.setScalar(scale)
          model.position.y = -NATIVE_FEET_Y * scale  // lifts feet exactly to Y=0
          model.position.x = -60
          model.rotation.y = Math.PI

          this._golferNativeHeight = NATIVE_HEIGHT
          this._golferNativeFeetY  = NATIVE_FEET_Y

          this._golferGLB = model
          this._golferGroup.add(model)
          this._usingGLB = true

          if (gltf.animations?.length > 0) {
            this._mixer = new THREE.AnimationMixer(model)
            const action = this._mixer.clipAction(gltf.animations[0])
            action.setLoop(THREE.LoopRepeat, Infinity)
            action.play()
          }
        },
        undefined,
        () => { this.glbLoading = false; this.glbError = true }
      )
    },

    _updateGolfer() {
      if (this._golferGroup) {
        const offX = this._golferOffX || 0
        const offZ = this._golferOffZ || 0
        this._golferGroup.position.set(offX, 0, this.gZ + offZ)
      }
    },

    _rebuildGolferFigure() {
      if (!this._golferGLB) return
      const nativeH    = this._golferNativeHeight || 3.802
      const nativeFeet = this._golferNativeFeetY  || -0.094
      const scale = this.gHCm / nativeH
      this._golferGLB.scale.setScalar(scale)
      this._golferGLB.position.y = -nativeFeet * scale
    },

    // ── MAT (separate from golfer group, sized by control inputs) ─
    _buildMat() {
      this._matGroup = new THREE.Group()
      this._matMesh  = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({ color: 0x1b5e20 })
      )
      this._matMesh.position.y = 1  // top face at y=2 (sits above floor)
      this._matGroup.add(this._matMesh)
      this._scene.add(this._matGroup)
      this._updateMat()
    },

    _updateMat() {
      if (!this._matGroup) return
      this._matMesh.scale.set(this.matWCm, 2, this.matDCm)
      this._matGroup.position.set(0, 0, this.gZ)
    },

    // ── LAPTOP ON SIDE TABLE ──────────────────────────────────
    _buildLaptop() {
      this._laptopGroup = new THREE.Group()
      const woodMat = new THREE.MeshPhongMaterial({ color: 0x8d6e63 })
      this._laptopWoodMat = woodMat
      const legGeo  = new THREE.BoxGeometry(4, 70, 4)
      for (const [lx, lz] of [[-25, -17], [25, -17], [-25, 17], [25, 17]]) {
        const leg = new THREE.Mesh(legGeo, woodMat)
        leg.position.set(lx, 35, lz)
        this._laptopGroup.add(leg)
      }
      const tableTop = new THREE.Mesh(new THREE.BoxGeometry(62, 3, 42), woodMat)
      tableTop.position.set(0, 71.5, 0)
      this._laptopGroup.add(tableTop)

      const darkMat = new THREE.MeshPhongMaterial({ color: 0x424242 })
      this._laptopDarkMat = darkMat
      const base = new THREE.Mesh(new THREE.BoxGeometry(36, 3, 26), darkMat)
      base.position.set(0, 74.5, 0)
      this._laptopGroup.add(base)
      this._laptopBaseMesh = base

      const ANGLE = 70 * Math.PI / 180
      const screen = new THREE.Mesh(
        new THREE.BoxGeometry(36, 1, 22),
        new THREE.MeshPhongMaterial({ color: 0x1a237e, emissive: 0x0d47a1, emissiveIntensity: 0.5 })
      )
      screen.rotation.x = ANGLE
      screen.position.set(0, 73 + 11 * Math.sin(ANGLE), -13 - 11 * Math.cos(ANGLE))
      this._laptopGroup.add(screen)
      this._laptopScreenMesh = screen

      // Desktop meshes (hidden initially — toggled by computerType)
      // Gaming PC tower — positioned UNDER the table between the legs
      const d = []  // accumulate all desktop mesh refs
      const addD = (mesh) => { mesh.visible = false; this._laptopGroup.add(mesh); d.push(mesh); return mesh }

      // Main chassis body (near-black)
      addD(new THREE.Mesh(new THREE.BoxGeometry(22, 45, 15),
        new THREE.MeshPhongMaterial({ color: 0x080808 }))
      ).position.set(0, 22.5, 0)

      // Front panel (slightly lighter, textured dark)
      addD(new THREE.Mesh(new THREE.BoxGeometry(22, 45, 0.8),
        new THREE.MeshPhongMaterial({ color: 0x121212 }))
      ).position.set(0, 22.5, 7.9)

      // Top accent bar (brushed aluminium strip)
      addD(new THREE.Mesh(new THREE.BoxGeometry(22, 1.4, 3.5),
        new THREE.MeshPhongMaterial({ color: 0x1a1a1a, emissive: 0x555555, emissiveIntensity: 0.5 }))
      ).position.set(0, 45.8, -5.5)

      // Glass side panel (facing room interior = local -Z face)
      addD(new THREE.Mesh(new THREE.PlaneGeometry(20, 43),
        new THREE.MeshPhongMaterial({ color: 0x0a1830, transparent: true, opacity: 0.5,
          emissive: 0x060e1a, emissiveIntensity: 0.4, side: THREE.DoubleSide }))
      ).position.set(0, 22.5, -7.6)

      // Internal purple/magenta motherboard glow behind glass
      addD(new THREE.Mesh(new THREE.PlaneGeometry(16, 39),
        new THREE.MeshBasicMaterial({ color: 0x1a003a, transparent: true, opacity: 0.55 }))
      ).position.set(0, 22.5, -7.3)

      // GPU card (horizontal bar, emissive green label strip)
      addD(new THREE.Mesh(new THREE.BoxGeometry(13, 4, 3),
        new THREE.MeshPhongMaterial({ color: 0x111111 }))
      ).position.set(-1, 12, -4)

      addD(new THREE.Mesh(new THREE.BoxGeometry(11, 1.5, 0.5),
        new THREE.MeshPhongMaterial({ color: 0x00aa44, emissive: 0x00cc44, emissiveIntensity: 0.8 }))
      ).position.set(-1, 11, -5.6)

      // RAM sticks (2 small upright bars, rainbow emissive)
      ;[[-1, 0], [1.5, 0]].forEach(([ox]) => {
        addD(new THREE.Mesh(new THREE.BoxGeometry(1.2, 10, 0.6),
          new THREE.MeshPhongMaterial({ color: 0x222222, emissive: 0xff00ff, emissiveIntensity: 0.5 }))
        ).position.set(ox, 32, -4.5)
      })

      // RGB Fans × 3 (visible through glass, stacked vertically)
      const fanRGBs = [
        { y: 9,    ring: 0xff1133, glow: 0xff0022 },
        { y: 22.5, ring: 0x00ee55, glow: 0x00cc33 },
        { y: 36,   ring: 0x0088ff, glow: 0x0055ee },
      ]
      fanRGBs.forEach(({ y, ring, glow }) => {
        // Outer ring (torus)
        addD(new THREE.Mesh(new THREE.TorusGeometry(4.4, 0.65, 8, 32),
          new THREE.MeshPhongMaterial({ color: ring, emissive: glow, emissiveIntensity: 1.6 }))
        ).position.set(0, y, -7.8)
        // Inner glow disc
        addD(new THREE.Mesh(new THREE.CircleGeometry(3.6, 24),
          new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.18 }))
        ).position.set(0, y, -7.7)
        // Fan hub (small dark center)
        const hub = addD(new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.5, 10),
          new THREE.MeshPhongMaterial({ color: 0x111111 })))
        hub.position.set(0, y, -7.85)
        hub.rotation.x = Math.PI / 2
      })

      // White diamond logo on top-right corner (like OMEN)
      const logo = addD(new THREE.Mesh(new THREE.BoxGeometry(3.2, 3.2, 0.4),
        new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.4 })))
      logo.rotation.z = Math.PI / 4
      logo.position.set(8, 44.5, -6.5)

      // Power button (small glowing dot on front top)
      addD(new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.4, 10),
        new THREE.MeshPhongMaterial({ color: 0x4fc3f7, emissive: 0x0288d1, emissiveIntensity: 1.0 }))
      ).position.set(9, 43.5, 8.1)

      // === Monitor on tabletop ===
      const standMat = new THREE.MeshPhongMaterial({ color: 0x1a1a1a })
      addD(new THREE.Mesh(new THREE.BoxGeometry(16, 1.5, 8), standMat)).position.set(0, 73.5, 0)
      addD(new THREE.Mesh(new THREE.BoxGeometry(2.5, 22, 2.5), standMat)).position.set(0, 85.5, 0)

      const monBody = addD(new THREE.Mesh(new THREE.BoxGeometry(48, 29, 2),
        new THREE.MeshPhongMaterial({ color: 0x0d0d0d })))
      monBody.position.set(0, 98, 0)

      const monScreen = addD(new THREE.Mesh(new THREE.BoxGeometry(44, 25, 0.8),
        new THREE.MeshPhongMaterial({ color: 0x1a237e, emissive: 0x0d47a1, emissiveIntensity: 0.6 })))
      monScreen.position.set(0, 98, 1.1)

      // Thin LED strip under monitor bezel (subtle glow)
      addD(new THREE.Mesh(new THREE.BoxGeometry(44, 0.8, 0.5),
        new THREE.MeshPhongMaterial({ color: 0x00bbff, emissive: 0x0099dd, emissiveIntensity: 0.8 }))
      ).position.set(0, 84.8, -0.5)

      this._desktopMeshes = d
      this._laptopMeshes  = [base, screen]

      this._laptopDragIcon = this._makeDragIcon(this._laptopGroup, 0, 74, 0)
      this._laptopHoverDot = this._makeHoverDot(this._laptopGroup, 0, 74, 0)

      this._laptopGroup.rotation.y = -Math.PI / 2  // face screen toward room center
      this._scene.add(this._laptopGroup)
      this._updateLaptop()
    },

    _clampLaptop() {
      const maxX = this.wCm / 2 - 21
      this._laptopX = Math.max(-maxX, Math.min(maxX, this._laptopX || 0))
      this._laptopZ = Math.max(30, Math.min(this.dCm - 30, this._laptopZ || this.gZ))
    },

    _updateLaptop() {
      if (!this._laptopGroup) return
      this._laptopGroup.position.set(this._laptopX, 0, this._laptopZ)
      this._updateCables()
    },

    // ── CABLES ───────────────────────────────────────────────
    _buildCables() {
      const mkLine = (color) => {
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(7 * 3), 3))
        const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color }))
        line.raycast = () => {}
        this._scene.add(line)
        return line
      }
      this._cableClm1 = mkLine(0x3a3a3a)
      this._cableClm2 = mkLine(0x3a3a3a)
      this._cableProj = mkLine(0x3a3a3a)
      this._updateCables()
    },

    _setCablePts(line, pts) {
      const arr = line.geometry.attributes.position.array
      for (let i = 0; i < pts.length; i++) {
        arr[i * 3] = pts[i][0]; arr[i * 3 + 1] = pts[i][1]; arr[i * 3 + 2] = pts[i][2]
      }
      line.geometry.attributes.position.needsUpdate = true
      line.geometry.setDrawRange(0, pts.length)
    },

    _updateCables() {
      if (!this._cableClm1 || !this._cableClm2 || !this._cableProj) return
      const { wCm, hCm, gZ, pX, pZ } = this
      const cx = this._laptopX || 0
      const cz = this._laptopZ || gZ
      const isDesktop = this.$store.state.env.computerType === 'desktop'
      const portH = isDesktop ? 22 : 76
      const ceilY = hCm - 3
      const wallX = cx >= 0 ? wCm / 2 - 2 : -(wCm / 2 - 2)
      const clmX  = this._clmOffsetX || 0
      const clmZ  = gZ - 100 + (this._clmOffsetZ || 0)
      const zOff = 6

      const clm1Pts = [
        [cx,    portH, cz - zOff],
        [wallX, portH, cz - zOff],
        [wallX, ceilY, cz - zOff],
        [wallX, ceilY, clmZ - zOff],
        [clmX,  ceilY, clmZ - zOff],
        [clmX,  ceilY, clmZ],
      ]
      const clm2Pts = [
        [cx,    portH, cz],
        [wallX, portH, cz],
        [wallX, ceilY, cz],
        [wallX, ceilY, clmZ + zOff],
        [clmX,  ceilY, clmZ + zOff],
        [clmX,  ceilY, clmZ],
      ]
      const projPts = [
        [cx,    portH,  cz + zOff],
        [wallX, portH,  cz + zOff],
        [wallX, ceilY,  cz + zOff],
        [wallX, ceilY,  pZ + 20],
        [pX,    ceilY,  pZ + 20],
        [pX,    hCm,    pZ + 20],
      ]

      this._setCablePts(this._cableClm1, clm1Pts)
      this._setCablePts(this._cableClm2, clm2Pts)
      this._setCablePts(this._cableProj, projPts)
    },

    // ── NET CAGE (net display type) ──────────────────────────
    _buildNet() {
      // Diamond net texture (green)
      const cv = document.createElement('canvas')
      cv.width = 64; cv.height = 64
      const ctx = cv.getContext('2d')
      ctx.clearRect(0, 0, 64, 64)
      ctx.strokeStyle = 'rgba(22,110,38,0.92)'
      ctx.lineWidth = 1.6
      const step = 16
      for (let i = -64; i < 128; i += step) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + 64, 64); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(64 - i, 0); ctx.lineTo(-i, 64); ctx.stroke()
      }
      const netTex = new THREE.CanvasTexture(cv)
      netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping
      const mkNetMat = () => new THREE.MeshBasicMaterial({ map: netTex, transparent: true, opacity: 0.82, side: THREE.DoubleSide })
      const poleMat  = new THREE.MeshPhongMaterial({ color: 0x1c1c1c })

      this._netGroup = new THREE.Group()

      // Net panels: back + two sides + top
      this._netBack  = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mkNetMat())
      this._netSideL = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mkNetMat())
      this._netSideR = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mkNetMat())
      this._netTop   = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mkNetMat())
      this._netSideL.rotation.y = -Math.PI / 2
      this._netSideR.rotation.y =  Math.PI / 2
      this._netTop.rotation.x   = -Math.PI / 2

      // Frame: 4 vertical corner poles + 4 top horizontal rails
      const mkPole = (w, h, d) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), poleMat)
      this._cagePoleFL = mkPole(4.5, 1, 4.5)
      this._cagePoleFR = mkPole(4.5, 1, 4.5)
      this._cagePoleBL = mkPole(4.5, 1, 4.5)
      this._cagePoleBR = mkPole(4.5, 1, 4.5)
      this._cageRailFront = mkPole(1, 4.5, 4.5)
      this._cageRailBack  = mkPole(1, 4.5, 4.5)
      this._cageRailL     = mkPole(4.5, 4.5, 1)
      this._cageRailR     = mkPole(4.5, 4.5, 1)

      this._netGroup.add(
        this._netBack, this._netSideL, this._netSideR, this._netTop,
        this._cagePoleFL, this._cagePoleFR, this._cagePoleBL, this._cagePoleBR,
        this._cageRailFront, this._cageRailBack, this._cageRailL, this._cageRailR
      )
      this._netGroup.visible = false
      this._scene.add(this._netGroup)
      this._netMesh = null; this._netBorder = null
      this._updateNet()
    },

    _updateNet() {
      if (!this._netGroup) return
      const { w: cageW, h: cageH, d: cageD } = this._getNetDims()
      const hw = cageW / 2
      const z0 = 30

      this._netBack.position.set(0, cageH / 2, z0)
      this._netBack.scale.set(cageW, cageH, 1)
      const bt = this._netBack.material.map
      if (bt) { bt.repeat.set(cageW / 20, cageH / 20); bt.needsUpdate = true }

      this._netSideL.position.set(-hw, cageH / 2, z0 + cageD / 2)
      this._netSideL.scale.set(cageD, cageH, 1)
      this._netSideR.position.set( hw, cageH / 2, z0 + cageD / 2)
      this._netSideR.scale.set(cageD, cageH, 1)
      const st = this._netSideL.material.map
      if (st) { st.repeat.set(cageD / 20, cageH / 20); st.needsUpdate = true }

      this._netTop.position.set(0, cageH, z0 + cageD / 2)
      this._netTop.scale.set(cageW, cageD, 1)
      const topT = this._netTop.material.map
      if (topT) { topT.repeat.set(cageW / 20, cageD / 20); topT.needsUpdate = true }

      ;[this._cagePoleFL, this._cagePoleFR, this._cagePoleBL, this._cagePoleBR]
        .forEach(p => p.scale.set(1, cageH, 1))
      this._cagePoleFL.position.set(-hw, cageH / 2, z0 + cageD)
      this._cagePoleFR.position.set( hw, cageH / 2, z0 + cageD)
      this._cagePoleBL.position.set(-hw, cageH / 2, z0)
      this._cagePoleBR.position.set( hw, cageH / 2, z0)

      this._cageRailFront.position.set(0,  cageH, z0 + cageD); this._cageRailFront.scale.set(cageW, 1, 1)
      this._cageRailBack.position.set(0,   cageH, z0);         this._cageRailBack.scale.set(cageW, 1, 1)
      this._cageRailL.position.set(-hw, cageH, z0 + cageD / 2); this._cageRailL.scale.set(1, 1, cageD)
      this._cageRailR.position.set( hw, cageH, z0 + cageD / 2); this._cageRailR.scale.set(1, 1, cageD)
    },

    // ── SCREEN ENCLOSURE (projector display type) ─────────────
    _buildEnclosure() {
      const fabricMat = new THREE.MeshPhongMaterial({ color: 0x0d0d0d, side: THREE.DoubleSide, transparent: true, opacity: 0.88 })
      const poleMat   = new THREE.MeshPhongMaterial({ color: 0x2c2c2c })

      this._encGroup = new THREE.Group()

      this._encLeft  = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), fabricMat.clone())
      this._encRight = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), fabricMat.clone())
      this._encTop   = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), fabricMat.clone())
      this._encLeft.rotation.y  = -Math.PI / 2
      this._encRight.rotation.y =  Math.PI / 2
      this._encTop.rotation.x   = -Math.PI / 2

      // Impact screen on back face
      this._impactScreen = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshPhongMaterial({ color: 0xf2f2f2, side: THREE.DoubleSide })
      )

      // Corner poles (vertical) + front top beam
      const mkPole = (w, h, d) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), poleMat)
      this._encPoleFL = mkPole(4, 1, 4)
      this._encPoleFR = mkPole(4, 1, 4)
      this._encPoleBL = mkPole(4, 1, 4)
      this._encPoleBR = mkPole(4, 1, 4)
      this._encBeam   = mkPole(1, 4, 4)

      this._encGroup.add(
        this._encLeft, this._encRight, this._encTop,
        this._encPoleFL, this._encPoleFR, this._encPoleBL, this._encPoleBR, this._encBeam,
        this._impactScreen
      )
      this._encGroup.visible = this.displayType === 'projector'
      this._scene.add(this._encGroup)
      this._updateEnclosure()
      this._updateScreen()
    },

    _getEnclosureDims() {
      const enc = this.$store.state.enclosure
      const w = Math.min(parseFloat(enc.encWidth)  * 30.48, this.wCm)
      const h = Math.min(parseFloat(enc.encHeight) * 30.48, this.hCm)
      const d = Math.min(parseFloat(enc.encDepth)  * 30.48, this.dCm)
      return { w, h, d }
    },

    _getNetDims() {
      const enc = this.$store.state.enclosure
      const w = Math.min(parseFloat(enc.netWidth)  * 30.48, this.wCm)
      const h = Math.min(parseFloat(enc.netHeight) * 30.48, this.hCm)
      const d = Math.min(parseFloat(enc.netDepth)  * 30.48, this.dCm)
      return { w, h, d }
    },

    _updateEnclosure() {
      if (!this._encGroup) return
      const { w: encW, h: encH, d: encD } = this._getEnclosureDims()
      const z0 = 30
      const hw = encW / 2

      this._encLeft.position.set(-hw, encH / 2, z0 + encD / 2);  this._encLeft.scale.set(encD, encH, 1)
      this._encRight.position.set( hw, encH / 2, z0 + encD / 2); this._encRight.scale.set(encD, encH, 1)
      this._encTop.position.set(0, encH, z0 + encD / 2);         this._encTop.scale.set(encW, encD, 1)

      ;[this._encPoleFL, this._encPoleFR, this._encPoleBL, this._encPoleBR]
        .forEach(p => p.scale.set(1, encH, 1))
      this._encPoleFL.position.set(-hw, encH / 2, z0 + encD)
      this._encPoleFR.position.set( hw, encH / 2, z0 + encD)
      this._encPoleBL.position.set(-hw, encH / 2, z0)
      this._encPoleBR.position.set( hw, encH / 2, z0)

      this._encBeam.position.set(0, encH, z0 + encD); this._encBeam.scale.set(encW, 1, 1)
    },

    _updateDisplayType(type) {
      const isNet = type === 'net'
      if (this._projGroup)       this._projGroup.visible = !isNet
      if (this._projDropRod)     this._projDropRod.visible = !isNet && this.hCm > 320.5
      if (this._lightZoneLines)  this._lightZoneLines.visible = !isNet && this.showGuidelines
      if (this._cableProj)       this._cableProj.visible = !isNet
      if (this._screen)          this._screen.visible = !isNet
      if (this._screenBorder)    this._screenBorder.visible = !isNet
      if (this._screenDotAnchor) this._screenDotAnchor.visible = !isNet
      if (this._encGroup)        { this._updateEnclosure(); this._encGroup.visible = !isNet && this.showEnclosure }
      if (this._netGroup)        { this._updateNet();       this._netGroup.visible = isNet && this.showEnclosure }
      if (isNet && this._screenSelected) { this._deselectAll() }
      this._updateScreen()
      this._updateLines()
      this._updateLabels()
    },

    _updateComputerType(type) {
      const isDesktop = type === 'desktop'
      this._laptopMeshes?.forEach(m => { m.visible = !isDesktop })
      this._desktopMeshes?.forEach(m => { m.visible = isDesktop })
      this._updateCables()
    },

    _updateHandedness(val) {
      const isLeft = val === 'left'
      if (this._golferGroup) {
        this._golferGroup.scale.x = isLeft ? -1 : 1
        this._golferOffX = -(this._golferOffX || 0)
        this._updateGolfer()
      }
      if (this._laptopGroup) {
        this._laptopGroup.rotation.y = isLeft ? Math.PI / 2 : -Math.PI / 2
        this._laptopX = -(this._laptopX || 0)
        this._clampLaptop()
        this._updateLaptop()
      }
      if (this.activeView === 'iso') this._onCameraFocus('iso')
    },

    _onCameraFocus(target) {
      const { wCm, dCm, hCm, gZ, gHCm, pX, pZ } = this
      const isLeft = this.$store.state.env.handedness === 'left'
      let pos, look
      if (target === 'iso') {
        const sx = isLeft ? -1 : 1
        pos  = new THREE.Vector3(sx * wCm * 0.95, hCm * 1.25, dCm * 0.98)
        look = new THREE.Vector3(0, gHCm * 0.5, gZ)
      } else if (target === 'golfer') {
        const hX = isLeft ? -140 : 140
        pos  = new THREE.Vector3(hX, gHCm * 0.65, gZ + 310)
        look = new THREE.Vector3(0, gHCm * 0.48, gZ)
      } else if (target === 'display') {
        // Far enough back + up to see projector at ceiling and projection on screen wall
        pos  = new THREE.Vector3(wCm * 0.72, hCm * 1.08, pZ + 280)
        look = new THREE.Vector3(pX * 0.3, hCm * 0.52, 0)
      } else if (target === 'computer') {
        const lx = this._laptopX || 0
        const lz = this._laptopZ || gZ
        // Position camera forward of the golfer (toward screen) so golfer doesn't occlude
        const towardCenter = lx >= 0 ? -1 : 1
        pos  = new THREE.Vector3(lx + towardCenter * 160, 140, lz - 80)
        look = new THREE.Vector3(lx, 70, lz)
      }
      if (pos && look) {
        this._camLerp = { pos, look }
        this.activeView = ''
      }
    },

    // ── CEILING LAUNCH MONITOR (CLM) ──────────────────────────
    _buildCLM() {
      // Wide flat bar body, flush to ceiling
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(52, 5, 14),
        new THREE.MeshPhongMaterial({ color: 0x1a1a1a, emissive: 0x000000 })
      )
      body.position.y = -2.5
      this._clmBody = body

      // Two red IR sensor bars on the underside
      const irMat = new THREE.MeshPhongMaterial({ color: 0xff2200, emissive: 0xcc1100, emissiveIntensity: 0.9 })
      const irLeft  = new THREE.Mesh(new THREE.BoxGeometry(17, 1.2, 5), irMat)
      irLeft.position.set(-13, -5.6, 0)
      const irRight = new THREE.Mesh(new THREE.BoxGeometry(17, 1.2, 5), irMat)
      irRight.position.set( 13, -5.6, 0)

      // Small center camera lens
      const cam = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.8, 1, 10),
        new THREE.MeshPhongMaterial({ color: 0x222222 })
      )
      cam.rotation.x = Math.PI / 2
      cam.position.set(0, -5.6, -2)

      this._clmDevice = new THREE.Group()
      this._clmDevice.add(body)
      this._clmDevice.add(irLeft)
      this._clmDevice.add(irRight)
      this._clmDevice.add(cam)
      this._scene.add(this._clmDevice)

      const clmRod = new THREE.Mesh(
        new THREE.BoxGeometry(3, 1, 3),
        new THREE.MeshPhongMaterial({ color: 0x1a1a1a })
      )
      clmRod.visible = false
      this._clmDropRod = clmRod
      this._scene.add(this._clmDropRod)

      this._clmDragIcon  = this._makeDragIcon(this._clmDevice, 0, -3, 0)
      this._clmHoverDot  = this._makeHoverDot(this._clmDevice,  0, -3, 0)

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(48), 3))
      this._clmProjection = new THREE.LineSegments(
        geo,
        new THREE.LineDashedMaterial({ color: 0xff4422, dashSize: 8, gapSize: 5, opacity: 0.7, transparent: true })
      )
      this._scene.add(this._clmProjection)

      // Translucent dark-red floor fill for the hitting area
      this._clmHitArea = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshBasicMaterial({ color: 0x8b0000, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false })
      )
      this._clmHitArea.rotation.x = -Math.PI / 2
      this._clmHitArea.renderOrder = 2
      this._scene.add(this._clmHitArea)

      this._updateCLM()
    },

    _updateCLM() {
      if (!this._clmDevice) return
      const { hCm, gZ } = this
      const mountY = this._mountY
      const clmX = this._clmOffsetX || 0
      const clmZ = gZ - 100 + (this._clmOffsetZ || 0)
      this._clmDevice.position.set(clmX, mountY, clmZ)

      if (this._clmDropRod) {
        const dropActive = hCm > 320.5
        this._clmDropRod.visible = dropActive
        if (dropActive) {
          const rodH = hCm - 300
          this._clmDropRod.scale.set(1, rodH, 1)
          this._clmDropRod.position.set(clmX, 300 + rodH / 2, clmZ)
        }
      }

      this._updateCables()

      // Hitting area directly below CLM at floor level
      const hitW = 70
      const hitD = 40
      const hy = 2.5
      // Hitting area center: 100cm behind CLM = clmZ + 100
      const hitCX = clmX
      const hitCZ = clmZ + 100
      const c = [
        [hitCX - hitW / 2, hy, hitCZ - hitD / 2],
        [hitCX + hitW / 2, hy, hitCZ - hitD / 2],
        [hitCX + hitW / 2, hy, hitCZ + hitD / 2],
        [hitCX - hitW / 2, hy, hitCZ + hitD / 2],
      ]
      const [lx, ly, lz] = [clmX, hCm - 5, clmZ]
      const v = [
        lx, ly, lz, ...c[0], lx, ly, lz, ...c[1],
        lx, ly, lz, ...c[2], lx, ly, lz, ...c[3],
        ...c[0], ...c[1], ...c[1], ...c[2], ...c[2], ...c[3], ...c[3], ...c[0],
      ]
      const pos = this._clmProjection.geometry.attributes.position
      for (let i = 0; i < 16; i++) pos.setXYZ(i, v[i * 3], v[i * 3 + 1], v[i * 3 + 2])
      pos.needsUpdate = true
      this._clmProjection.computeLineDistances()

      this._clmHitArea.position.set(hitCX, 2.5, hitCZ)
      this._clmHitArea.scale.set(hitW, hitD, 1)
      this._updateHitAreaLabels()
    },

    // ── HITTING AREA LABELS ───────────────────────────────────
    _buildHitAreaLabels() {
      const make = (w, h) => {
        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h
        const texture = new THREE.CanvasTexture(canvas)
        const geo = new THREE.PlaneGeometry(1, 1)
        const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: false, side: THREE.DoubleSide })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.rotation.x = -Math.PI / 2
        mesh.renderOrder = 11
        this._scene.add(mesh)
        return { mesh, canvas, texture }
      }
      this._hitLabelW = make(256, 64)   // landscape: text reads along world X
      this._hitLabelD = make(64, 256)   // portrait: text rotated, reads along world Z
    },

    _updateHitAreaLabels() {
      if (!this._hitLabelW) return
      const metric = this.$store.state.env.unit === 'metric'
      const L = (cm) => metric ? `${Math.round(cm)} cm` : `${(cm / 2.54).toFixed(1)}"`
      const vis = this.showMeasurements
      const { hCm, gZ } = this
      const clmX = this._clmOffsetX || 0
      const clmZ = gZ - 100 + (this._clmOffsetZ || 0)
      const hitW = 70
      const hitD = 40
      const hitCX = clmX
      const hitCZ = clmZ + 100
      const hitW2 = hitW / 2
      const hitD2 = hitD / 2
      const STRIP = 14

      const styleCtx = (ctx) => {
        ctx.font = 'bold 28px Inter, Arial, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.shadowColor = 'rgba(0,0,0,0.75)'
        ctx.shadowBlur = 4
        ctx.strokeStyle = '#8b0000'
        ctx.lineWidth = 3
        ctx.lineJoin = 'round'
        ctx.fillStyle = 'rgba(255,255,255,0.95)'
      }
      const drawText = (ctx, text, x, y) => {
        ctx.strokeText(text, x, y)
        ctx.fillText(text, x, y)
      }

      // Width label — front edge of hit area, reads along X
      const { canvas: wc, texture: wt, mesh: wm } = this._hitLabelW
      const wctx = wc.getContext('2d')
      wctx.clearRect(0, 0, wc.width, wc.height)
      if (!vis) { wm.visible = false } else {
        wm.visible = true
        styleCtx(wctx)
        drawText(wctx, L(hitW), wc.width / 2, wc.height / 2)
        wt.needsUpdate = true
        wm.scale.set(hitW * 0.75, STRIP, 1)
        wm.position.set(hitCX, 3.5, hitCZ + hitD2 + STRIP * 0.6)
      }

      // Depth label — right edge of hit area, text rotated -90° to read along Z
      const { canvas: dc, texture: dt, mesh: dm } = this._hitLabelD
      const dctx = dc.getContext('2d')
      dctx.clearRect(0, 0, dc.width, dc.height)
      if (!vis) { dm.visible = false } else {
        dm.visible = true
        dctx.save()
        dctx.translate(dc.width / 2, dc.height / 2)
        dctx.rotate(-Math.PI / 2)
        styleCtx(dctx)
        drawText(dctx, L(hitD), 0, 0)
        dctx.restore()
        dt.needsUpdate = true
        dm.scale.set(STRIP * 1.2, hitD * 0.75 * 1.6, 1)
        dm.position.set(hitCX + hitW2 + STRIP * 0.6, 3.5, hitCZ)
      }
    },

    // ── CSS2D LABELS ──────────────────────────────────────────
    _makeLabel(text, color, group = null) {
      const div = document.createElement('div')
      div.style.cssText = `background:${color};color:#fff;font-size:11px;font-weight:600;font-family:Inter,sans-serif;padding:2px 8px;border-radius:999px;box-shadow:0 2px 4px rgba(0,0,0,0.4);white-space:nowrap;pointer-events:${group ? 'auto' : 'none'};${group ? 'cursor:pointer;user-select:none;' : ''}`
      div.textContent = text
      if (group) div.addEventListener('click', (e) => { e.stopPropagation(); if (this.$store.state.env.openStep === 5) this._toggleGroup(group) })
      const css2d = new CSS2DObject(div)
      const anchor = new THREE.Object3D()
      anchor.add(css2d)
      this._scene.add(anchor)
      return { anchor, div, css2d }
    },

    _toggleGroup(name) {
      this.dimmedGroups[name] = !this.dimmedGroups[name]
      if (this._scene) { this._updateLabels(); this._updateLines() }
    },

    _makeDragIcon(parent, x, y, z) {
      const div = document.createElement('div')
      div.style.cssText = 'pointer-events:none;'
      div.innerHTML = '<img src="/drag-icon.png" width="28" height="28" style="display:block;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.55)) invert(1);" />'
      const css2d = new CSS2DObject(div)
      css2d.visible = false
      const anchor = new THREE.Object3D()
      anchor.position.set(x, y, z)
      anchor.add(css2d)
      parent.add(anchor)
      return css2d
    },

    _makeHoverDot(parent, x, y, z) {
      const div = document.createElement('div')
      div.className = 'gsp-hover-dot'
      const css2d = new CSS2DObject(div)
      css2d.visible = true
      const anchor = new THREE.Object3D()
      anchor.position.set(x, y, z)
      anchor.add(css2d)
      parent.add(anchor)
      return css2d
    },


    _buildLabels() {
      this._labels = {
        roomWidth:    this._makeLabel('', '#f57f17',  'room'),
        roomHeight:   this._makeLabel('', '#f57f17',  'room'),
        roomDepth:    this._makeLabel('', '#f57f17',  'room'),
        screenWidth:  this._makeLabel('', '#1565c0',  'screen'),
        screenHeight: this._makeLabel('', '#1565c0',  'screen'),
        golferHeight: this._makeLabel('', '#546e7a',  'golfer'),
        golferToScr:  this._makeLabel('', '#546e7a',  'golfer'),
        projFloor:    this._makeLabel('', '#6a1b9a',  'projector'),
        projCeiling:  this._makeLabel('', '#4a148c',  'projector'),
        throwDist:    this._makeLabel('', '#00838f',  'projector'),
        encW:         this._makeLabel('', '#00796b',  'enclosure'),
        encH:         this._makeLabel('', '#00796b',  'enclosure'),
        encD:         this._makeLabel('', '#00796b',  'enclosure'),
        encToBack:    this._makeLabel('', '#00796b',  'enclosure'),
        matWidth:     this._makeLabel('', '#5d4037',  'mat'),
        matDepth:     this._makeLabel('', '#5d4037',  'mat'),
        clmToScreen:  this._makeLabel('', '#CC1B32',  null),
        clmToLeft:    this._makeLabel('', '#CC1B32',  null),
        clmToRight:   this._makeLabel('', '#CC1B32',  null),
      }
      this._dragLabelX = this._makeLabel('', '#2e7d32')
      this._dragLabelX.css2d.visible = false
      this._dragLabelZ = this._makeLabel('', '#2e7d32')
      this._dragLabelZ.css2d.visible = false
    },

    _updateLabels() {
      if (!this._labels) return

      if (this.readOnly) {
        // Hide every label
        for (const lbl of Object.values(this._labels)) {
          if (lbl?.css2d) lbl.css2d.visible = false
        }
        // Room + golfer pills dimmed
        const dimmed = ['roomWidth', 'roomHeight', 'roomDepth', 'golferHeight', 'golferToScr']
        for (const k of dimmed) {
          if (this._labels[k]) {
            this._labels[k].css2d.visible = true
            this._labels[k].div.style.opacity = '0.35'
          }
        }
        // CLM distance labels
        const clmX  = this._clmOffsetX || 0
        const clmZ  = this.gZ - 100 + (this._clmOffsetZ || 0)
        const lineY  = this.hCm + 18
        const metric = this.$store.state.env.unit === 'metric'
        const L = (cm) => metric ? `${(cm / 100).toFixed(1)}m` : `${(cm / 30.48).toFixed(1)}'`
        const setR = (k, text, x, y, z) => {
          const lbl = this._labels[k]; if (!lbl) return
          lbl.div.textContent = text
          lbl.div.style.opacity = '1'
          lbl.css2d.visible = true
          lbl.anchor.position.set(x, y, z)
        }
        setR('clmToScreen', L(clmZ),                       clmX,                        lineY, clmZ / 2)
        setR('clmToLeft',   L(this.wCm / 2 + clmX),       (clmX - this.wCm / 2) / 2,  lineY, clmZ)
        setR('clmToRight',  L(this.wCm / 2 - clmX),       (clmX + this.wCm / 2) / 2,  lineY, clmZ)
        return
      }

      // Hide CLM result labels when not in results view
      for (const k of ['clmToScreen', 'clmToLeft', 'clmToRight']) {
        if (this._labels[k]) this._labels[k].css2d.visible = false
      }

      const { hCm, wCm, dCm, sCY, sHCm, sWCm, pX, pZ, gZ, gHCm } = this
      const ix = this._imageOffsetX ?? 0
      const iy = this._imageOffsetY ?? 0
      const cy = sCY + iy
      const w  = Math.min(sWCm, wCm)
      const toCeil    = parseFloat(this.$store.state.screen.screenToCeiling) * 30.48
      const toFloor   = hCm - toCeil - sHCm
      const actToCeil = Math.max(0, toCeil - iy)
      const actToFlr  = Math.max(0, toFloor + iy)
      const gFt = parseInt(this.$store.state.golfer.golferHeight) || 5
      const gIn = parseInt(this.$store.state.golfer.golferHeightIn) || 10

      const metric = this.$store.state.env.unit === 'metric'
      const L = (cm) => metric ? `${(cm/100).toFixed(1)}m` : `${(cm/30.48).toFixed(1)}'`
      const golferLabel = metric
        ? `${Math.round(gHCm)} cm`
        : `${gFt}'${gIn}"`
      const distLabel = (cm) => {
        const toLabel = isNetMode ? 'to net' : 'to screen'
        return metric ? `${(cm/100).toFixed(1)}m ${toLabel}` : `${(cm/30.48).toFixed(1)}' ${toLabel}`
      }

      const vis = this.showMeasurements
      const set = (k, text, x, y, z) => {
        this._labels[k].div.textContent = text
        this._labels[k].css2d.visible = vis && text !== ''
        this._labels[k].anchor.position.set(x, y, z)
      }
      const matTop = 3
      set('roomWidth',    `W: ${L(wCm)}`,           0,            hCm+25,                 0)
      set('roomHeight',   `H: ${L(hCm)}`,           -wCm/2-40,    hCm/2,                  0)
      set('roomDepth',    `D: ${L(dCm)}`,           -wCm/2-40,    hCm+25,                 dCm/2)
      const sz = this._getScreenZ() + 1
      const isNetMode = this.$store.state.env.displayType === 'net'
      set('screenWidth',  isNetMode ? '' : `W: ${L(w)}`,             ix,           cy+sHCm/2+20,           sz)
      set('screenHeight', isNetMode ? '' : `H: ${L(sHCm)}`,          ix-w/2-28,    cy,                     sz)
      const screenZCm  = (isNetMode || (this.showEnclosure && !isNetMode)) ? 30 : 0
      const distToScr  = gZ - screenZCm
      set('golferHeight', golferLabel,                    35,  gHCm/2,              gZ)
      set('golferToScr',  distLabel(distToScr),           0,   matTop,              screenZCm + distToScr / 2)
      const encPresent = this.showEnclosure && !isNetMode
      const throwDist = encPresent ? pZ - 30 : pZ
      set('projFloor',    isNetMode ? '' : `Throw: ${L(throwDist)}`,  pX+42, hCm+12, pZ - 30)
      set('projCeiling',  ``,                               0,     0,      0)
      set('throwDist',    ``,                               0,     0,      0)

      this._updateHitAreaLabels()

      // ── Mat measurements (step 4 only) ──
      const step = this.$store.state.env.openStep
      const matLabelVis = (step === 4 || this.readOnly) && vis
      const matW2 = this.matWCm / 2
      const matD2 = this.matDCm / 2
      const setMat = (k, text, x, y, z) => {
        this._labels[k].div.textContent = text
        this._labels[k].css2d.visible = matLabelVis
        this._labels[k].anchor.position.set(x, y, z)
      }
      setMat('matWidth', `W: ${L(this.matWCm)}`, 0,         5, gZ + matD2 + 20)
      setMat('matDepth', `D: ${L(this.matDCm)}`, matW2 + 32, 5, gZ)

      // ── Enclosure / net measurements ──
      const encVis = this.showEnclosure && vis
      const { w: eW, h: eH, d: eD } = isNetMode ? this._getNetDims() : this._getEnclosureDims()
      const ez0 = 30
      const ehw = eW / 2
      const setEnc = (k, text, x, y, z) => {
        this._labels[k].div.textContent = text
        this._labels[k].css2d.visible = encVis
        this._labels[k].anchor.position.set(x, y, z)
      }
      setEnc('encW',      `W: ${L(eW)}`,            0,           eH + 22,       ez0 + eD)
      setEnc('encH',      `H: ${L(eH)}`,             ehw + 32,    eH / 2,        ez0)
      setEnc('encD',      `D: ${L(eD)}`,             ehw + 32,    eH + 15,       ez0 + eD / 2)
      setEnc('encToBack', `${L(ez0)} to wall`,        0,           20,            ez0 / 2)

      // ── Step-based dim / manual toggle on step 4 ──
      const STEP_ACTIVE = {
        0: ['golfer', 'enclosure'],
        1: ['room', 'enclosure'],
        2: ['screen', 'projector', 'enclosure'],
        3: ['golfer', 'room'],
      }
      const activeGroups = this.readOnly ? null : STEP_ACTIVE[step]
      const GROUP_KEYS = {
        room:       ['roomWidth', 'roomHeight', 'roomDepth'],
        screen:     ['screenWidth', 'screenHeight'],
        golfer:     ['golferHeight', 'golferToScr'],
        projector:  ['projFloor', 'projCeiling', 'throwDist'],
        enclosure:  ['encW', 'encH', 'encD', 'encToBack'],
      }
      for (const [group, keys] of Object.entries(GROUP_KEYS)) {
        const op = activeGroups
          ? (activeGroups.includes(group) ? '1' : '0.2')
          : (this.dimmedGroups[group] ? '0.2' : '1')
        keys.forEach(k => { if (this._labels[k]) this._labels[k].div.style.opacity = op })
      }
    },

    // ── MEASUREMENT LINES ─────────────────────────────────────
    _makeLine(color) {
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3))
      const mat = new THREE.LineDashedMaterial({ color, dashSize: 8, gapSize: 4, opacity: 0.75, transparent: true })
      const line = new THREE.Line(geo, mat)
      line.computeLineDistances()
      this._scene.add(line)
      return line
    },

    _setLine(line, ax, ay, az, bx, by, bz) {
      if (!line) return
      const p = line.geometry.attributes.position
      p.setXYZ(0, ax, ay, az); p.setXYZ(1, bx, by, bz)
      p.needsUpdate = true; line.computeLineDistances()
    },

    _buildLines() {
      this._lines = {
        roomW: this._makeLine(0xffd600), roomH: this._makeLine(0xffd600), roomD: this._makeLine(0xffd600),
        screenW: this._makeLine(0x2196f3), screenH: this._makeLine(0x2196f3),
        golferScr: this._makeLine(0xeeeeee), projFloor: this._makeLine(0xce93d8), projCeil: this._makeLine(0xce93d8),
        encW: this._makeLine(0x26a69a), encH: this._makeLine(0x26a69a),
        encD: this._makeLine(0x26a69a), encToBack: this._makeLine(0x26a69a),
        matW: this._makeLine(0xa1887f), matD: this._makeLine(0xa1887f),
        clmToScreen: this._makeLine(0xCC1B32),
        clmToLeft:   this._makeLine(0xCC1B32),
        clmToRight:  this._makeLine(0xCC1B32),
      }
    },

    _updateLines() {
      if (!this._lines) return

      const _hideCLMLines = () => {
        for (const k of ['clmToScreen', 'clmToLeft', 'clmToRight']) {
          if (this._lines[k]) this._lines[k].material.opacity = 0
        }
      }

      if (this.readOnly) {
        // Hide all normal lines
        for (const [k, l] of Object.entries(this._lines)) {
          if (l && !['clmToScreen','clmToLeft','clmToRight'].includes(k)) {
            l.visible = false
            l.material.opacity = 0
          }
        }
        // Draw CLM distance lines at ceiling level
        const clmX = this._clmOffsetX || 0
        const clmZ = this.gZ - 100 + (this._clmOffsetZ || 0)
        const lineY = this.hCm + 5
        this._setLine(this._lines.clmToScreen, clmX,          lineY, clmZ,           clmX,          lineY, 0)
        this._setLine(this._lines.clmToLeft,   clmX,          lineY, clmZ,           -this.wCm / 2, lineY, clmZ)
        this._setLine(this._lines.clmToRight,  clmX,          lineY, clmZ,           this.wCm / 2,  lineY, clmZ)
        for (const k of ['clmToScreen', 'clmToLeft', 'clmToRight']) {
          if (this._lines[k]) this._lines[k].material.opacity = 0.9
        }
        return
      }

      for (const l of Object.values(this._lines)) { if (l) l.visible = true }
      _hideCLMLines()

      const { hCm, wCm, dCm, sCY, sHCm, sWCm, pX, pZ, gZ } = this
      const ix = this._imageOffsetX ?? 0
      const iy = this._imageOffsetY ?? 0
      const cy = sCY + iy
      const w  = Math.min(sWCm, wCm)
      this._setLine(this._lines.roomW,    -wCm/2,       hCm+14,        0,   wCm/2,      hCm+14,        0)
      this._setLine(this._lines.roomH,    -wCm/2-28,    0,         0,      -wCm/2-28,   hCm,       0)
      this._setLine(this._lines.roomD,    -wCm/2-28,    hCm+14,        0,  -wCm/2-28,   hCm+14,      dCm)
      const slz = this._getScreenZ() + 0.5
      this._setLine(this._lines.screenW,  -w/2+ix,      cy+sHCm/2+10,  slz,   w/2+ix,    cy+sHCm/2+10,    slz)
      this._setLine(this._lines.screenH,  -w/2+ix-20,   cy-sHCm/2,     slz,   -w/2+ix-20, cy+sHCm/2,      slz)
      const scrLineZ   = this.showEnclosure && this.$store.state.env.displayType === 'projector' ? 30 : 1
      this._setLine(this._lines.golferScr, 0, 3, gZ, 0, 3, scrLineZ)
      const isNetMode = this.$store.state.env.displayType === 'net'
      const throwLineEnd = (this.showEnclosure && !isNetMode) ? 30 : 1
      this._setLine(this._lines.projFloor, isNetMode ? 0 : pX+42, isNetMode ? 0 : hCm, isNetMode ? 0 : pZ, isNetMode ? 0 : pX+42, isNetMode ? 0 : hCm, isNetMode ? 0 : throwLineEnd)
      this._setLine(this._lines.projCeil,  0, 0, 0, 0, 0, 0)

      // ── Enclosure / net measurement lines ──
      const { w: eW, h: eH, d: eD } = isNetMode ? this._getNetDims() : this._getEnclosureDims()
      const ez0 = 30
      const ehw = eW / 2
      const encOn = this.showEnclosure
      const ex = ehw + 20
      if (encOn) {
        this._setLine(this._lines.encW,      -ehw, eH + 12, ez0 + eD,    ehw,  eH + 12, ez0 + eD)
        this._setLine(this._lines.encH,      ex,   0,        ez0,         ex,   eH,       ez0)
        this._setLine(this._lines.encD,      ex,   eH + 5,   ez0,         ex,   eH + 5,   ez0 + eD)
        this._setLine(this._lines.encToBack, 0,    10,       0,           0,    10,       ez0)
      } else {
        this._setLine(this._lines.encW,      0, 0, 0, 0, 0, 0)
        this._setLine(this._lines.encH,      0, 0, 0, 0, 0, 0)
        this._setLine(this._lines.encD,      0, 0, 0, 0, 0, 0)
        this._setLine(this._lines.encToBack, 0, 0, 0, 0, 0, 0)
      }

      // ── Mat lines (step 4 only) ──
      const lineStep = this.$store.state.env.openStep
      const mW2 = this.matWCm / 2
      const mD2 = this.matDCm / 2
      if (lineStep === 4) {
        this._setLine(this._lines.matW, -mW2, 5, gZ + mD2 + 10,  mW2, 5, gZ + mD2 + 10)
        this._setLine(this._lines.matD, mW2 + 20, 5, gZ - mD2,   mW2 + 20, 5, gZ + mD2)
      } else {
        this._setLine(this._lines.matW, 0, 0, 0, 0, 0, 0)
        this._setLine(this._lines.matD, 0, 0, 0, 0, 0, 0)
      }

      // ── Step-based dim / manual toggle on step 4 ──
      const LINE_STEP_ACTIVE = {
        0: ['golfer', 'enclosure'],
        1: ['room', 'enclosure'],
        2: ['screen', 'projector', 'enclosure'],
        3: ['golfer', 'room'],
      }
      const lineActiveGroups = this.readOnly ? null : LINE_STEP_ACTIVE[lineStep]
      const LINE_GROUPS = {
        room:      [this._lines.roomW, this._lines.roomH, this._lines.roomD],
        screen:    [this._lines.screenW, this._lines.screenH],
        golfer:    [this._lines.golferScr],
        projector: [this._lines.projFloor, this._lines.projCeil],
        enclosure: [this._lines.encW, this._lines.encH, this._lines.encD, this._lines.encToBack],
      }
      for (const [group, lines] of Object.entries(LINE_GROUPS)) {
        const op = lineActiveGroups
          ? (lineActiveGroups.includes(group) ? 0.75 : 0.08)
          : (this.dimmedGroups[group] ? 0.08 : 0.75)
        lines.forEach(l => { if (l) l.material.opacity = op })
      }
      if (lineStep === 4 || this.readOnly) {
        const matLineOp = 0.75
        ;[this._lines.matW, this._lines.matD].forEach(l => { if (l) l.material.opacity = matLineOp })
      }
    },
  },
}
</script>

<style>
.canvas-area {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.gsp-hover-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff;
  pointer-events: none;
  transition: box-shadow 0.22s ease;
  box-shadow:
    0 0 3px 2px rgba(255, 255, 255, 0.92),
    0 0 9px 5px rgba(255, 255, 255, 0.4),
    0 0 18px 9px rgba(255, 255, 255, 0.15);
}
.gsp-hover-dot.hovered {
  box-shadow:
    0 0 3px 2px rgba(255, 255, 255, 0.98),
    0 0 9px 5px rgba(255, 255, 255, 0.65),
    0 0 18px 9px rgba(255, 255, 255, 0.32),
    0 0 30px 15px rgba(255, 255, 255, 0.12);
}

/* ── Viewport controls bar ─────────────────────── */
.vc-bar {
  position: absolute;
  bottom: 18px;
  left: 18px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  z-index: 10;
}
.vc-group {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vc-trigger {
  height: 34px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 12px 0 10px;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: background var(--dur-base), color var(--dur-base), border-color var(--dur-base);
  font-size: 11px;
  font-family: var(--font-sans);
  font-weight: 600;
  white-space: nowrap;
}
.vc-trigger:hover { background: var(--surface-1); color: var(--text-primary); border-color: var(--border-strong); }
.vc-trigger.vc-trigger-on { background: #fff5f5; border-color: var(--rap-red); color: var(--rap-red); }
.vc-flyout {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 7px;
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}
.vc-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--surface-1);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 11px;
  font-family: var(--font-sans);
  font-weight: 600;
  padding: 5px 10px 5px 8px;
  cursor: pointer;
  transition: background var(--dur-base), color var(--dur-base), border-color var(--dur-base);
  text-align: left;
}
.vc-btn:hover { background: #ebebeb; border-color: var(--border-strong); color: var(--text-primary); }
.vc-btn.vc-active { background: #fff5f5; border-color: var(--rap-red); color: var(--rap-red); }
.vc-btn.vc-off { color: var(--text-tertiary); border-color: var(--border-default); background: var(--surface-0); }
.vc-btn.vc-off:hover { color: var(--text-secondary); border-color: var(--border-default); }
</style>