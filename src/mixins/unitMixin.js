export default {
  methods: {
    ftToCm(ft) { return parseFloat(ft) * 30.48 },
    cmToFt(cm) { return cm / 30.48 },
    inToCm(inch) { return parseFloat(inch) * 2.54 },
    cmToIn(cm) { return cm / 2.54 },
    ftToIn(ft) { return parseFloat(ft) * 12 },
    inToFt(inch) { return parseFloat(inch) / 12 },

    formatFt(val) { return parseFloat(val).toFixed(1) + "'" },
    formatIn(val) { return parseFloat(val).toFixed(1) + '"' },
    formatCm(val) { return parseFloat(val).toFixed(1) + ' cm' },

    displayValue(cm, unit) {
      if (unit === 'ft') return (cm / 30.48).toFixed(1)
      if (unit === 'inch') return (cm / 2.54).toFixed(1)
      return cm.toFixed(1)
    },
    toBaseCm(val, unit) {
      if (unit === 'ft') return parseFloat(val) * 30.48
      if (unit === 'inch') return parseFloat(val) * 2.54
      return parseFloat(val)
    },
  }
}
