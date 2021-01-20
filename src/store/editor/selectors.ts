import { clone } from 'lodash';
import { State } from '@store/store';
import { Element } from '@store/project';
import { EditorState, Position } from '@store/editor';

export const editorSelector = (state: State): EditorState => state.editor;

export const positionSelector = (state: State): Position => state.editor.position;

export const savingSelector = (state: State): boolean => state.editor.saving;

export const controlSelector = (state: State): string => state.editor.control;

export const selectedElementSelector = (state: State): Element | null => {
  const { selectedElement } = state.editor;

  return selectedElement ? clone(selectedElement) : null;
};
