import { clone } from 'lodash';
import { Element } from '@type/project';
import { State } from '@type/redux';
import { EditorState } from '@lib/editor/reducers';
import { projectSelector } from '@lib/projects/selectors';

export function editorSelector(state: State): EditorState {
  return state.editor;
}

export function zoomSelector(state: State): number {
  return state.editor.zoom;
}

export function savingSelector(state: State): boolean {
  return state.editor.saving;
}

export function selectedElementSelector(state: State): Element | null {
  const { selectedElement } = state.editor;
  const project = projectSelector(state);

  if (!selectedElement || !project) return null;

  // Clone here to force React to redraw
  return clone(project.elements.find(e => e.id === selectedElement.id) || null);
}
