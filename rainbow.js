/* global EcmaBoy */

EcmaBoy.tick = function ({ t, lastT, pixels }) {
  const i = Math.floor(t) % pixels.length
  pixels[i] = (pixels[i] + 1) % 8
}
