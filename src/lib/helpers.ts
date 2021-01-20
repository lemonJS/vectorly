import React from 'react';

import { Transform, Element } from '@store/project';

export const getBox = (group: SVGGElement | null): DOMRect => group
  ? group.getBBox()
  : { x: 0, y: 0, width: 0, height: 0 } as DOMRect;

export const getBoundingClientRect = (element: HTMLElement | null): DOMRect=> element
  ? element.getBoundingClientRect()
  : { x: 0, y: 0, width: 0, height: 0 } as DOMRect;

export const getElementFromDataTransfer = (data: string): Partial<Element> | null => {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const getDropTransform = (event: React.DragEvent<HTMLDivElement>): Transform => {
  return {
    x: event.clientX,
    y: event.clientY,
    r: 0,
    s: [1, 1]
  };
};

export const getLayoutForElement = (element?: Element): string | null => {
  switch(element?.type) {
    case 'photo':
      return 'photos';
    case 'text':
      return 'text';
    case 'drawing':
      return 'draw';
    case 'shape':
      return 'shapes';
    default:
      return null;
  }
}
