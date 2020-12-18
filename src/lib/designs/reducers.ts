import { Design } from '@type/design';

export type DesignsState = Design[];

export interface DesignsAction {
  type: string;
  payload: Design[];
}

export const initialState: DesignsState = [];

export function designs(state = initialState, action: DesignsAction) {
  switch (action.type) {
    case 'DESIGNS':
      return [...action.payload];
    default:
      return state;
  }
}
