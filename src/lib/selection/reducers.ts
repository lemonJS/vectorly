
export interface SelectionState {
  id: string | null;
}

export interface SelectionAction {
  type: string;
  payload: Partial<SelectionState>;
}

export const initialState: SelectionState = {
  id: null
};

export function selection(state = initialState, action: SelectionAction) {
  switch (action.type) {
    case 'SELECTION':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
