import type { SelectionState } from './reducers';

export function selectionSelector(state): SelectionState {
  return state.selection;
}
