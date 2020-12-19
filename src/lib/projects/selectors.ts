import { State } from '@type/redux';
import { ProjectsState } from '@lib/projects/reducers';
import { Project } from '@type/project';

export function projectSelector(projectId?: string | string[]) {
  return function(state: State): Project | null {
    // If no id is provided then we'll grab the
    // id from the url
    projectId = projectId || typeof location !== 'undefined'
      ? location.pathname.replace('/projects/', '')
      : null;

    return state.projects.find(project => project.projectId === projectId);
  }
}

export function projectsSelector(state: State): ProjectsState {
  return state.projects;
}
