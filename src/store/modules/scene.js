import * as THREE from 'three'

export default {
  namespaced: true,
  state: () => ({
    scene: null,
  }),
  mutations: {
    setScene(state, scene) { state.scene = scene },
  },
  actions: {
    initScene({ commit }) {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x1a1a2e)

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5)
      hemiLight.position.set(0, 400, 200)
      scene.add(hemiLight)

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
      dirLight.position.set(200, 400, 300)
      dirLight.castShadow = true
      scene.add(dirLight)

      commit('setScene', scene)
    },
  },
}
