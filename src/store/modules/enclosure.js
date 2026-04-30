export default {
  namespaced: true,
  state: () => ({
    encWidth:  10.0,
    encHeight:  8.0,
    encDepth:   3.4,
    netWidth:  10.0,
    netHeight:  7.0,
    netDepth:   4.3,
  }),
  mutations: {
    setEncWidth(state, val)  { state.encWidth  = val },
    setEncHeight(state, val) { state.encHeight = val },
    setEncDepth(state, val)  { state.encDepth  = val },
    setNetWidth(state, val)  { state.netWidth  = val },
    setNetHeight(state, val) { state.netHeight = val },
    setNetDepth(state, val)  { state.netDepth  = val },
  },
}
