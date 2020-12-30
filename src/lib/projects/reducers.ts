import { Project } from '@type/project';

export type ProjectsState = Project | null;

export interface ProjectsAction {
  type: string;
  payload: ProjectsState;
}

export const initialState: ProjectsState = null;

export const project = (state = initialState, action: ProjectsAction) => {
  switch (action.type) {
    case 'PROJECT':
      return action.payload;
    default:
      return state;
  }
};
