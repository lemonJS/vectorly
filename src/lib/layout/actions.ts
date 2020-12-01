export function setMenuOpen(open: boolean) {
  return async function(dispatch) {
    dispatch({ type: 'LAYOUT', payload: { menuOpen: open } });
  }
}

export function setMenuSelected(name: string) {
  return async function(dispatch) {
    dispatch({ type: 'LAYOUT', payload: { menuSelected: name } });
  }
}
