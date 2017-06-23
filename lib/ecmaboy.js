(function (global) {
  const SIZE = 16
  const COLORS = [
    '#000000',
    '#FFFFFF',
    '#EE0022',
    '#FF9911',
    '#FFFF22',
    '#11EE22',
    '#1122EE',
    '#9900EE'
  ]

  const EcmaBoy = {
    tick: function () {}
  }

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  let scalar
  document.body.appendChild(canvas)

  const pixels = new Array(SIZE * SIZE).fill(0)

  function makeCanvasFillScreen () {
    const size = 0.9 * Math.min(window.innerHeight, window.innerWidth)
    canvas.width = size
    canvas.height = size

    scalar = size / SIZE
  }
  makeCanvasFillScreen()
  window.addEventListener('resize', makeCanvasFillScreen)

  let lastT = null
  function tick (t) {
    let dt
    if (lastT === null) {
      dt = 0
      lastT = 0
    } else {
      dt = t - lastT
    }

    EcmaBoy.tick({ dt, t, lastT, pixels })

    context.clearRect(0, 0, canvas.width, canvas.height)
    for (let row = 0; row < SIZE; row++) {
      const y = row * scalar
      for (let col = 0; col < SIZE; col++) {
        const pixelIndex = (row * SIZE) + col
        const x = col * scalar

        context.fillStyle = COLORS[pixels[pixelIndex]]
        context.fillRect(x, y, scalar, scalar)
      }
    }

    lastT = t

    window.requestAnimationFrame(tick)
  }

  window.requestAnimationFrame(tick)

  if (typeof module === 'undefined') {
    global.EcmaBoy = EcmaBoy
  } else {
    module.exports = EcmaBoy
  }
})(this)
