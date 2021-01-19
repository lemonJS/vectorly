import { Project } from '@type/project';

export type ProjectsState = Project;

export interface ProjectsAction {
  type: string;
  payload: ProjectsState;
}

export const initialState: ProjectsState = {
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
        height: 768,
        pointerEvents: 'none',
        width: 1024
      },
      transform: {
        x: 1,
        y: 1,
        r: 0,
        s: [1, 1]
      }
    }
  ]
};

export const project = (state = initialState, action: ProjectsAction): Project => {
  switch (action.type) {
    case 'PROJECT':
      return action.payload;
    default:
      return state;
  }
};
