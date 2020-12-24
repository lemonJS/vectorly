import { DesignsState } from '@lib/designs/reducers';
import { EditorState } from '@lib/editor/reducers';
import { LayoutState } from '@lib/layout/reducers';
import { ProjectsState } from '@lib/projects/reducers';
import { UserState } from '@lib/user/reducers';

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any;
  }
}

export interface State {
  designs: DesignsState,
  editor: EditorState,
  layout: LayoutState,
  projects: ProjectsState,
  user: UserState
}

export type GetState = () => State;
