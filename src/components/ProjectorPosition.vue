<template>
  <div class="section">
    <div class="section-header" @click="open = !open">
      <span>📡 Projector Position</span>
      <span class="chevron" :class="{ open }">▾</span>
    </div>
    <div class="section-body" v-show="open">
      <!-- Model Select -->
      <div class="form-label-full">Projector Model</div>
      <div class="form-row">
        <select class="form-select" :value="selectedModelName" @change="onModelChange">
          <option v-for="m in models" :key="m.modelName" :value="m.modelName">{{ m.modelName }}</option>
        </select>
      </div>

      <div class="model-info-badge" v-if="selectedModel">
        <span>{{ selectedModel.brightness }} lm</span>
        <span>|</span>
        <span>{{ selectedModel.resolution }}</span>
        <span>|</span>
        <span>TR {{ selectedModel.throwRatioWide }}{{ selectedModel.throwRatioTele ? '–' + selectedModel.throwRatioTele : '' }}</span>
      </div>

      <hr class="divider" />

      <!-- Auto Screen Fit -->
      <div class="checkbox-row">
        <input type="checkbox" id="autofit" :checked="autoFit" :disabled="!autoFitSupported" @change="onAutoFitChange" />
        <label for="autofit" :style="{ opacity: autoFitSupported ? 1 : 0.4 }">Auto Screen Fit</label>
        <span v-if="!autoFitSupported" style="font-size:10px;color:#90a4ae;">(AK700ST / AH700ST only)</span>
      </div>

      <hr class="divider" />

      <!-- Throw Distance -->
      <div class="form-row">
        <span class="form-label">Workable Throw</span>
        <div class="readonly-field">{{ throwRange }}</div>
        <span class="form-unit">{{ dispUnit }}</span>
      </div>

      <hr class="divider" />

      <!-- Tee to Screen -->
      <div class="form-label-full">Tee to Screen Distance</div>
      <div class="form-row">
        <input class="form-input wide" type="number" :step="dispStep"
          :min="fd(2)" :max="fd(parseFloat(wallDepth))"
          :value="fd(hitPosition)" @input="onHitInput" :class="{ error: !hitValid }" />
        <span class="form-unit">{{ dispUnit }}</span>
      </div>
      <div class="slider-wrap">
        <input type="range" :min="fd(2)" :max="fd(parseFloat(wallDepth))" :step="dispStep"
          :value="fd(hitPosition)" @input="onHitInput" />
        <div class="range-display"><span>{{ fd(2) }} {{ dispUnit }}</span><span>{{ fd(parseFloat(wallDepth)) }} {{ dispUnit }}</span></div>
      </div>
      <div class="warning-text" v-if="!hitValid">Range: {{ fd(2) }}–{{ fd(parseFloat(wallDepth)) }} {{ dispUnit }}</div>
    </div>
  </div>
</template>

<script>
import unitMixin from '@/mixins/units'
import { PROJECTOR_MODELS, AUTO_FIT_MODELS } from '@/constants'

export default {
  name: 'ProjectorPosition',
  mixins: [unitMixin],
  data() { return { open: true } },
  computed: {
    models()            { return PROJECTOR_MODELS },
    selectedModel()     { return this.$store.state.projector.selectedModel },
    selectedModelName() { return this.selectedModel?.modelName },
    autoFit()           { return this.$store.state.projector.autoFitSetting },
    autoFitSupported()  { return AUTO_FIT_MODELS.includes(this.selectedModelName) },
    hitPosition()       { return this.$store.state.projector.hitPosition },
    wallDepth()         { return this.$store.state.wall.wallDepth },
    hitValid() {
      const v = parseFloat(this.hitPosition)
      return v >= 2 && v <= parseFloat(this.wallDepth)
    },
    throwRange() {
      const m = this.selectedModel
      if (!m) return '--'
      const sH = parseFloat(this.$store.state.screen.screenHeight) * 30.48
      const minFt = (sH * m.aspectRatio * m.throwRatioWide / 30.48)
      if (!m.throwRatioTele) return `${this.fd(minFt, 1)}+`
      const maxFt = (sH * m.aspectRatio * m.throwRatioTele / 30.48)
      return `${this.fd(minFt, 1)} – ${this.fd(maxFt, 1)}`
    },
  },
  methods: {
    onModelChange(e) {
      const model = PROJECTOR_MODELS.find(m => m.modelName === e.target.value)
      if (model) this.$store.commit('projector/setSelectedModel', model)
    },
    onAutoFitChange(e) { this.$store.commit('projector/setAutoFit', e.target.checked) },
    onHitInput(e) {
      const v = this.df(e.target.value)
      this.$store.commit('projector/setHitPosition', v)
      this.$store.commit('golfer/setHitPosition', v)
    },
  },
}
</script>
