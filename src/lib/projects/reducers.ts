import { Project } from '@type/project';

export type ProjectsState = Project;

export interface ProjectsAction {
  type: string;
  payload: ProjectsState;
}

export const initialState: ProjectsState = {
  title: 'Untitled Project',
  images: [],
  elements: []
};

export const project = (state = initialState, action: ProjectsAction): Project => {
  switch (action.type) {
    case 'PROJECT':
      return action.payload;
    default:
      return state;
  }
};
