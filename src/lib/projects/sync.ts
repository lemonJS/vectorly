import { debounce } from 'lodash';
import { Dispatch } from 'redux';
import { Project } from '@type/project';
import { setSaving } from '@lib/editor/actions';

export const syncWithServer = debounce((dispatch: Dispatch<any>, project: Project) => {
  dispatch(setSaving(true));

  localStorage.setItem('project', JSON.stringify(project));

  // The actual save is too fast so make it look like something is
  // really happening
  setTimeout(() => dispatch(setSaving(false)), 2000);
}, 1000);

