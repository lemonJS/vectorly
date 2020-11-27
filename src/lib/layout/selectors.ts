import type { LayoutState } from './reducers';

export function layoutSelector(state): LayoutState {
  return state.layout;
}
