<template>
  <div class="section">
    <div class="section-header" @click="open = !open">
      <span>⛳ Basic Setup</span>
      <span class="chevron" :class="{ open }">▾</span>
    </div>
    <div class="section-body" v-show="open">

      <!-- Units -->
      <div class="form-row">
        <span class="form-label">Units</span>
        <div class="radio-group">
          <span class="radio-pill" :class="{ active: isMetric }"  @click="setUnit('metric')">Metric</span>
          <span class="radio-pill" :class="{ active: !isMetric }" @click="setUnit('imperial')">Imperial</span>
        </div>
      </div>

      <hr class="divider" />

      <!-- Launch Monitor -->
      <div class="form-row">
        <span class="form-label">Launch Monitor</span>
        <span class="readonly-field">Ceiling (CLM)</span>
      </div>

      <hr class="divider" />

      <!-- Display Type -->
      <div class="form-row">
        <span class="form-label">Display</span>
        <div class="radio-group">
          <span class="radio-pill" :class="{ active: displayType === 'projector' }" @click="setDisplay('projector')">Projector</span>
          <span class="radio-pill" :class="{ active: displayType === 'net' }" @click="setDisplay('net')">Net</span>
        </div>
      </div>
      <span v-if="displayType === 'projector'" class="proj-badge" title="Recommended for best image quality and throw distance flexibility">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        Recommended
      </span>

      <hr class="divider" />

      <!-- Computer Type -->
      <div class="form-row">
        <span class="form-label">Computer</span>
        <div class="radio-group">
          <span class="radio-pill" :class="{ active: computerType === 'desktop' }" @click="setComputer('desktop')">Desktop</span>
          <span class="radio-pill" :class="{ active: computerType === 'laptop' }" @click="setComputer('laptop')">Laptop</span>
        </div>
      </div>

      <hr class="divider" />

      <!-- Golfer Height -->
      <div class="form-label-full">Golfer Height</div>
      <div v-if="!isMetric" class="form-row">
        <div class="golfer-height-inputs">
          <input class="form-input" type="number" min="4" max="8"
            :value="golferFt" @change="onFtChange" @focus="focusGolfer" @click="focusGolfer" />
          <span class="form-unit">ft</span>
          <input class="form-input" type="number" min="0" :max="golferFt >= 8 ? 1 : 11"
            :value="golferIn" @change="onInChange" @focus="focusGolfer" @click="focusGolfer" />
          <span class="form-unit">in</span>
        </div>
        <div class="form-unit" style="margin-left:4px">= {{ golferCm }} cm</div>
      </div>
      <div v-else class="form-row">
        <input class="form-input wide" type="number" min="122" max="244" step="1"
          :value="golferCm" @change="onCmChange" @focus="focusGolfer" @click="focusGolfer" />
        <span class="form-unit">cm</span>
      </div>

      <hr class="divider" />

      <!-- Handedness -->
      <div class="form-row">
        <span class="form-label">Handedness</span>
        <div class="radio-group">
          <span class="radio-pill" :class="{ active: handedness === 'right' }" @click="setHand('right')">Right</span>
          <span class="radio-pill" :class="{ active: handedness === 'left' }"  @click="setHand('left')">Left</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import unitMixin from '@/mixins/units'

export default {
  name: 'BasicSetting',
  mixins: [unitMixin],
  data() { return { open: true } },
  computed: {
    golferFt()    { return this.$store.state.golfer.golferHeight },
    golferIn()    { return this.$store.state.golfer.golferHeightIn },
    golferCm() {
      const ft = parseInt(this.golferFt) || 5
      const inches = parseInt(this.golferIn) || 10
      return ((ft * 12 + inches) * 2.54).toFixed(0)
    },
    displayType()   { return this.$store.state.env.displayType },
    computerType()  { return this.$store.state.env.computerType },
    handedness()    { return this.$store.state.env.handedness },
  },
  methods: {
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
    onCmChange(e) {
      const cm = Math.min(244, Math.max(122, parseInt(e.target.value) || 178))
      const totalIn = Math.round(cm / 2.54)
      const ft = Math.floor(totalIn / 12)
      const inches = totalIn % 12
      this.$store.commit('golfer/setGolferHeight', { ft: String(ft), inches: String(inches) })
    },
    setUnit(u)     { this.$store.commit('env/setUnit', u) },
    setDisplay(v) {
      this.$store.commit('env/setDisplayType', v)
      this.$store.commit('env/setCameraFocus', 'display')
    },
    setComputer(v) {
      this.$store.commit('env/setComputerType', v)
      this.$store.commit('env/setCameraFocus', 'computer')
    },
    focusGolfer() { this.$store.commit('env/setCameraFocus', 'golfer') },
    setHand(v) { this.$store.commit('env/setHandedness', v) },
  },
}
</script>

<style scoped>
.proj-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1.5px solid #c9a227;
  border-radius: 4px;
  padding: 3px 10px 3px 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #8a6500;
  background: linear-gradient(120deg, rgba(255,215,0,0.08) 0%, rgba(201,162,39,0.14) 100%);
  margin-bottom: 4px;
  cursor: default;
  user-select: none;
}
</style>
