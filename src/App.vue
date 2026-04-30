<template>
  <div class="app-root">
    <NavBar />
    <HeroSection />
    <section id="configurator" class="configurator-section" ref="configuratorSection">
      <div v-if="configuratorReady" class="app-layout">
        <ThreeScene :read-only="showResults" />
        <ControlPanel v-show="!showResults" />
        <ResultsPanel v-show="showResults" />
        <WelcomeModal ref="welcomeModal" />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ThreeScene from './components/ThreeScene.vue'
import ControlPanel from './components/ControlPanel.vue'
import ResultsPanel from './components/ResultsPanel.vue'
import WelcomeModal from './components/WelcomeModal.vue'
import { PROJECTOR_MODELS } from './constants'

export default {
  name: 'App',
  components: { NavBar, HeroSection, ThreeScene, ControlPanel, ResultsPanel, WelcomeModal },

  data() {
    return { configuratorReady: false }
  },

  computed: {
    showResults() { return this.$store.state.env.showResults },
  },

  mounted() {
    this._initUrlParams()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.configuratorReady = true
          observer.disconnect()
          this.$nextTick(() => this.$refs.welcomeModal?.show())
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(this.$refs.configuratorSection)
  },

  methods: {
    _initUrlParams() {
      const params = new URLSearchParams(window.location.search)

      const screenSize = params.get('screen_size__golf_')
      if (screenSize) {
        const m = screenSize.match(/(\d+)'x(\d+)/)
        if (m) {
          const hFt = parseInt(m[1])
          const hIn = parseInt(m[2])
          const totalFt = hFt + hIn / 12
          this.$store.commit('screen/setScreenHeight', totalFt.toFixed(1))
        }
      }

      const ar = params.get('aspect_ratio')
      if (ar && ['16:9', '16:10', '4:3', '1:1'].includes(ar)) {
        this.$store.commit('screen/setAspectRatio', ar)
      }

      const monitor = params.get('launch_monitor_position')
      if (monitor) {
        this.$store.commit('monitor/setSelectedMonitor', monitor)
        this.$store.commit('env/setLaunchMonitor', monitor)
      }

      const projModel = params.get('recommended_projector')
      if (projModel) {
        const model = PROJECTOR_MODELS.find(m => m.modelName === projModel)
        if (model) this.$store.commit('projector/setSelectedModel', model)
      }
    },
  },
}
</script>

<style>
.app-root {
  width: 100%;
}


.configurator-section {
  width: 100%;
  height: calc(100vh - 112px);
  scroll-margin-top: 112px;
  position: relative;
}

.app-layout {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
