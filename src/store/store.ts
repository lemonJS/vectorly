import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { project, initialState as initialProjectState, ProjectsState } from '@store/project';
import { editor, initialState as initialEditorState, EditorState } from '@store/editor';

const initialState: State = {
  editor: initialEditorState,
  project: initialProjectState,
};

export interface State {
  editor: EditorState,
  project: ProjectsState,
}

export type GetState = () => State;

export const store = createStore(
  combineReducers({
    editor,
    project,
  }),
  initialState,
  applyMiddleware(thunk)
);
