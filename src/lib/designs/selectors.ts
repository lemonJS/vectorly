import { State } from '@type/redux';
import { DesignsState } from '@lib/designs/reducers';
import { Design } from '@type/design';

export function designsSelector(state: State): DesignsState {
  return state.designs;
}

export function designSelector(designId?: string | string[]) {
  // TODO: consider reselect
  return function (state: State): Design {
    return state.designs.find(design => design.designId === designId);
  }
}
