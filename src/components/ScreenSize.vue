<template>
  <div class="section" v-show="displayType !== 'net'">
    <div class="section-header" @click="open = !open">
      <span>🖥 Screen</span>
      <span class="chevron" :class="{ open }">▾</span>
    </div>
    <div class="section-body" v-show="open">
      <!-- Aspect Ratio -->
      <div class="form-row">
        <span class="form-label">Aspect Ratio</span>
        <select class="form-select" :value="aspectRatio" @change="onARChange">
          <option value="16:9">16:9 (HD)</option>
          <option value="16:10">16:10 (WUXGA)</option>
          <option value="4:3">4:3 (Standard)</option>
          <option value="1:1">1:1 (Square)</option>
        </select>
        <div class="ar-preview" :style="arPreviewStyle"></div>
      </div>

      <hr class="divider" />

      <!-- Screen Height + Width inline -->
      <div class="form-row">
        <span class="form-label" style="min-width:56px">H</span>
        <input class="form-input" type="number" :step="dispStep"
          :min="fd(3)" :max="fd(9)"
          :value="fd(screenHeight)" @input="onHeightInput" :class="{ error: !heightValid }" />
        <span class="form-unit">{{ dispUnit }}</span>
        <span class="form-label" style="min-width:32px;margin-left:8px">W</span>
        <input class="form-input" type="number" :step="dispStep"
          :min="fd(3)" :max="fd(20)"
          :value="fd(screenWidthFt)" @input="onWidthInput" :class="{ error: !widthValid }" />
        <span class="form-unit">{{ dispUnit }}</span>
      </div>

      <!-- Diagonal (read-only) -->
      <div class="form-row" style="margin-top:8px">
        <span class="form-label">Diagonal</span>
        <div class="readonly-field">{{ screenDiagonalDisplay }}</div>
      </div>

      <hr class="divider" />

      <!-- Ceiling to Screen Top -->
      <div class="form-label-full">Screen Top to Ceiling</div>
      <div class="form-row">
        <input class="form-input wide" type="number" :step="dispStep"
          :min="fd(0.3)" :max="fd(5.5)"
          :value="fd(screenToCeiling)" @input="onCeilInput" :class="{ error: !ceilValid }" />
        <span class="form-unit">{{ dispUnit }}</span>
      </div>
      <div class="slider-wrap">
        <input type="range" :min="fd(0.3)" :max="fd(5.5)" :step="dispStep"
          :value="fd(screenToCeiling)" @input="onCeilInput" />
        <div class="range-display"><span>{{ fd(0.3) }} {{ dispUnit }}</span><span>{{ fd(5.5) }} {{ dispUnit }}</span></div>
      </div>

    </div>
  </div>
</template>

<script>
import unitMixin from '@/mixins/units'
const AR_MAP = { '16:9': 16/9, '16:10': 16/10, '4:3': 4/3, '1:1': 1 }

export default {
  name: 'ScreenSize',
  mixins: [unitMixin],
  data() { return { open: true } },
  computed: {
    displayType()    { return this.$store.state.env.displayType },
    aspectRatio()    { return this.$store.state.screen.aspectRatio },
    screenHeight()   { return this.$store.state.screen.screenHeight },
    screenToCeiling(){ return this.$store.state.screen.screenToCeiling },
    arFloat()        { return AR_MAP[this.aspectRatio] || 16/9 },
    screenWidthFt()  { return parseFloat(this.$store.state.screen.screenWidth) },
    screenDiagonalIn() {
      const h = parseFloat(this.screenHeight), w = this.screenWidthFt
      return Math.sqrt(h*h + w*w) * 12
    },
    screenDiagonalDisplay() {
      return this.isMetric
        ? `${(this.screenDiagonalIn * 2.54).toFixed(0)} cm`
        : `${this.screenDiagonalIn.toFixed(1)}"`
    },
    heightValid() { const v = parseFloat(this.screenHeight); return v >= 3 && v <= 9 },
    widthValid()  { const v = this.screenWidthFt; return v >= 3 && v <= 20 },
    ceilValid()   { const v = parseFloat(this.screenToCeiling); return v >= 0.3 && v <= 5.5 },
    arPreviewStyle() {
      const h = 36, w = Math.round(h * this.arFloat)
      return { height: h+'px', width: w+'px', background:'#b0bec5', border:'2px solid #78909c', borderRadius:'2px', flexShrink:0 }
    },
  },
  methods: {
    onARChange(e) {
      this.$store.commit('screen/setAspectRatio', e.target.value)
      this.$nextTick(() => this.recalcWidth())
    },
    onHeightInput(e) {
      this.$store.commit('screen/setScreenHeight', this.df(e.target.value))
      this.recalcWidth()
    },
    onWidthInput(e) {
      this.$store.commit('screen/setScreenWidth', this.df(e.target.value))
      this.recalcHeight()
    },
    onCeilInput(e) {
      this.$store.commit('screen/setScreenToCeiling', this.df(e.target.value))
    },
    recalcWidth() {
      const h = parseFloat(this.$store.state.screen.screenHeight)
      const wFt = h * this.arFloat
      this.$store.commit('screen/setScreenWidth', wFt.toFixed(2))
    },
    recalcHeight() {
      const w = parseFloat(this.$store.state.screen.screenWidth)
      const hFt = w / this.arFloat
      this.$store.commit('screen/setScreenHeight', hFt.toFixed(2))
    },
  },
}
</script>
