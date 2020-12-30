import { State } from '@type/redux';
import { ProjectsState } from '@lib/projects/reducers';

export const projectSelector = (state: State): ProjectsState => state.project;
