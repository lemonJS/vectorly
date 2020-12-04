import type { SelectionState } from './reducers';
import type { Element } from '../../types/project';
import type { State } from '../../types/redux';

export function selectionSelector(state: State): SelectionState {
  return state.selection;
}

export function selectedElementSelector(state: State): Element | null {
  const { id } = state.selection;

  if (!id) return null;

  return state.project.elements.find(e => e.id === id) || null;
}
