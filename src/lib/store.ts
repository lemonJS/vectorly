import type { State } from '../types/redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { layout, initialState as initialLayoutState } from '../lib/layout/reducers';
import { project, initialState as initialProjectState } from '../lib/project/reducers';
import { selection, initialState as initialSelectionState } from '../lib/selection/reducers';

const isServer = typeof window === 'undefined';

const initialState: State = {
  layout: initialLayoutState,
  project: initialProjectState,
  selection: initialSelectionState
};

export function initializeStore(state = initialState) {
  return createStore(
    combineReducers({
      layout,
      project,
      selection
    }),
    state,
    applyMiddleware(thunk)
  );
}

export function getOrCreateStore(initialState: State) {
  if (isServer) {
    return initializeStore(initialState);
  }

  if (!window.__NEXT_REDUX_STORE__) {
    window.__NEXT_REDUX_STORE__ = initializeStore(initialState);
  }

  return window.__NEXT_REDUX_STORE__;
}
