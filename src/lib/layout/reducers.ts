export interface LayoutState {
  menuOpen: boolean;
  menuSelected: string;
}

export interface LayoutAction {
  type: string;
  payload: Partial<LayoutState>;
}

export const initialState: LayoutState = {
  menuOpen: true,
  menuSelected: 'photos'
};

export function layout(state = initialState, action: LayoutAction) {
  switch (action.type) {
    case 'LAYOUT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
