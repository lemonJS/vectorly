import { Dispatch } from 'redux';
import { GetState } from '@type/redux';
import { Project } from '@type/project';
import { getLayoutForElementType } from '@lib/helpers';
import { projectSelector } from '@lib/projects/selectors';
import { EditorAction } from '@lib/editor/reducers';

export const setSelectionId = (id: string | null) => (dispatch: Dispatch<EditorAction | any>, getState: GetState) => {
  const project = projectSelector(getState());

  // Set the currently selected item
  dispatch({
    type: 'EDITOR',
    payload: { selectedElement: { id } }
  });

  // Switch the tray over to the matching one
  if (project) {
    const element = project.elements.find(e => e.id === id) || null;

    if (element) {
      const menu = getLayoutForElementType(element.type);
      dispatch(setMenuSelected(menu));
    }
  }
};

export const setMenuOpen = (open: boolean) => (dispatch: Dispatch<EditorAction>) => {
  dispatch({
    type: 'EDITOR',
    payload: { menuOpen: open }
  });
};

export const setMenuSelected = (name: string | null) => (dispatch: Dispatch<EditorAction>) => {
  dispatch({
    type: 'EDITOR',
    payload: { menuSelected: name, menuOpen: true }
  });
};

export const setSaving = (saving: boolean) => (dispatch: Dispatch<EditorAction>) => {
  dispatch({
    type: 'EDITOR',
    payload: { saving }
  });
};

export const updateUndoStack = (update: Partial<Project>) => (dispatch: Dispatch<EditorAction>) => {
  console.log(update);

  dispatch({
    type: 'EDITOR',
    payload: { undoStack: [], undoStackIndex: 0 }
  });
};

export const undo = () => (dispatch: Dispatch<EditorAction>, getState: GetState) => {
  const { editor } = getState();
  const { undoStackIndex } = editor;

  dispatch({
    type: 'EDITOR',
    payload: { undoStackIndex: undoStackIndex - 1 }
  });
};

export const redo = () => (dispatch: Dispatch<EditorAction>, getState: GetState) => {
  const { editor } = getState();
  const { undoStackIndex } = editor;

  dispatch({
    type: 'EDITOR',
    payload: { undoStackIndex: undoStackIndex + 1 }
  });
};

export const setZoom = (direction: 'up' | 'down') => (dispatch: Dispatch<EditorAction>, getState: GetState) => {
  const step = 10;
  const { editor } = getState();

  const zoom = direction === 'up'
    ? editor.zoom + step
    : editor.zoom - step;

  if (zoom > 10 && zoom <= 200) {
    dispatch({
      type: 'EDITOR',
      payload: { zoom }
    });
  }
};
