import { SVG, Transform } from '@type/editor';

interface TransformPayload {
  svg: SVG;
  clientX: number;
  clientY: number;
  height: number;
  offsetX: number;
  offsetY: number;
  position: string;
  width: number;
}

// const MIN_SIZE = 32; TODO

export function calculateTransform(payload: TransformPayload): Partial<Transform> {
  const {
    svg,
    clientX,
    clientY,
    height,
    offsetX,
    offsetY,
    position,
    width
  } = payload;

  const svgBoundingRect = svg.getBoundingClientRect();

  let x: number;
  let y: number;
  let sx: number;
  let sy: number;

  switch (position) {
    case 'top-left':
      x = offsetX + clientX - offsetX - svgBoundingRect.x;
      y = offsetY + clientY - offsetY - svgBoundingRect.y;
      sx = (width - (clientX - offsetX)) / width;
      sy = (height - (clientY - offsetY)) / height;
      return { s: [sx, sy], x, y };
    case 'top-right':
      sx = (width + (clientX - offsetX)) / width;
      sy = (height - (clientY - offsetY)) / height;
      y = offsetY + clientY - offsetY - svgBoundingRect.y
      return { s: [sx, sy], y };
    case 'bottom-right':
      sx = (width + (clientX - offsetX)) / width;
      sy = (height + (clientY - offsetY)) / height
      return { s: [sx, sy] };
    case 'bottom-left':
      sx = (width - (clientX - offsetX)) / width;
      sy = (height + (clientY - offsetY)) / height;
      x = offsetX + clientX - offsetX - svgBoundingRect.x;
      return { s: [sx, sy], x };
    default:
      return null;
    }
  }
