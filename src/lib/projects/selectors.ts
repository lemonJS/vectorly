import { State } from '@type/redux';
import { Project } from '@type/project';

export const projectSelector = (state: State): Project => state.project as Project;
