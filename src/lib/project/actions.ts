import type { ProjectAction } from './reducers';
import type { Project } from '../../types/project';

export function setProject(project: Project) {
  return async function(dispatch) {
    const action: ProjectAction = {
      type: 'PROJECT',
      payload: {...project}
    };

    dispatch(action);
  };
}
