export default {
  namespaced: true,
  state: () => ({ selectedMonitor: 'Side' }),
  mutations: {
    setSelectedMonitor(state, v) { state.selectedMonitor = v },
  },
}
