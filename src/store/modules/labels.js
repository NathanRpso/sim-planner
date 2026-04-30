import * as THREE from 'three'
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'

function makeLabel(text, color = '#546e7a') {
  const div = document.createElement('div')
  div.style.cssText = `
    background: ${color};
    color: white;
    font-size: 11px;
    font-weight: 600;
    font-family: Inter, sans-serif;
    padding: 2px 8px;
    border-radius: 999px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.4);
    pointer-events: none;
    white-space: nowrap;
    user-select: none;
  `
  div.textContent = text
  const obj = new CSS2DObject(div)
  return { obj, div }
}

export default {
  namespaced: true,
  state: () => ({
    labels: {},
    anchors: {},
  }),
  mutations: {
    setLabels(state, { labels, anchors }) {
      state.labels = labels
      state.anchors = anchors
    },
    updateLabel(state, { key, text, position }) {
      if (state.anchors[key] && position) {
        state.anchors[key].position.set(position.x, position.y, position.z)
      }
      if (state.labels[key]) {
        state.labels[key].div.textContent = text
      }
    },
  },
  actions: {
    initLabels({ commit }, { scene, wCm, hCm, dCm, screenH, screenW, screenCY, golferZ }) {
      const labels = {}
      const anchors = {}

      const defs = [
        { key: 'roomWidth',    text: `${(wCm/30.48).toFixed(1)}'`,  pos: [0, hCm + 20, 0],           color: '#f57f17' },
        { key: 'roomHeight',   text: `${(hCm/30.48).toFixed(1)}'`,  pos: [-wCm/2 - 30, hCm/2, dCm/2], color: '#f57f17' },
        { key: 'roomDepth',    text: `${(dCm/30.48).toFixed(1)}'`,  pos: [-wCm/2 - 30, hCm + 20, dCm/2], color: '#f57f17' },
        { key: 'screenWidth',  text: `${(screenW/30.48).toFixed(1)}'`,  pos: [0, screenCY + screenH/2 + 15, 2], color: '#1565c0' },
        { key: 'screenHeight', text: `${(screenH/30.48).toFixed(1)}'`,  pos: [screenW/2 + 20, screenCY, 2], color: '#1565c0' },
        { key: 'screenTop',    text: '',                             pos: [screenW/2 + 60, hCm - 10, 2], color: '#1565c0' },
        { key: 'screenBottom', text: '',                             pos: [screenW/2 + 60, 30, 2],    color: '#1565c0' },
        { key: 'golferHeight', text: `5'10"`,                       pos: [30, 90, golferZ],           color: '#546e7a' },
        { key: 'golferToScreen', text: '',                           pos: [0, 30, golferZ / 2],       color: '#546e7a' },
        { key: 'projToFloor',  text: '',                             pos: [60, hCm / 2, golferZ],     color: '#6a1b9a' },
        { key: 'projToCeiling', text: '',                            pos: [60, hCm - 20, golferZ],    color: '#6a1b9a' },
        { key: 'throwDist',   text: '',                              pos: [0, hCm + 15, golferZ / 2], color: '#00838f' },
      ]

      defs.forEach(({ key, text, pos, color }) => {
        const anchor = new THREE.Object3D()
        anchor.position.set(...pos)
        scene.add(anchor)
        const { obj, div } = makeLabel(text, color)
        anchor.add(obj)
        labels[key] = { obj, div }
        anchors[key] = anchor
      })

      commit('setLabels', { labels, anchors })
    },
  },
}
