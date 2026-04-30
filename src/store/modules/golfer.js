export default {
  namespaced: true,
  state: () => ({ golferHeight: '5', golferHeightIn: '10', golferHeightCm: 178, hitPosition: '8.5', matWidth: '5', matDepth: '3' }),
  getters: {},
  mutations: {
    setGolferHeight(state, { ft, inches, cm }) {
      state.golferHeight = ft
      state.golferHeightIn = inches
      state.golferHeightCm = cm !== undefined ? cm : Math.round((parseInt(ft) * 12 + parseInt(inches)) * 2.54)
    },
    setHitPosition(state, v) { state.hitPosition = v },
    setMatWidth(state, v) { state.matWidth = v },
    setMatDepth(state, v) { state.matDepth = v },
  },
}
