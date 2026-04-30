export default {
  methods: {
    validateFloat(val) {
      if (val === '' || val === null || val === undefined) return false
      return !isNaN(parseFloat(val)) && isFinite(val)
    },
    clamp(val, min, max) {
      return Math.min(Math.max(parseFloat(val), min), max)
    },
    inRange(val, min, max) {
      const n = parseFloat(val)
      return !isNaN(n) && n >= min && n <= max
    }
  }
}
