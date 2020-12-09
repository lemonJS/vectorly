import { LayoutState } from '@lib/layout/reducers';
import { ProjectState } from '@lib/project/reducers';
import { SelectionState } from '@lib/selection/reducers';

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any;
  }
}

export interface State {
  layout: LayoutState,
  project: ProjectState,
  selection: SelectionState
}

export type GetState = () => State;
