import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { layout, initialState as initialLayoutState } from '../lib/layout/reducers';

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any;
  }
}

const isServer = typeof window === 'undefined';

const initialState = {
  layout: initialLayoutState
};

export function initializeStore(state = initialState) {
  return createStore(
    combineReducers({
      layout
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
