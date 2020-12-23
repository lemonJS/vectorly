import { clone } from 'lodash';
import { Element } from '@type/project';
import { State } from '@type/redux';
import { SelectionState } from '@lib/selection/reducers';
import { projectSelector } from '@lib/projects/selectors';

export function selectionSelector(state: State): SelectionState {
  return state.selection;
}

export function selectedElementSelector(state: State): Element | null {
  const selectedElement = state.selection;
  const project = projectSelector()(state);

  if (!selectedElement || !project) return null;

  // Clone here to force React to redraw
  return clone(project.elements.find(e => e.elementId === selectedElement.elementId) || null);
}
