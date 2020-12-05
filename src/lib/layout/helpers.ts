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
