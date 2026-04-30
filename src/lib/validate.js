function fmtM(cm) {
  const m = cm / 100
  if (cm >= 100) return `${m % 1 === 0 ? m : m.toFixed(2).replace(/\.?0+$/, '')}m`
  return `${Math.round(cm)}cm`
}

export function runValidation(state) {
  const issues = []

  const roomH = parseFloat(state.wall.wallHeight) * 30.48
  const roomW = parseFloat(state.wall.wallWidth)  * 30.48
  const roomD = parseFloat(state.wall.wallDepth)  * 30.48
  const ceilMat = state.wall.ceilingMaterial

  const golferH = state.golfer.golferHeightCm || ((parseInt(state.golfer.golferHeight) || 5) * 12 + (parseInt(state.golfer.golferHeightIn) || 10)) * 2.54

  const isNet = state.env.displayType === 'net'
  const showEnc = state.env.showEnclosure
  const encOffset = (isNet || showEnc) ? 30 : 0
  const hitFromWall   = parseFloat(state.projector.hitPosition) * 30.48
  const hitFromScreen = hitFromWall - encOffset

  const screenW = parseFloat(state.screen.screenWidth)  * 30.48

  // ── Room height ──────────────────────────────────────────────────────────
  if (roomH < 270) {
    issues.push({
      severity: 'error', group: 'room',
      title: 'Ceiling too low',
      message: `Your ceiling is ${fmtM(roomH)} — CLM PRO requires at least 2.7m to mount correctly.`,
      rec: 'A minimum ceiling height of 2.7m (8\'10") is a hardware requirement for ceiling-mounted launch monitors. This room is not supported.',
    })
  } else if (roomH > 320.5) {
    issues.push({
      severity: 'warning', group: 'room',
      title: 'High ceiling — drop mount needed',
      message: `Your ceiling is ${fmtM(roomH)} — above the 3.2m optimal range.`,
      rec: 'A ceiling drop mount lowers the CLM PRO to its optimal sensing height (~3.0m). Add one to your required components.',
    })
  }

  // ── Swing headroom ───────────────────────────────────────────────────────
  if (roomH >= 270) {
    const headroom = roomH - golferH
    if (headroom < 60) {
      issues.push({
        severity: 'warning', group: 'golfer',
        title: 'Limited swing headroom',
        message: `Only ${fmtM(headroom)} between your height and the ceiling — 60cm+ recommended.`,
        rec: 'You may clip the ceiling at the top of your backswing. Consider positioning yourself further from the screen or using a lower tee height.',
      })
    }
  }

  // ── Room depth ───────────────────────────────────────────────────────────
  if (roomD < 420) {
    issues.push({
      severity: 'error', group: 'room',
      title: 'Room too shallow',
      message: `Room depth is ${fmtM(roomD)} — minimum 4.2m required for safe swing and ball flight.`,
      rec: 'You need at least 4.2m of depth to safely fit a golf simulator with clearance for swing and ball rebound.',
    })
  } else if (roomD < 500) {
    issues.push({
      severity: 'warning', group: 'room',
      title: 'Room depth is tight',
      message: `Room depth is ${fmtM(roomD)} — 5.0m+ is recommended for a comfortable setup.`,
      rec: 'Test your swing clearance carefully before installation. Backswing and ball rebound space will be limited.',
    })
  }

  // ── Room width ───────────────────────────────────────────────────────────
  if (roomW < 300) {
    issues.push({
      severity: 'error', group: 'room',
      title: 'Room too narrow',
      message: `Room width is ${fmtM(roomW)} — minimum 3.0m required for side swing clearance.`,
      rec: 'At least 3.0m of width is needed to safely swing a club without hitting the side walls.',
    })
  } else if (roomW < 420) {
    issues.push({
      severity: 'warning', group: 'room',
      title: 'Room width is tight',
      message: `Room width is ${fmtM(roomW)} — 4.2m+ is recommended for comfortable swing clearance.`,
      rec: 'Ensure nothing is within swing range on either side. Consider padding the side walls near the hitting position.',
    })
  }

  // ── Ceiling material ─────────────────────────────────────────────────────
  if (ceilMat === 'concrete') {
    issues.push({
      severity: 'warning', group: 'room',
      title: 'Concrete ceiling',
      message: 'Concrete ceilings require specialist masonry anchor hardware.',
      rec: 'Purchase a masonry drill and anchor kit separately. Standard drywall screws will not hold the CLM PRO mount safely.',
    })
  } else if (ceilMat === 'other') {
    issues.push({
      severity: 'warning', group: 'room',
      title: 'Ceiling type unverified',
      message: 'Non-standard ceiling types may not support standard mounting hardware.',
      rec: 'Contact Rapsodo support to confirm ceiling compatibility before purchasing to avoid an unsafe installation.',
    })
  }

  // ── Hitting position: backswing ──────────────────────────────────────────
  if (roomD >= 420) {
    const backswing = roomD - hitFromWall
    if (backswing < 150) {
      issues.push({
        severity: 'warning', group: 'hitting',
        title: 'Limited backswing clearance',
        message: `Only ${fmtM(backswing)} behind the tee — 1.5m+ recommended.`,
        rec: 'Move the tee position closer to the screen to increase the backswing buffer behind you.',
      })
    }
  }

  // ── Hitting position: front swing / rebound ──────────────────────────────
  if (hitFromScreen < 150) {
    issues.push({
      severity: 'warning', group: 'hitting',
      title: 'Tee too close to screen',
      message: `${fmtM(hitFromScreen)} from tee to screen face — 1.5m+ recommended.`,
      rec: 'More distance between the tee and the screen reduces the risk of ball rebound impact and gives the CLM PRO better data capture angles.',
    })
  }

  // ── Impact buffer ────────────────────────────────────────────────────────
  if (showEnc && encOffset < 30) {
    issues.push({
      severity: 'warning', group: 'hitting',
      title: 'Impact screen too close to wall',
      message: 'The impact screen is less than 30cm from the front wall.',
      rec: 'A minimum 30cm gap behind the impact screen allows it to flex and absorb ball impact safely, protecting the wall.',
    })
  }

  // ── Enclosure / net dimensions ──────────────────────────────────────────
  if (state.enclosure) {
    const enc = state.enclosure
    const encW = parseFloat(isNet ? enc.netWidth  : enc.encWidth)  * 30.48
    const encH = parseFloat(isNet ? enc.netHeight : enc.encHeight) * 30.48
    const encD = parseFloat(isNet ? enc.netDepth  : enc.encDepth)  * 30.48

    if (!isNet && screenW > encW) {
      issues.push({
        severity: 'warning', group: 'enclosure',
        title: 'Screen wider than enclosure',
        message: `Screen width is ${fmtM(screenW)} but enclosure is only ${fmtM(encW)} wide.`,
        rec: 'Either widen the enclosure or reduce the screen width so the screen fits within the frame.',
      })
    }
  }

  // ── Status ───────────────────────────────────────────────────────────────
  const errorCount   = issues.filter(i => i.severity === 'error').length
  const warningCount = issues.filter(i => i.severity === 'warning').length
  const status = errorCount > 0 ? 'incompatible' : warningCount > 0 ? 'conditional' : 'compatible'

  // ── Components ───────────────────────────────────────────────────────────
  const needsDropMount = roomH > 320.5
  const isProjector    = state.env.displayType === 'projector'
  const throwRatio     = screenW > 0 ? hitFromWall / screenW : 1.5
  const screenWIn      = Math.round(screenW / 2.54)

  const fixingItem = ceilMat === 'concrete'
    ? { name: 'Masonry Anchor Kit',      note: 'Required for concrete/block ceilings — not included in box',          image: '/icons/masonry-anchor.png' }
    : ceilMat === 'wood'
      ? { name: 'Timber Lag Screws',     note: 'Heavy-duty lag screws for exposed beam or timber ceilings',           image: '/icons/lag-screw.png' }
      : { name: 'Drywall Anchors & Screws', note: 'Standard fixing kit for drywall/plasterboard ceilings',            image: '/icons/screw.png' }

  const components = {
    inBox: [
      { name: 'CLM PRO Device',          note: 'Launch monitor, ceiling-mounted above the hitting position',          image: '/icons/clm-device.jpg' },
      { name: 'Power Cable',             note: 'Ensure a power outlet is within reach of your ceiling mount point',   image: '/icons/power-cable.png' },
      { name: 'Ceiling Mounting Bracket',note: 'Standard bracket — suitable for drywall and timber ceilings',         image: '/icons/ceiling-mount.png' },
    ],
    required: [
      { name: 'Impact Screen',           note: 'Multi-layer screen rated for driver ball speeds',                     image: '/icons/impact-screen.webp' },
      { name: 'Screen Frame',            note: 'Structural frame to tension and support the impact screen',           image: '/icons/screen-frame.png' },
      fixingItem,
      ...(needsDropMount ? [{ name: 'Ceiling Drop Mount', note: `Lowers CLM PRO to optimal sensing height — your ceiling is ${fmtM(roomH)}`, image: '/icons/drop-mount.png' }] : []),
    ],
    recommended: [
      ...(isProjector ? [
        { name: 'Short-Throw Projector', note: `Throw ratio ≤ ${throwRatio.toFixed(2)}:1 · ≥3,000 lumens · 1080p+ · screen width ~${screenWIn}"`, image: '/icons/projector.png' },
        { name: 'HDMI Cable',            note: 'High-speed, 4K-rated cable from PC to projector',                    image: '/icons/hdmi-cable.png' },
      ] : []),
      { name: 'Ethernet Cable',          note: 'Cat6 from router to hitting position for stable, low-latency connectivity', image: '/icons/ethernet-cable.png' },
      { name: 'Windows PC',             note: 'Min: i5/Ryzen 5, 8GB RAM, Win 10 · Rec: i7+, 16GB RAM, dedicated GPU', image: '/icons/pc.png' },
    ],
  }

  return { status, issues, errorCount, warningCount, components }
}
