import type { SelectionAction } from './reducers';

export function setSelectionId(id: string | null) {
  return async function(dispatch) {
    const action: SelectionAction = {
      type: 'SELECTION',
      payload: { id }
    };

    dispatch(action);
  };
}
