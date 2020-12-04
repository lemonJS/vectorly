import type { Dispatch } from 'redux';

export function setMenuOpen(open: boolean) {
  return async function(dispatch: Dispatch<any>) {
    dispatch({ type: 'LAYOUT', payload: { menuOpen: open } });
  }
}

export function setMenuSelected(name: string | null) {
  return async function(dispatch: Dispatch<any>) {
    dispatch({ type: 'LAYOUT', payload: { menuSelected: name } });
  }
}
