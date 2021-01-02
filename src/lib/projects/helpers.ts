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
        fill: 'white',
        height: 800,
        pointerEvents: 'none',
        width: 500
      },
      transform: {
        x: 1,
        y: 1,
        r: 0,
        s: [1, 1]
      }
    }
  ]
});
