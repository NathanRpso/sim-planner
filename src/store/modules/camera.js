import * as THREE from 'three'

export default {
  namespaced: true,
  state: () => ({
    camera: null,
  }),
  mutations: {
    setCamera(state, camera) { state.camera = camera },
    updateAspect(state, aspect) {
      if (state.camera) {
        state.camera.aspect = aspect
        state.camera.updateProjectionMatrix()
      }
    },
  },
  actions: {
    initCamera({ commit }, { width, height }) {
      const aspect = width / height
      const camera = new THREE.PerspectiveCamera(50, aspect, 1, 3000)
      camera.position.set(-624, 217, 466)
      camera.lookAt(0, 150, 150)
      commit('setCamera', camera)
    },
  },
}
