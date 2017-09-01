import bootSpriteSheetSrc from './boot-sprite-sheet.gif';

let imageEl = document.createElement('img');
imageEl.src = bootSpriteSheetSrc;

export default [
  {
    id: "logo",
    source: imageEl,
    sourceOffsetX: 0,
    sourceOffsetY: 0,
    width: 78,
    height: 18,
    offsetX: 16,
    offsetY: 55,
    visible: true
  },
  {
    id: "extension",
    source: imageEl,
    sourceOffsetX: 79,
    sourceOffsetY: 0,
    width: 16,
    height: 18,
    offsetX: 95,
    offsetY: 55,
    visible: false
  },
  {
    id: "shine",
    source: imageEl,
    sourceOffsetX: 0,
    sourceOffsetY: 18,
    frameDirection: 'right',
    frameCount: 13,
    width: 18,
    height: 18,
    offsetX: 10,
    offsetY: 55,
    visible: false
  },
  {
    id: "ping",
    source: imageEl,
    sourceOffsetX: 96,
    sourceOffsetY: 0,
    frameDirection: 'down',
    frameCount: 2,
    width: 20,
    height: 4,
    offsetX: 94,
    offsetY: 49,
    visible: false
  }
];
