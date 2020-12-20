import { Dispatch } from 'redux';
import { api } from '@lib/api';

export function getDesigns(limit: number = 16) {
  return async function(dispatch: Dispatch<any>) {
    const designs = await api.get(`/designs?limit=${limit}`);
    dispatch({ type: 'DESIGNS', payload: designs });
  };
}
