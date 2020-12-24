import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { State } from '@type/redux';

import { designs, initialState as initialDesignsState } from '@lib/designs/reducers';
import { layout, initialState as initialLayoutState } from '@lib/layout/reducers';
import { projects, initialState as initialProjectsState } from '@lib/projects/reducers';
import { editor, initialState as initialEditorState } from '@lib/editor/reducers';
import { user, initialState as initialUserState } from '@lib/user/reducers';

const initialState: State = {
  designs: initialDesignsState,
  editor: initialEditorState,
  layout: initialLayoutState,
  projects: initialProjectsState,
  user: initialUserState
};

export const store = createStore(
  combineReducers({
    designs,
    editor,
    layout,
    projects,
    user
  }),
  initialState,
  applyMiddleware(thunk)
);
