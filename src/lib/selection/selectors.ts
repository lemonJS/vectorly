import type { SelectionState } from './reducers';
import type { Element } from '../../types/project';

export function selectionSelector(state): SelectionState {
  return state.selection;
}

export function selectedElementSelector(state): Element | null {
  const { id } = state.selection;

  if (!id) return null;

  return state.project.elements.find(e => e.id === id);
}
