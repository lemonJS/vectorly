import { clone } from 'lodash';
import { Element } from '@type/project';
import { State } from '@type/redux';
import { EditorState, Position } from '@lib/editor/reducers';
import { projectSelector } from '@lib/projects/selectors';

export const editorSelector = (state: State): EditorState => state.editor;

export const positionSelector = (state: State): Position => state.editor.position;

export const savingSelector = (state: State): boolean => state.editor.saving;

export const controlSelector = (state: State): string => state.editor.control;

export const selectedElementSelector = (state: State): Element | null => {
  const { selectedElement } = state.editor;
  const project = projectSelector(state);

  if (!selectedElement || !project) return null;

  // Clone here to force React to redraw
  return clone(project.elements.find(e => e.id === selectedElement.id) || null);
};
