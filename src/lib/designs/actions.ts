import { Dispatch } from 'redux';
import { api } from '@lib/api';
import { DesignsAction } from '@lib/designs/reducers';

export function getDesigns(limit: number = 16) {
  return async function(dispatch: Dispatch<DesignsAction>) {
    const designs = await api.get(`/designs?limit=${limit}`);
    dispatch({ type: 'DESIGNS', payload: designs });
  };
}
