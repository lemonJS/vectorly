import { Project } from '@type/project';

export type ProjectState = Project | null;

export interface ProjectAction {
  type: string;
  payload: Partial<ProjectState>;
}

export const initialState: ProjectState = null;

export function project(state = initialState, action: ProjectAction) {
  switch (action.type) {
    case 'PROJECT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
