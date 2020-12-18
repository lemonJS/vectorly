import { Dispatch } from 'redux';
import { api } from '@lib/api';

export function getDesigns() {
  return async function(dispatch: Dispatch<any>) {
    const designs = await api.get('/designs?limit=16');
    dispatch({ type: 'DESIGNS', payload: designs });
  };
}
