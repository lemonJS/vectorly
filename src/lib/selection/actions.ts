import { Dispatch } from 'redux';
import { GetState } from '@type/redux';
import { setMenuSelected } from '@lib/layout/actions';
import { getLayoutForElementType } from '@lib/helpers';
import { projectSelector } from '@lib/projects/selectors';

export function setSelectionId(elementId: string | null) {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const project = projectSelector()(getState());

    // Set the currently selected item
    dispatch({ type: 'SELECTION', payload: { elementId } });

    // Switch the tray over to the matching one
    if (project) {
      const element = project.elements.find(e => e.elementId === elementId);

      if (element) {
        const menu = getLayoutForElementType(element.type);
        dispatch(setMenuSelected(menu));
      }
    }
  };
}
