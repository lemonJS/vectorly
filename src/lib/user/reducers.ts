import { User } from '@type/user';

export interface UserState extends User {}

export interface UserAction {
  type: string;
  payload: UserState;
}

export const initialState: UserState = null;

export function user(state = initialState, action: UserAction) {
  switch (action.type) {
    case 'USER':
      return action.payload;
    default:
      return state;
  }
}
