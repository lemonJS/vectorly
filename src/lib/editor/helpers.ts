import React from 'react';

import { Transform } from '@type/project';

export const getLayoutForElementType = (type: string): string | null => {
  switch(type) {
    case 'photo':
      return 'photos';
    case 'text':
      return 'text';
    case 'emoji':
      return 'emojis';
    case 'drawing':
      return 'draw';
    case 'shape':
      return 'shapes';
    case 'sticker':
      return 'stickers';
    default:
      return null;
  }
}

export const getBox = (group: SVGGElement | null): DOMRect => group
  ? group.getBBox()
  : { x: 0, y: 0, width: 0, height: 0 } as DOMRect;

export const getBoundingClientRect = (element: HTMLElement | null) => element
  ? element.getBoundingClientRect()
  : { x: 0, y: 0, width: 0, height: 0 } as DOMRect;

export const getElementFromDataTransfer = (data: string) => {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const getDropTransform = (event: React.DragEvent<HTMLDivElement>): Transform => {
  const bounds = window.canvas.getBoundingClientRect();

  return {
    x: event.clientX - bounds.x,
    y: event.clientY - bounds.y,
    r: 0,
    s: [1, 1]
  };
};
