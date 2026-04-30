<template>
  <div class="section">
    <div class="section-header" @click="open = !open">
      <span>⚙️ Advanced Setting</span>
      <span class="chevron" :class="{ open }">▾</span>
    </div>
    <div class="section-body" v-show="open">
      <!-- Ceiling to Bottom -->
      <div class="form-label-full">Ceiling to Bottom of Projector</div>
      <div class="form-row">
        <input class="form-input wide" type="number" :step="dispStep"
          :min="fd(0.3)" :max="fd(5.5)"
          :value="fd(ceilingToBottom)" @input="onCtbInput" :class="{ error: !ctbValid }" />
        <span class="form-unit">{{ dispUnit }}</span>
      </div>
      <div class="slider-wrap">
        <input type="range" :min="fd(0.3)" :max="fd(5.5)" :step="dispStep"
          :value="fd(ceilingToBottom)" @input="onCtbInput" />
        <div class="range-display"><span>{{ fd(0.3) }} {{ dispUnit }}</span><span>{{ fd(5.5) }} {{ dispUnit }}</span></div>
      </div>

      <hr class="divider" />

      <!-- Horizontal Move -->
      <div class="form-label-full">Projector Horizontal Move</div>
      <div class="form-row">
        <input class="form-input wide" type="number" :step="dispStep"
          :min="fd(-6)" :max="fd(6)"
          :value="fd(horizontal)" @input="onHorizInput" />
        <span class="form-unit">{{ dispUnit }} (0 = center)</span>
      </div>
      <div class="slider-wrap">
        <input type="range" :min="fd(-6)" :max="fd(6)" :step="dispStep"
          :value="fd(horizontal)" @input="onHorizInput" />
        <div class="range-display"><span>{{ fd(-6) }} {{ dispUnit }}</span><span>+{{ fd(6) }} {{ dispUnit }}</span></div>
      </div>

      <hr class="divider" />

      <!-- Horizontal Rotation -->
      <div class="form-label-full">Horizontal Rotation</div>
      <div class="form-row">
        <input class="form-input wide" type="number" step="1" min="-15" max="15"
          :value="horizontalRotation" @input="onRotInput" />
        <span class="form-unit">°</span>
      </div>
      <div class="slider-wrap">
        <input type="range" min="-15" max="15" step="1" :value="horizontalRotation" @input="onRotInput" />
        <div class="range-display"><span>-15°</span><span>+15°</span></div>
      </div>

      <hr class="divider" />

      <!-- Live readout -->
      <div class="info-strip">
        <span>Proj X: {{ projXDisp }}</span>
        <span>Proj Y: {{ projYDisp }}</span>
        <span>Proj Z: {{ projZDisp }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import unitMixin from '@/mixins/units'

export default {
  name: 'AdvancedSetting',
  mixins: [unitMixin],
  data() { return { open: false } },
  computed: {
    ceilingToBottom()   { return this.$store.state.projector.ceilingToBottom },
    horizontal()        { return this.$store.state.projector.horizontal },
    horizontalRotation(){ return this.$store.state.projector.horizontalRotation },
    wallHeightCm()      { return parseFloat(this.$store.state.wall.wallHeight) * 30.48 },
    ctbValid() { const v = parseFloat(this.ceilingToBottom); return v >= 0.3 && v <= 5.5 },
    projXFt()  { return this.horizontal },
    projYFt() {
      const ctb = parseFloat(this.ceilingToBottom) * 30.48
      const lck = this.$store.state.projector.selectedModel?.lensCenterToLockHole || 0
      return (this.wallHeightCm - ctb - lck) / 30.48
    },
    projZFt() { return this.$store.state.projector.hitPosition },
    projXDisp() { return `${this.fd(this.projXFt, 2)} ${this.dispUnit}` },
    projYDisp() { return `${this.fd(this.projYFt, 2)} ${this.dispUnit}` },
    projZDisp() { return `${this.fd(this.projZFt, 2)} ${this.dispUnit}` },
  },
  methods: {
    onCtbInput(e)   { this.$store.commit('projector/setCeilingToBottom', this.df(e.target.value)) },
    onHorizInput(e) { this.$store.commit('projector/setHorizontal', parseFloat(this.df(e.target.value)) || 0) },
    onRotInput(e)   { this.$store.commit('projector/setHorizontalRotation', parseFloat(e.target.value) || 0) },
  },
}
</script>
