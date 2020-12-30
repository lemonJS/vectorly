import { EditorState } from '@lib/editor/reducers';
import { ProjectsState } from '@lib/projects/reducers';

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any;
  }
}

export interface State {
  editor: EditorState,
  project: ProjectsState,
}

export type GetState = () => State;
