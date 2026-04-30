export const CONSTANTS = {
  UNIT: { CM: 1, FT: 30.48, INCH: 2.54 },
  WALL_OFFSET: 1,
  GOLFER_OFFSET: 259.16,
  PROJECTOR: {
    CEILINGMONT: 30.48,
    LENSCENTERTOLOCKHOLE: 7.14,
    THROW_RATIO: 0.85,
    VERTICAL_LENS_SHIFT: 0.6,
    HORIZONTAL_LENS_SHIFT: 0,
  },
  GOLFER: { HEIGHT: 177.8, LIMITMOVE: 5 },
  CAMERA: { PERSPECTIVEDISTANCE: 800, ORTHOGRAPHICDISTANCE: 800 },
  MONITOR: {
    SIDE_OFFSET_X_CM: 30.48,
    SIDE_OFFSET_Z_CM: 15.24,
    REAR_OFFSET_CM: 213.36,
    TOP_OFFSET_CM: 106.68,
  },
  ROOM: { HEIGHT: 304.8, WIDTH: 487.7, DEPTH: 609.6 },
  SCREEN: { HEIGHT: 213.4, WIDTH: 379.4, DEPTH: 307.3, DIAGONAL: 171.4 },
  AUTO_FIT_TELE: { DEFAULT: 1.63, BOOK: 1.467, NORMAL: 1.223, SQUARE: 0.917 },
}

export const PROJECTOR_MODELS = [
  { modelName: 'AK700ST', brightness: '4000', resolution: '4K UHD', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.025, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 5.73 },
  { modelName: 'TH671ST', brightness: '3000', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.025, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'LU710', brightness: '4000', resolution: 'WUXGA', aspectRatio: 1.60, throwRatioWide: 1.13, throwRatioTele: 1.46, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'MX825STH', brightness: '3500', resolution: 'XGA', aspectRatio: 1.33, throwRatioWide: 0.61, throwRatioTele: 0, lensOffset: 1.15, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 64 },
  { modelName: 'LU935ST', brightness: '5500', resolution: 'WUXGA', aspectRatio: 1.60, throwRatioWide: 0.81, throwRatioTele: 0.89, lensOffset: 1.0, lensShiftHorizontal: 23, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'TK700ST', brightness: '4000', resolution: '4K', aspectRatio: 1.78, throwRatioWide: 0.90, throwRatioTele: 1.08, lensOffset: 1.1, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 5.87 },
  { modelName: 'LK936ST', brightness: '5000', resolution: 'WUXGA', aspectRatio: 1.78, throwRatioWide: 0.81, throwRatioTele: 0.89, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 7.14 },
  { modelName: 'LK954ST', brightness: '5000', resolution: '4K', aspectRatio: 1.78, throwRatioWide: 0.81, throwRatioTele: 0.89, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 7.14 },
  { modelName: 'LW600ST', brightness: '3600', resolution: 'WXGA', aspectRatio: 1.60, throwRatioWide: 0.72, throwRatioTele: 0.87, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'LH600ST', brightness: '2000', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'TK710STi', brightness: '3000', resolution: '4K', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.025, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 5.7 },
  { modelName: 'AH700ST', brightness: '3500', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.025, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 5.7 },
  { modelName: 'LH835ST', brightness: '3500', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.025, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 5.7 },
  { modelName: 'AH500ST', brightness: '2000', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.499, throwRatioTele: 0, lensOffset: 1.12, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 6.71 },
  { modelName: 'AH30ST', brightness: '3000', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.025, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'LK835ST', brightness: '3500', resolution: 'WXGA', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.025, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 5.73 },
  { modelName: 'AW30ST', brightness: '3000', resolution: 'WXGA', aspectRatio: 1.60, throwRatioWide: 0.72, throwRatioTele: 0.87, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'LH600ST+', brightness: '2000', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.69, throwRatioTele: 0.83, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'LW600ST+', brightness: '3600', resolution: 'WXGA', aspectRatio: 1.60, throwRatioWide: 0.72, throwRatioTele: 0.87, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'LH830ST', brightness: '4000', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.496, throwRatioTele: 0, lensOffset: 1.16, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'LK830ST', brightness: '4000', resolution: 'WXGA', aspectRatio: 1.78, throwRatioWide: 0.496, throwRatioTele: 0, lensOffset: 1.14, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'BR9708', brightness: '5000', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 1.0, throwRatioTele: 1.6, lensOffset: 1.0, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
  { modelName: 'LH860ST', brightness: '4000', resolution: '1080p', aspectRatio: 1.78, throwRatioWide: 0.50, throwRatioTele: 0, lensOffset: 1.05, lensShiftHorizontal: 0, lensShiftVertical: 0, lensCenterToLockHole: 0 },
]

export const AUTO_FIT_MODELS = ['AK700ST', 'AH700ST']

export const ASPECT_RATIOS = {
  '16:9': 16 / 9,
  '16:10': 16 / 10,
  '4:3': 4 / 3,
  '1:1': 1,
}

export const LAUNCH_MONITOR_OPTIONS = ['Side', 'Rear', 'Top', 'None']
