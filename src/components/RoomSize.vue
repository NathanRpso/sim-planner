<template>
  <div class="section">
    <div class="section-header" @click="open = !open">
      <span>🏠 Room Specs</span>
      <span class="chevron" :class="{ open }">▾</span>
    </div>
    <div class="section-body" v-show="open">
      <!-- Height -->
      <div class="form-label-full">Ceiling Height</div>
      <div class="form-row">
        <input class="form-input wide" type="number" :step="dispStep"
          :min="fd(7.5)" :max="fd(15)"
          :value="fd(wallHeight)" @input="onHeightInput" :class="{ error: !heightValid }" />
        <span class="form-unit">{{ dispUnit }} &nbsp;({{ fmtFtIn(wallHeight) }})</span>
      </div>
      <div class="slider-wrap">
        <input type="range" :min="fd(7.5)" :max="fd(15)" :step="dispStep"
          :value="fd(wallHeight)" @input="onHeightInput" />
        <div class="range-display"><span>{{ fd(7.5) }} {{ dispUnit }}</span><span>{{ fd(15) }} {{ dispUnit }}</span></div>
      </div>
      <div class="warning-text" v-if="!heightValid">Range: {{ fd(7.5) }}–{{ fd(15) }} {{ dispUnit }}</div>

      <hr class="divider" />

      <!-- Width -->
      <div class="form-label-full">Room Width</div>
      <div class="form-row">
        <input class="form-input wide" type="number" :step="dispStep"
          :min="fd(9.5)" :max="fd(20)"
          :value="fd(wallWidth)" @input="onWidthInput" :class="{ error: !widthValid }" />
        <span class="form-unit">{{ dispUnit }} &nbsp;({{ fmtFtIn(wallWidth) }})</span>
      </div>
      <div class="slider-wrap">
        <input type="range" :min="fd(9.5)" :max="fd(20)" :step="dispStep"
          :value="fd(wallWidth)" @input="onWidthInput" />
        <div class="range-display"><span>{{ fd(9.5) }} {{ dispUnit }}</span><span>{{ fd(20) }} {{ dispUnit }}</span></div>
      </div>
      <div class="warning-text" v-if="!widthValid">Range: {{ fd(9.5) }}–{{ fd(20) }} {{ dispUnit }}</div>

      <hr class="divider" />

      <!-- Depth -->
      <div class="form-label-full">Room Depth</div>
      <div class="form-row">
        <input class="form-input wide" type="number" :step="dispStep"
          :min="fd(9.5)" :max="fd(30)"
          :value="fd(wallDepth)" @input="onDepthInput" :class="{ error: !depthValid }" />
        <span class="form-unit">{{ dispUnit }} &nbsp;({{ fmtFtIn(wallDepth) }})</span>
      </div>
      <div class="slider-wrap">
        <input type="range" :min="fd(9.5)" :max="fd(30)" :step="dispStep"
          :value="fd(wallDepth)" @input="onDepthInput" />
        <div class="range-display"><span>{{ fd(9.5) }} {{ dispUnit }}</span><span>{{ fd(30) }} {{ dispUnit }}</span></div>
      </div>
      <div class="warning-text" v-if="!depthValid">Range: {{ fd(9.5) }}–{{ fd(30) }} {{ dispUnit }}</div>

      <hr class="divider" />

      <!-- Ceiling Material -->
      <div class="form-label-full">Ceiling Material</div>
      <div class="ceil-mat-grid">
        <div v-for="opt in ceilOptions" :key="opt.value"
          class="ceil-mat-card" :class="{ active: ceilingMaterial === opt.value }"
          @click="setCeilingMaterial(opt.value)">
          <div class="ceil-mat-name">{{ opt.label }}</div>
          <div class="ceil-mat-sub">{{ opt.sub }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import unitMixin from '@/mixins/units'

export default {
  name: 'RoomSize',
  mixins: [unitMixin],
  data() {
    return {
      open: true,
      ceilOptions: [
        { value: 'drywall',  label: 'Drywall',     sub: 'Standard stud framing' },
        { value: 'concrete', label: 'Concrete',     sub: 'Masonry / block' },
        { value: 'wood',     label: 'Wood / Beam',  sub: 'Exposed timber' },
        { value: 'other',    label: 'Other',        sub: 'Unsure or unusual' },
      ],
    }
  },
  computed: {
    wallHeight()      { return this.$store.state.wall.wallHeight },
    wallWidth()       { return this.$store.state.wall.wallWidth },
    wallDepth()       { return this.$store.state.wall.wallDepth },
    ceilingMaterial() { return this.$store.state.wall.ceilingMaterial },
    heightValid() { const v = parseFloat(this.wallHeight); return v >= 7.5 && v <= 15 },
    widthValid()  { const v = parseFloat(this.wallWidth);  return v >= 9.5 && v <= 20 },
    depthValid()  { const v = parseFloat(this.wallDepth);  return v >= 9.5 && v <= 30 },
  },
  methods: {
    onHeightInput(e)      { this.$store.commit('wall/setWallHeight', this.df(e.target.value)) },
    onWidthInput(e)       { this.$store.commit('wall/setWallWidth',  this.df(e.target.value)) },
    onDepthInput(e)       { this.$store.commit('wall/setWallDepth',  this.df(e.target.value)) },
    setCeilingMaterial(v) { this.$store.commit('wall/setCeilingMaterial', v) },
  },
}
</script>

<style scoped>
.ceil-mat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 4px;
}

.ceil-mat-card {
  border: 1.5px solid #cfd8dc;
  border-radius: 6px;
  padding: 9px 11px;
  cursor: pointer;
  background: #f5f7f8;
  transition: border-color 0.15s, background 0.15s;
  user-select: none;
}

.ceil-mat-card:hover {
  border-color: #90a4ae;
  background: #ecf0f1;
}

.ceil-mat-card.active {
  border-color: #1976d2;
  background: #e3f2fd;
}

.ceil-mat-name {
  font-size: 12px;
  font-weight: 600;
  color: #263238;
}

.ceil-mat-card.active .ceil-mat-name {
  color: #1565c0;
}

.ceil-mat-sub {
  font-size: 10px;
  color: #78909c;
  margin-top: 2px;
}
</style>
