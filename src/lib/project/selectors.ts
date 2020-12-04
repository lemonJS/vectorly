import type { ProjectState } from './reducers';
import type { State } from '../../types/redux';

export function projectSelector(state: State): ProjectState {
  return state.project;
}
