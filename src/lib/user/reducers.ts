import { User } from '@type/user';

export type UserState = User | null;

export interface UserAction {
  type: string;
  payload: Partial<UserState>;
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
