import { State } from '@store/store';
import { Project } from '@store/project';

export const projectSelector = (state: State): Project => state.project as Project;
