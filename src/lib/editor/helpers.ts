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
