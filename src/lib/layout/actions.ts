import { Dispatch } from 'redux';
import { LayoutAction } from '@lib/layout/reducers';

export function setMenuOpen(open: boolean) {
  return async function(dispatch: Dispatch<LayoutAction>) {
    dispatch({ type: 'LAYOUT', payload: { menuOpen: open } });
  }
}

export function setMenuSelected(name: string | null) {
  return async function(dispatch: Dispatch<LayoutAction>) {
    dispatch({ type: 'LAYOUT', payload: { menuSelected: name, menuOpen: true } });
  }
}
