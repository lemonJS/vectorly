import { debounce } from 'lodash';
import { Dispatch } from 'redux';
import { Project } from '@type/project';
import { updateUndoStack } from '@lib/editor/actions';

export const addToUndoStack = debounce((dispatch: Dispatch<any>, project: Project) => {
  dispatch(updateUndoStack(project));
}, 1000);

