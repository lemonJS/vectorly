import type { LayoutAction } from './reducers';

export function setMenuOpen(open: boolean) {
  return async function(dispatch) {
    const action: LayoutAction = {
      type: 'LAYOUT',
      payload: { menuOpen: open }
    };

    dispatch(action);
  };
}

export function setMenuSelected(name: string) {
  return async function(dispatch) {
    const action: LayoutAction = {
      type: 'LAYOUT',
      payload: { menuSelected: name }
    };

    dispatch(action);
  };
}
