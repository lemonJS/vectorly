import type { Dispatch } from 'redux';
import type { Project, Element } from '../../types/project';
import type { GetState } from '../../types/redux';
import { v4 as uuid } from 'uuid';
import { merge } from 'lodash';

export function setProject(project: Project) {
  return async function(dispatch: Dispatch<any>) {
    dispatch({ type: 'PROJECT', payload: {...project} });
  };
}

export function updateProject(payload: Partial<Project>) {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const { project } = getState();
    const update = { ...project, ...payload };
    dispatch({ type: 'PROJECT', payload: update });
  }
}

export function createProjectElement(payload: Partial<Element>) {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const { project } = getState();
    const element = { ...payload, id: uuid() } as Element;

    dispatch(updateProject({ elements: [...project.elements, element] }));
  }
}

export function updateProjectElement(id: string, payload: Partial<Element>) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const { project } = getState();
    const elements = project.elements.map(el => el.id === id ? merge(el, payload) : el);

    dispatch(updateProject({ elements }));
  }
}

export function deleteProjectElement(id: string) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const { project } = getState();
    const elements = project.elements.filter(el => el.id !== id);

    dispatch(updateProject({ elements }));
  }
}

export function uploadImages(files: File[]) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const form = new FormData();
    const { project } = getState();

    files.forEach(file => form.append('image', file));

    const req = await fetch(`/api/projects/${project.id}/images`, {
      body: form,
      method: 'POST'
    });

    const res = await req.json();
    dispatch(setProject(res));
  }
}

export function deleteImage(id: string) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const { project } = getState();

    const req = await fetch(`/api/projects/${project.id}/images/${id}`, {
      method: 'DELETE'
    });

    const res = await req.json();
    dispatch(setProject(res));
  }
}
