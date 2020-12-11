export function getBox(group: SVGGElement | null): DOMRect {
  return group
    ? group.getBBox()
    : { x: 0, y: 0, width: 0, height: 0 } as DOMRect;
}
