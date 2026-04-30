export default {
  computed: {
    isMetric() { return this.$store.state.env.unit === 'metric' },
    dispUnit()  { return this.isMetric ? 'm' : 'ft' },
    dispStep()  { return this.isMetric ? 0.05 : 0.1 },
  },
  methods: {
    // Feet → display unit (number)
    fd(ft, dec) {
      const v = this.isMetric ? parseFloat(ft) * 0.3048 : parseFloat(ft)
      const d = dec !== undefined ? dec : 1
      return parseFloat(v.toFixed(d))
    },
    // Display unit → feet (string for store)
    df(val) {
      return this.isMetric
        ? String((parseFloat(val) / 0.3048).toFixed(4))
        : String(val)
    },
    // Format a feet value as ft'in" or X.XXm
    fmtFtIn(ft) {
      if (this.isMetric) return `${(parseFloat(ft) * 0.3048).toFixed(1)} m`
      const total = Math.round(parseFloat(ft) * 12)
      return `${Math.floor(total / 12)}'${total % 12}"`
    },
  },
}
