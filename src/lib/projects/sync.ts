import { debounce } from 'lodash';
import { Dispatch } from 'redux';
import { Project } from '@type/project';
import { setSaving } from '@lib/editor/actions';
import { api } from '@lib/api';

export const syncWithServer = debounce(async (dispatch: Dispatch<any>, project: Project) => {
  dispatch(setSaving(true));

  // To make the UI as fast as possible, we optimistically update
  // the store on the client. We then debounce the sync and hope all
  // is well
  const { projectId, title, elements } = project;
  await api.put(`/projects/${projectId}`, { title, elements });

  // The actual save is too fast so make it look like something is
  // really happening
  setTimeout(() => dispatch(setSaving(false)), 2000);
}, 1000);

