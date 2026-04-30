import * as THREE from 'three'

function makeDashedLine(color = 0xffd600, opacity = 0.7) {
  const geo = new THREE.BufferGeometry()
  const verts = new Float32Array(6)
  geo.setAttribute('position', new THREE.BufferAttribute(verts, 3))
  const mat = new THREE.LineDashedMaterial({ color, dashSize: 8, gapSize: 4, opacity, transparent: true })
  const line = new THREE.Line(geo, mat)
  line.computeLineDistances()
  return line
}

function updateLine(line, from, to) {
  if (!line) return
  const pos = line.geometry.attributes.position
  pos.setXYZ(0, from.x, from.y, from.z)
  pos.setXYZ(1, to.x, to.y, to.z)
  pos.needsUpdate = true
  line.computeLineDistances()
}

export default {
  namespaced: true,
  state: () => ({
    lines: {},
  }),
  mutations: {
    setLines(state, lines) { state.lines = lines },
    updateRoomLines(state, { wCm, hCm, dCm }) {
      updateLine(state.lines.roomWidth,  { x: -wCm/2, y: hCm + 10, z: 0 }, { x: wCm/2, y: hCm + 10, z: 0 })
      updateLine(state.lines.roomHeight, { x: -wCm/2 - 20, y: 0, z: 0 }, { x: -wCm/2 - 20, y: hCm, z: 0 })
      updateLine(state.lines.roomDepth,  { x: -wCm/2 - 20, y: hCm + 10, z: 0 }, { x: -wCm/2 - 20, y: hCm + 10, z: dCm })
    },
    updateScreenLines(state, { screenW, screenH, screenCY }) {
      updateLine(state.lines.screenWidth, { x: -screenW/2, y: screenCY + screenH/2 + 8, z: 1 }, { x: screenW/2, y: screenCY + screenH/2 + 8, z: 1 })
      updateLine(state.lines.screenHeight, { x: screenW/2 + 15, y: screenCY - screenH/2, z: 1 }, { x: screenW/2 + 15, y: screenCY + screenH/2, z: 1 })
    },
    updateGolferLines(state, { golferZ, screenZ }) {
      updateLine(state.lines.golferToScreen, { x: 0, y: 20, z: golferZ }, { x: 0, y: 20, z: screenZ })
    },
    updateProjectorBeam(state, { projX, projY, projZ }) {
      updateLine(state.lines.projToFloor, { x: projX + 35, y: 0, z: projZ }, { x: projX + 35, y: projY, z: projZ })
      updateLine(state.lines.projToCeiling, { x: projX + 35, y: projY, z: projZ }, { x: projX + 35, y: projY + 60, z: projZ })
    },
  },
  actions: {
    initLines({ commit }, { scene, wCm, hCm, dCm, screenW, screenH, screenCY, golferZ }) {
      const lines = {
        roomWidth:    makeDashedLine(0xffd600),
        roomHeight:   makeDashedLine(0xffd600),
        roomDepth:    makeDashedLine(0xffd600),
        screenWidth:  makeDashedLine(0x2196f3),
        screenHeight: makeDashedLine(0x2196f3),
        golferToScreen: makeDashedLine(0xffffff, 0.5),
        projToFloor:  makeDashedLine(0xce93d8),
        projToCeiling: makeDashedLine(0xce93d8),
      }

      Object.values(lines).forEach(l => scene.add(l))
      commit('setLines', lines)
    },
  },
}
