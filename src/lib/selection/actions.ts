import type { Dispatch } from 'redux';
import type { GetState } from '../../types/redux';
import { setMenuSelected } from '../layout/actions';
import { getLayoutForElementType } from '../layout/helpers';

export function setSelectionId(id: string | null) {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const { project } = getState();

    // Set the currently selected item
    dispatch({ type: 'SELECTION', payload: { id } });

    // Switch the tray over to the matching one
    const element = project.elements.find(e => e.id === id);

    if (element) {
      const menu = getLayoutForElementType(element.type);
      dispatch(setMenuSelected(menu));
    }
  };
}
