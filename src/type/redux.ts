import { DesignsState } from '@lib/designs/reducers';
import { LayoutState } from '@lib/layout/reducers';
import { ProjectsState } from '@lib/projects/reducers';
import { SelectionState } from '@lib/selection/reducers';
import { UserState } from '@lib/user/reducers';

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any;
  }
}

export interface State {
  designs: DesignsState,
  layout: LayoutState,
  projects: ProjectsState,
  selection: SelectionState,
  user: UserState
}

export type GetState = () => State;
