import type { SidebarElement } from '../../../types/editor';

export const shapes: SidebarElement[] = [
  {
    id: '979b0b3d-7216-425d-a1b2-b3f11a1cf95f',
    type: 'circle',
    props: {
      strokeWidth: 2,
      r: 40,
      fill: 'transparent',
      cx: 40,
      stroke: 'white',
      cy: 49,
      transform: 'translate(7, 0)'
    }
  },
  {
    id: '4d8244d0-6aed-4ac7-9fe4-b2ee939243e6',
    type: 'rect',
    props: {
      strokeWidth: 2,
      fill: 'transparent',
      stroke: 'white',
      width: 76,
      height: 76,
      x: 9.5,
      y: 12
    }
  },
  {
    id: '6a5c4abc-bc36-4d06-8338-ecdcfc09e13f',
    type: 'polygon',
    props: {
      strokeWidth: 2,
      stroke: 'white',
      fill: 'transparent',
      points: '38,0 76,76 0,76',
      transform: 'translate(9, 11)'
    }
  }
];