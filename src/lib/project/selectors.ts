import { State } from '@type/redux';
import { ProjectState } from '@lib/project/reducers';

export function projectSelector(state: State): ProjectState {
  return state.project;
}
