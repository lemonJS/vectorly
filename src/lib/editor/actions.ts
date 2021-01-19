import { clamp } from 'lodash';
import { Dispatch } from 'redux';
import { GetState } from '@type/redux';
import { Project } from '@type/project';
import { projectSelector } from '@lib/projects/selectors';
import { EditorAction, EditorState, Position } from '@lib/editor/reducers';

export const setSelectionId = (id: string | null) => (dispatch: Dispatch<EditorAction>, getState: GetState): void => {
  const project = projectSelector(getState());
  const selectedElement = project.elements.find(e => e.id === id) || null;

  const payload: Partial<EditorState> = { selectedElement };

  dispatch({ type: 'EDITOR', payload });
};

export const setControl = (control: string | null) => (dispatch: Dispatch<EditorAction>): void => {
  dispatch({ type: 'EDITOR', payload: { control } });
};

export const setSaving = (saving: boolean) => (dispatch: Dispatch<EditorAction>): void => {
  dispatch({ type: 'EDITOR', payload: { saving } });
};

export const updateUndoStack = (update: Partial<Project>) => (dispatch: Dispatch<EditorAction>, getState: GetState): void => {
  const { editor } = getState();
  const { undoStack, undoStackIndex } = editor;

  // The array should be sliced to remove all forward stacks,
  // as rolling forward would jump all over the place
  const stack = [...undoStack.slice(0, undoStackIndex + 1), JSON.stringify(update)];

  dispatch({ type: 'EDITOR', payload: { undoStack: stack, undoStackIndex: stack.length - 1 } });
};

export const undo = () => (dispatch: Dispatch<EditorAction>, getState: GetState): void => {
  const { editor } = getState();
  const { undoStack, undoStackIndex } = editor;

  if (undoStackIndex === 0) return;

  const index = undoStackIndex - 1;

  // Update the stack
  dispatch({ type: 'EDITOR', payload: { undoStackIndex: index } });
  // Update the project
  dispatch({ type: 'PROJECT', payload: JSON.parse(undoStack[index]) });
};

export const redo = () => (dispatch: Dispatch<EditorAction>, getState: GetState): void=> {
  const { editor } = getState();
  const { undoStack, undoStackIndex } = editor;

  if (undoStackIndex >= undoStack.length - 1) return;

  const index = undoStackIndex + 1;

  // Update the stack
  dispatch({ type: 'EDITOR', payload: { undoStackIndex: index } });
  // Update the project
  dispatch({ type: 'PROJECT', payload: JSON.parse(undoStack[index]) });
};

export const setPosition = (position: Partial<Position>) => (dispatch: Dispatch<EditorAction>, getState: GetState): void => {
  const update: Position = { ...getState().editor.position, ...position };

  update.s = clamp(update.s, .25, 4);

  dispatch({ type: 'EDITOR', payload: { position: update } });
};

