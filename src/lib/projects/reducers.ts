import { Project } from '@type/project';

export type ProjectsState = Project[];

export interface ProjectsAction {
  type: string;
  payload: Partial<ProjectsState>;
}

export const initialState: ProjectsState = [];

export function projects(state = initialState, action: ProjectsAction) {
  switch (action.type) {
    case 'PROJECTS':
      return action.payload;
    default:
      return state;
  }
}
