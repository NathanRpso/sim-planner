<template>
  <div class="section">
    <div class="section-header" @click="open = !open">
      <span>🟩 Hitting Position</span>
      <span class="chevron" :class="{ open }">▾</span>
    </div>
    <div class="section-body" v-show="open">

      <!-- Mat W + D inline -->
      <div class="form-label-full">Mat Size</div>
      <div class="form-row">
        <span class="form-label" style="min-width:56px">W</span>
        <input class="form-input" type="number" :step="dispStep"
          :min="fd(2)" :max="fd(10)"
          :value="fd(matWidth)" @input="onWidthInput" />
        <span class="form-unit">{{ dispUnit }}</span>
        <span class="form-label" style="min-width:32px;margin-left:8px">D</span>
        <input class="form-input" type="number" :step="dispStep"
          :min="fd(2)" :max="fd(6)"
          :value="fd(matDepth)" @input="onDepthInput" />
        <span class="form-unit">{{ dispUnit }}</span>
      </div>

      <hr class="divider" />

      <!-- Hitting Area to Screen -->
      <div class="form-label-full">Hitting Area to Screen</div>
      <div class="form-row">
        <input class="form-input wide" type="number" :step="dispStep"
          :min="fd(2)" :max="fd(parseFloat(wallDepth))"
          :value="fd(hittingAreaToScreen)" @input="onHitInput" :class="{ error: !hitValid }" />
        <span class="form-unit">{{ dispUnit }}</span>
      </div>
      <div class="slider-wrap">
        <input type="range" :min="fd(2)" :max="fd(parseFloat(wallDepth))" :step="dispStep"
          :value="fd(hittingAreaToScreen)" @input="onHitInput" />
        <div class="range-display"><span>{{ fd(2) }} {{ dispUnit }}</span><span>{{ fd(parseFloat(wallDepth)) }} {{ dispUnit }}</span></div>
      </div>
      <div class="warning-text" v-if="!hitValid">Range: {{ fd(2) }}–{{ fd(parseFloat(wallDepth)) }} {{ dispUnit }}</div>

    </div>
  </div>
</template>

<script>
import unitMixin from '@/mixins/units'

export default {
  name: 'MatSetting',
  mixins: [unitMixin],
  data() { return { open: true } },
  computed: {
    matWidth()   { return this.$store.state.golfer.matWidth },
    matDepth()   { return this.$store.state.golfer.matDepth },
    hitPosition(){ return this.$store.state.projector.hitPosition },
    wallDepth()  { return this.$store.state.wall.wallDepth },
    showEnclosure() { return this.$store.state.env.showEnclosure },
    displayType()   { return this.$store.state.env.displayType },
    screenOffsetFt() {
      return (this.showEnclosure && this.displayType === 'projector') ? 30 / 30.48 : 0
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
    onWidthInput(e) { this.$store.commit('golfer/setMatWidth', this.df(e.target.value)) },
    onDepthInput(e) { this.$store.commit('golfer/setMatDepth', this.df(e.target.value)) },
    onHitInput(e) {
      const v = (parseFloat(this.df(e.target.value)) + this.screenOffsetFt).toFixed(2)
      this.$store.commit('projector/setHitPosition', v)
      this.$store.commit('golfer/setHitPosition', v)
    },
  },
}
</script>
