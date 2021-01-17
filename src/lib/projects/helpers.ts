import { Project } from '@type/project';

export const newProject = (): Project => ({
  title: 'Untitled Project',
  images: [],
  elements: [
    {
      id: '__background__',
      type: 'shape',
      element: 'rect',
      readonly: true,
      props: {
        fill: 'white',
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
  preset: {
    id: 'facebook-post-1200-900',
    height: 900,
    width: 1200
  }
});
