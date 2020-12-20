import { v4 as uuid } from 'uuid';
import { merge, debounce } from 'lodash';
import { Dispatch } from 'redux';
import { api } from '@lib/api';
import { Project, Element } from '@type/project';
import { GetState } from '@type/redux';
import { setSelectionId } from '@lib/selection/actions';
import { projectSelector, projectsSelector } from '@lib/projects/selectors';

const syncWithServer = debounce(async (project: Project) => {
  // To make the UI as fast as possible, we optimistically update
  // the store on the client. We then debounce the sync and hope all
  // is well
  const { projectId, title, elements } = project;
  await api.put(`/projects/${projectId}`, { title, elements });
}, 1000);

export function getProjects() {
  return async function(dispatch: Dispatch<any>) {
    const projects = await api.get('/projects');
    dispatch({ type: 'PROJECTS', payload: projects });
  };
}

export function updateProject(payload: Partial<Project>) {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const project = projectSelector()(getState());
    const projects = projectsSelector(getState());

    const update = merge({}, project, payload);
    syncWithServer(update);
    dispatch({ type: 'PROJECTS', payload: projects.map(p => p.projectId === project.projectId ? update : p) });
  }
}

export function createProjectElement(payload: Partial<Element>) {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const project = projectSelector()(getState());
    const element = { ...payload, elementId: uuid() } as Element;

    dispatch(updateProject({ elements: [...project.elements, element] }));

    // Set the newly created element as selected
    setTimeout(() => dispatch(setSelectionId(element.elementId)), 10);
  }
}

export function updateProjectElement(elementId: string, payload: Partial<Element>) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const project = projectSelector()(getState());
    const elements = project.elements.map(el => el.elementId === elementId ? merge(el, payload) : el);

    dispatch(updateProject({ elements }));
  }
}

export function deleteProjectElement(elementId: string) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const project = projectSelector()(getState());
    const elements = project.elements.filter(el => el.elementId !== elementId);

    dispatch(updateProject({ elements }));
  }
}

export function uploadImages(files: File[]) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const form = new FormData();
    const project = projectSelector()(getState());

    files.forEach(file => form.append('image', file));

    const req = await fetch(`/api/projects/${project.projectId}/images`, {
      body: form,
      method: 'POST'
    });

    const res = await req.json();
    dispatch(updateProject({ images: res.images }));
  }
}

export function deleteImage(imageId: string) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const project = projectSelector()(getState());

    const req = await fetch(`/api/projects/${project.projectId}/images/${imageId}`, {
      method: 'DELETE'
    });

    const res = await req.json();
    dispatch(updateProject({ images: res.images }));
  }
}
