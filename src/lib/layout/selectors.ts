import { State } from '@type/redux';
import { LayoutState } from '@lib/layout/reducers';

export function layoutSelector(state: State): LayoutState {
  return state.layout;
}
