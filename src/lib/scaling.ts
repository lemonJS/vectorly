import { Transform } from '@type/project';

interface TransformPayload {
  svg: HTMLElement & SVGSVGElement;
  box: [number, number];
  client: [number, number];
  offset: [number, number];
  position: string;
  scale: [number, number];
  shift: boolean;
}

// Mother of fuck, this would be so much easier if it wasn't for
// the stupid SVG element scaling! Not only to you have to calc
// the new size vs the original size to get the scale, but you
// also have to take into account what the original scale was, as
// getBBox always returns the untransformed size.

const MIN_SIZE = 32;

export const calculateTransform = (payload: TransformPayload): Partial<Transform> => {
  const { svg, position, shift } = payload;

  const [clientX, clientY] = payload.client;
  const [width, height] = payload.box;
  const [offsetX, offsetY] = payload.offset;
  const [scaleX, scaleY] = payload.scale;

  const svgBoundingRect = svg.getBoundingClientRect();

  const out: Partial<Transform> = { s: [1, 1] };

  let h = 0;
  let w = 0;
  let x: number | undefined;
  let y: number | undefined;

  switch (position) {
    case 'top-left':
      x = offsetX + clientX - offsetX - svgBoundingRect.x;
      y = offsetY + clientY - offsetY - svgBoundingRect.y;
      w = (width * scaleX) - (clientX - offsetX);
      h = (height * scaleY) - (clientY - offsetY);
      break;
    case 'top-center':
      y = offsetY + clientY - offsetY - svgBoundingRect.y;
      w = width * scaleX;
      h = (height * scaleY) - (clientY - offsetY);
      break;
    case 'top-right':
      w = width + (clientX - offsetX);
      h = (height * scaleY) - (clientY - offsetY);
      y = offsetY + clientY - offsetY - svgBoundingRect.y
      break;
    case 'center-right':
      w = (width * scaleX) + (clientX - offsetX);
      h = height * scaleY;
      break;
    case 'bottom-right':
      w = (width * scaleX) + (clientX - offsetX);
      h = (height * scaleY) + (clientY - offsetY);
      break;
    case 'bottom-center':
      w = width * scaleX;
      h = (height * scaleY) + (clientY - offsetY);
      break;
    case 'bottom-left':
      w = (width * scaleX) - (clientX - offsetX);
      h = (height * scaleY) + (clientY - offsetY);
      x = offsetX + clientX - offsetX - svgBoundingRect.x;
      break;
    case 'center-left':
      w = (width * scaleX) - (clientX - offsetX);
      h = height * scaleY;
      x = offsetX + clientX - offsetX - svgBoundingRect.x;
      break;
  }

  out.s = [
    Math.max(w, MIN_SIZE) / width,
    Math.max(h, MIN_SIZE) / height
  ];

  if (x && w >= MIN_SIZE) out.x = x;
  if (y && h >= MIN_SIZE) out.y = y;

  if (shift) {
    const aspect = width / height;
    out.s[1] = (Math.max(w, MIN_SIZE) / aspect) / height;
  }

  return out;
};
