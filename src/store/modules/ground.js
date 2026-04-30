import * as THREE from 'three'

export default {
  namespaced: true,
  state: () => ({
    ground: null,
  }),
  mutations: {
    setGround(state, mesh) { state.ground = mesh },
    updateGround(state, { wCm, dCm }) {
      if (state.ground) {
        state.ground.scale.set(wCm, dCm, 1)
        state.ground.position.setZ(dCm / 2)
      }
    },
  },
  actions: {
    initGround({ commit }, { scene, wCm, dCm }) {
      const canvas = document.createElement('canvas')
      canvas.width = 256
      canvas.height = 256
      const ctx = canvas.getContext('2d')
      const grd = ctx.createLinearGradient(0, 0, 0, 256)
      grd.addColorStop(0, '#2d5a1b')
      grd.addColorStop(0.5, '#4caf50')
      grd.addColorStop(1, '#388e3c')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, 256, 256)
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = i % 2 === 0 ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.03)'
        ctx.fillRect(0, i * 32, 256, 32)
      }
      const tex = new THREE.CanvasTexture(canvas)
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping
      tex.repeat.set(4, 6)

      const mat = new THREE.MeshPhongMaterial({ map: tex })
      const geo = new THREE.PlaneGeometry(1, 1)
      const ground = new THREE.Mesh(geo, mat)
      ground.rotation.x = -Math.PI / 2
      ground.position.set(0, 0, dCm / 2)
      ground.scale.set(wCm, dCm, 1)
      ground.receiveShadow = true
      scene.add(ground)
      commit('setGround', ground)
    },
  },
}
