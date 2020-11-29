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

export function updateProject(payload: Partial<Project>) {
  return async function(dispatch, getState) {
    const { project } = getState();
    const update = { ...project, ...payload };

    const res = await fetch(`http://localhost:3000/api/projects/${update.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    });

    const action: ProjectAction = {
      type: 'PROJECT',
      payload: await res.json()
    };

    dispatch(action);
  }
}