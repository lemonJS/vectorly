import { Project } from '@type/project';

export const newProject = (): Project => ({
  images: [],
  elements: [
    {
      id: '__background__',
      type: 'shape',
      element: 'rect',
      readonly: true,
      props: {
        fill: '#f9f9f9',
        height: '100%',
        pointerEvents: 'none',
        width: '100%'
      },
      transform: {
        x: 1,
        y: 1,
        r: 0,
        s: [1, 1]
      }
    }
  ],
  size: [1024, 768]
});
