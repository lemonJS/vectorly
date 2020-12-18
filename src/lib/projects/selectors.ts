import { State } from '@type/redux';
import { ProjectState } from '@lib/projects/reducers';

export function projectSelector(id?: string | string[]) {
  return function (state: State): ProjectState {
    console.log(id);
    return state.project;
  }
}
