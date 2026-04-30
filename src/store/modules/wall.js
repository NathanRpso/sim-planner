export default {
  namespaced: true,
  state: () => ({ wallHeight: '10.0', wallWidth: '14.108', wallDepth: '16.404', ceilingMaterial: 'drywall' }),
  getters: {
    wallHeightCm: s => parseFloat(s.wallHeight) * 30.48,
    wallWidthCm: s => parseFloat(s.wallWidth) * 30.48,
    wallDepthCm: s => parseFloat(s.wallDepth) * 30.48,
  },
  mutations: {
    setWallHeight(state, v) { state.wallHeight = v },
    setWallWidth(state, v) { state.wallWidth = v },
    setWallDepth(state, v) { state.wallDepth = v },
    setCeilingMaterial(state, v) { state.ceilingMaterial = v },
  },
}
