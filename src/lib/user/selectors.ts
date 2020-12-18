import { State } from '@type/redux';
import { UserState } from '@lib/user/reducers';

export function userSelector(state: State): UserState {
  return state.user;
}
