import { cloneDeep } from 'lodash';
import { SVG, Transform } from '@type/editor';

interface TransformPayload {
  svg: SVG;
  clientX: number;
  clientY: number;
  height: number;
  offsetX: number;
  offsetY: number;
  position: string;
  transform: Transform;
  width: number;
}

const MIN_SIZE = 32;
const MAX_SIZE = 1000;

// TODO: The jumpy bug is where the clientX/Y === offsetX/Y!
// When modifying width/height this logic is sound, but it
// gets really confused because of the scaling. It assumes
// that the starting scale is always [1,1], when it's not!

export function calculateTransform(payload: TransformPayload): Transform {
  const {
    svg,
    clientX,
    clientY,
    height,
    offsetX,
    offsetY,
    position,
    transform,
    width
  } = payload;

  const svgBoundingRect = svg.getBoundingClientRect();

  const out = cloneDeep(transform);

  let x: number;
  let y: number;
  let h: number;
  let w: number;

  switch (position) {
    case 'top-left':
      x = offsetX + clientX - offsetX - svgBoundingRect.x;
      y = offsetY + clientY - offsetY - svgBoundingRect.y;
      w = width - (clientX - offsetX);
      h = height - (clientY - offsetY);
      break;
    case 'top-right':
      w = width + (clientX - offsetX);
      h = height - (clientY - offsetY);
      y = offsetY + clientY - offsetY - svgBoundingRect.y
      break;
    case 'bottom-right':
      w = width + (clientX - offsetX);
      h = height + (clientY - offsetY);
      break;
    case 'bottom-left':
      w = width - (clientX - offsetX);
      h = height + (clientY - offsetY);
      x = offsetX + clientX - offsetX - svgBoundingRect.x;
      break;
  }

  if (w >= MIN_SIZE && w <= MAX_SIZE) {
    out.s[0] = w / width;
    if (x) out.x = x;
  }

  if (h >= MIN_SIZE && h <= MAX_SIZE) {
    out.s[1] = h / height;
    if (y) out.y = y;
  }

  return out;
}
