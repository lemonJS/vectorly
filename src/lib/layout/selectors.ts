import type { LayoutState } from './reducers';
import type { State } from '../../types/redux';

export function layoutSelector(state: State): LayoutState {
  return state.layout;
}
