import { debounce } from 'lodash';
import { Dispatch } from 'redux';
import { Project } from '@store/project';
import { setSaving, updateUndoStack } from '@store/editor';

export const sync = debounce((dispatch: Dispatch<any>, project: Project) => {
  dispatch(setSaving(true));
  dispatch(updateUndoStack(project));

  localStorage.setItem('project', JSON.stringify(project));

  // The actual save is too fast so make it look like something is
  // really happening
  setTimeout(() => dispatch(setSaving(false)), 2000);
}, 1000);

