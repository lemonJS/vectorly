import { clone } from 'lodash';
import { Element } from '@type/project';
import { State } from '@type/redux';
import { EditorState } from '@lib/editor/reducers';
import { projectSelector } from '@lib/projects/selectors';

export const editorSelector = (state: State): EditorState => state.editor;

export const zoomSelector = (state: State): number => state.editor.zoom;

export const savingSelector = (state: State): boolean => state.editor.saving;

export const selectedElementSelector = (state: State): Element | null => {
  const { selectedElement } = state.editor;
  const project = projectSelector(state);

  if (!selectedElement || !project) return null;

  // Clone here to force React to redraw
  return clone(project.elements.find(e => e.id === selectedElement.id) || null);
};
