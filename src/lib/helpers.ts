export function getLayoutForElementType(type: string): string | null {
  switch(type) {
    case 'photo':
      return 'photos';
    case 'text':
      return 'text';
    case 'shape':
      return 'shapes';
    case 'emoji':
      return 'emojis';
    default:
      return null;
  }
}

export function getBox(group: SVGGElement | null): DOMRect {
  return group
    ? group.getBBox()
    : { x: 0, y: 0, width: 0, height: 0 } as DOMRect;
}
