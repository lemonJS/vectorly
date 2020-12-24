import { Dispatch } from 'redux';
import { api } from '@lib/api';
import { User } from '@type/user';
import { UserAction  } from '@lib/user/reducers';

export function setUser(user: User) {
  return async function(dispatch: Dispatch<UserAction>) {
    dispatch({ type: 'USER', payload: user });
  }
}

export function getUser() {
  return async function(dispatch: Dispatch<UserAction>) {
    const user = await api.get('/me');
    dispatch({ type: 'USER', payload: user });
  };
}
