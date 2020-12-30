import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { State } from '@type/redux';

import { project, initialState as initialProjectState } from '@lib/projects/reducers';
import { editor, initialState as initialEditorState } from '@lib/editor/reducers';

const initialState: State = {
  editor: initialEditorState,
  project: initialProjectState,
};

export const store = createStore(
  combineReducers({
    editor,
    project,
  }),
  initialState,
  applyMiddleware(thunk)
);
