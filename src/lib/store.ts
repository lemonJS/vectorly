import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { layout, initialState as initialLayoutState } from '../lib/layout/reducers';
import { project, initialState as initialProjectState } from '../lib/project/reducers';
import { selection, initialState as initialSelectionState } from '../lib/selection/reducers';

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any;
  }
}

const isServer = typeof window === 'undefined';

const initialState = {
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

export function getOrCreateStore(initialState) {
  if (isServer) {
    return initializeStore(initialState);
  }

  if (!window.__NEXT_REDUX_STORE__) {
    window.__NEXT_REDUX_STORE__ = initializeStore(initialState);
  }

  return window.__NEXT_REDUX_STORE__;
}
