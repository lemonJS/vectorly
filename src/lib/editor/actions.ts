import { Dispatch } from 'redux';
import { GetState } from '@type/redux';
import { Project } from '@type/project';
import { getLayoutForElementType } from '@lib/editor/helpers';
import { projectSelector } from '@lib/projects/selectors';
import { EditorAction } from '@lib/editor/reducers';

export const setSelectionId = (id: string | null) => (dispatch: Dispatch<EditorAction | any>, getState: GetState) => {
  const project = projectSelector(getState());

  // Set the currently selected item
  dispatch({ type: 'EDITOR', payload: { selectedElement: { id } } });

  // Switch the tray over to the matching one
  const element = project.elements.find(e => e.id === id) || null;

  if (element) {
    const menu = getLayoutForElementType(element.type);
    dispatch(setMenuSelected(menu));
  }
};

export const setMenuOpen = (open: boolean) => (dispatch: Dispatch<EditorAction>) => {
  dispatch({ type: 'EDITOR', payload: { menuOpen: open } });
};

export const setMenuSelected = (name: string | null) => (dispatch: Dispatch<EditorAction>) => {
  dispatch({ type: 'EDITOR', payload: { menuSelected: name, menuOpen: true } });
};

export const setSaving = (saving: boolean) => (dispatch: Dispatch<EditorAction>) => {
  dispatch({ type: 'EDITOR', payload: { saving } });
};

export const setDrawing = (drawing: boolean) => (dispatch: Dispatch<EditorAction>) => {
  dispatch({ type: 'EDITOR', payload: { drawing }});
};

export const updateUndoStack = (update: Partial<Project>) => (dispatch: Dispatch<EditorAction>, getState: GetState) => {
  const { editor } = getState();
  const { undoStack, undoStackIndex } = editor;

  // The array should be sliced to remove all forward stacks,
  // as rolling forward would jump all over the place
  const stack = [...undoStack.slice(0, undoStackIndex + 1), JSON.stringify(update)];

  dispatch({ type: 'EDITOR', payload: { undoStack: stack, undoStackIndex: stack.length - 1 } });
};

export const undo = () => (dispatch: Dispatch<EditorAction>, getState: GetState) => {
  const { editor } = getState();
  const { undoStack, undoStackIndex } = editor;

  if (undoStackIndex === 0) return;

  const index = undoStackIndex - 1;

  // Update the stack
  dispatch({ type: 'EDITOR', payload: { undoStackIndex: index } });
  // Update the project
  dispatch({ type: 'PROJECT', payload: JSON.parse(undoStack[index]) });
};

export const redo = () => (dispatch: Dispatch<EditorAction>, getState: GetState) => {
  const { editor } = getState();
  const { undoStack, undoStackIndex } = editor;

  if (undoStackIndex >= undoStack.length - 1) return;

  const index = undoStackIndex + 1;

  // Update the stack
  dispatch({ type: 'EDITOR', payload: { undoStackIndex: index } });
  // Update the project
  dispatch({ type: 'PROJECT', payload: JSON.parse(undoStack[index]) });
};

export const setZoom = (direction: 'up' | 'down') => (dispatch: Dispatch<EditorAction>, getState: GetState) => {
  const step = 10;
  const { editor } = getState();

  const zoom = direction === 'up'
    ? editor.zoom + step
    : editor.zoom - step;

  if (zoom > 10 && zoom <= 200) {
    dispatch({ type: 'EDITOR', payload: { zoom } });
  }
};

export const setZoomScale = (zoom: number) => (dispatch: Dispatch<EditorAction>) => {
  if (zoom > 10 && zoom <= 200) {
    dispatch({ type: 'EDITOR', payload: { zoom: Math.round(zoom) } });
  }
};
