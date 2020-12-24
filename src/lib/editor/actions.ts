import { Dispatch } from 'redux';
import { GetState } from '@type/redux';
import { Project } from '@type/project';
import { setMenuSelected } from '@lib/layout/actions';
import { getLayoutForElementType } from '@lib/helpers';
import { projectSelector } from '@lib/projects/selectors';

export function setSelectionId(elementId: string | null) {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const project = projectSelector()(getState());

    // Set the currently selected item
    dispatch({ type: 'EDITOR', payload: { selectedElement: { elementId } } });

    // Switch the tray over to the matching one
    if (project) {
      const element = project.elements.find(e => e.elementId === elementId) || null;

      if (element) {
        const menu = getLayoutForElementType(element.type);
        dispatch(setMenuSelected(menu));
      }
    }
  };
}

export function setSaving(saving: boolean) {
  return async function(dispatch: Dispatch<any>) {
    dispatch({ type: 'EDITOR', payload: { saving } });
  }
}

export function updateUndoStack(_update: Partial<Project>) {
  return async function(dispatch: Dispatch<any>) {
    dispatch({ type: 'EDITOR', payload: { undoStack: [], undoStackIndex: 0 } });
  }
}

export function undo() {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const { editor } = getState();
    const { undoStackIndex } = editor;

    dispatch({ type: 'EDITOR', payload: { undoStackIndex: undoStackIndex - 1 } });
  }
}

export function redo() {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const { editor } = getState();
    const { undoStackIndex } = editor;

    dispatch({ type: 'EDITOR', payload: { undoStackIndex: undoStackIndex + 1 } });
  }
}

export function setRulers(rulers: boolean) {
  return async function(dispatch: Dispatch<any>) {
    dispatch({ type: 'EDITOR', payload: { rulers }});
  }
}

export function setZoom(direction: 'up' | 'down') {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const step = 10;
    const { editor } = getState();

    const zoom = direction === 'up'
      ? editor.zoom + step
      : editor.zoom - step;

    if (zoom > 10 && zoom <= 200) {
      dispatch({ type: 'EDITOR', payload: { zoom } });
    }
  }
}
