import type { LayoutState } from './reducers';

// TODO types
export function layoutSelector(state): LayoutState {
  return state.layout;
}
