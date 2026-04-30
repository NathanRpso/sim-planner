export default {
  namespaced: true,
  state: () => ({
    screenHeight: '5.44',
    screenWidth: '9.68',
    aspectRatio: '16:9',
    screenToCeiling: '3.55',
  }),
  mutations: {
    setScreenHeight(state, v) { state.screenHeight = v },
    setScreenWidth(state, v) { state.screenWidth = v },
    setAspectRatio(state, v) { state.aspectRatio = v },
    setScreenToCeiling(state, v) { state.screenToCeiling = v },
    setScreenDiagonal(state, v) {},
  },
}
