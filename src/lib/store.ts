import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { State } from '@type/redux';

import { designs, initialState as initialDesignsState } from '@lib/designs/reducers';
import { layout, initialState as initialLayoutState } from '@lib/layout/reducers';
import { projects, initialState as initialProjectsState } from '@lib/projects/reducers';
import { selection, initialState as initialSelectionState } from '@lib/selection/reducers';
import { user, initialState as initialUserState } from '@lib/user/reducers';

const initialState: State = {
  designs: initialDesignsState,
  layout: initialLayoutState,
  projects: initialProjectsState,
  selection: initialSelectionState,
  user: initialUserState
};

export const store = createStore(
  combineReducers({
    designs,
    layout,
    projects,
    selection,
    user
  }),
  initialState,
  applyMiddleware(thunk)
);
