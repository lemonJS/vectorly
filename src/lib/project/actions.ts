import type { Dispatch } from 'redux';
import type { Project, Element } from '../../types/project';
import type { GetState } from '../../types/redux';
import { v4 as uuid } from 'uuid';
import { merge } from 'lodash';
// import { config } from '../../lib/config';

export function setProject(project: Project) {
  return async function(dispatch: Dispatch<any>) {
    dispatch({ type: 'PROJECT', payload: {...project} });
  };
}

export function updateProject(payload: Partial<Project>) {
  return async function(dispatch: Dispatch<any>, getState: GetState) {
    const { project } = getState();
    const update = { ...project, ...payload };

    // const res = await fetch(`${config.apiHost}/projects/${update.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(update)
    // });

    // await res.json()

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
  return async function (_dispatch: Dispatch<any>, _getState: GetState) {
    console.log(files);
  }
}
