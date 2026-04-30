import { PROJECTOR_MODELS } from '@/constants'
export default {
  namespaced: true,
  state: () => ({
    selectedModel: PROJECTOR_MODELS[6],
    ceilingToBottom: '2.1',
    horizontal: 0,
    hitPosition: '8.5',
    horizontalRotation: 0,
    autoFitSetting: false,
  }),
  mutations: {
    setSelectedModel(state, v) { state.selectedModel = v },
    setCeilingToBottom(state, v) { state.ceilingToBottom = v },
    setHorizontal(state, v) { state.horizontal = v },
    setHitPosition(state, v) { state.hitPosition = v },
    setHorizontalRotation(state, v) { state.horizontalRotation = v },
    setAutoFit(state, v) { state.autoFitSetting = v },
  },
}
