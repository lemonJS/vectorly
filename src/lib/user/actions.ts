import { Dispatch } from 'redux';
import { api } from '@lib/api';
import { User } from '@type/user';

export function setUser(user: User) {
  return async function(dispatch: Dispatch<any>) {
    dispatch({ type: 'USER', payload: user });
  }
}

export function getUser() {
  return async function(dispatch: Dispatch<any>) {
    const user = await api.get('/me');
    dispatch({ type: 'USER', payload: user });
  };
}
