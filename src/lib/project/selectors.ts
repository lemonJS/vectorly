import type { ProjectState } from './reducers';

export function projectSelector(state): ProjectState {
  return state.project;
}
