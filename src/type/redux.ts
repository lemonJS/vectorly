import { EditorState } from '@lib/editor/reducers';
import { ProjectsState } from '@lib/projects/reducers';

export interface State {
  editor: EditorState,
  project: ProjectsState,
}

export type GetState = () => State;
