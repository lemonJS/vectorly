import { v4 as uuid } from 'uuid';
import { merge } from 'lodash';
import { Dispatch } from 'redux';
import { api } from '@lib/api';
import { Project, Element } from '@type/project';
import { GetState } from '@type/redux';
import { setSelectionId } from '@lib/editor/actions';
import { projectSelector, projectsSelector } from '@lib/projects/selectors';
import { getImageUploadPayload, uploadImagesToS3 } from '@lib/images';
import { syncWithServer } from '@lib/projects/sync';

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

    const update = { ...project, ...payload };
    syncWithServer(dispatch, update);
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
    const project = projectSelector()(getState());
    const payload = await getImageUploadPayload(files);
    const urls = await api.post(`/projects/${project.projectId}/images`, payload);

    await uploadImagesToS3(files, urls);
    dispatch(getProjects());
  }
}

export function deleteImage(imageId: string) {
  return async function (dispatch: Dispatch<any>, getState: GetState) {
    const project = projectSelector()(getState());

    const { images } = await api.delete(`/projects/${project.projectId}/images/${imageId}`);
    dispatch(updateProject({ images }));
  }
}
