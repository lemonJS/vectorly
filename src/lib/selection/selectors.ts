import { clone } from 'lodash';
import { Element } from '@type/project';
import { State } from '@type/redux';
import { SelectionState } from '@lib/selection/reducers';

export function selectionSelector(state: State): SelectionState {
  return state.selection;
}

export function selectedElementSelector(state: State): Element | null {
  const { id } = state.selection;

  if (!id) return null;

  // Clone here to force React to redraw
  return clone(state.project.elements.find(e => e.id === id) || null);
}
