import type { Project, Element } from '../../types/project';
import { v4 as uuid } from 'uuid';
import { config } from '../../lib/config';

export function setProject(project: Project) {
  return async function(dispatch) {
    dispatch({ type: 'PROJECT', payload: {...project} });
  };
}

export function updateProject(payload: Partial<Project>) {
  return async function(dispatch, getState) {
    const { project } = getState();
    const update = { ...project, ...payload };

    const res = await fetch(`${config.apiHost}/projects/${update.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    });

    dispatch({ type: 'PROJECT', payload: await res.json() });
  }
}

export function createProjectElement(payload: Partial<Element>) {
  return async function(dispatch, getState) {
    const { project } = getState();

    const element: Element = {
      id: uuid(),
      type: payload.type,
      element: payload.element,
      transform: payload.transform,
      props: payload.props,
      children: payload.children
    };

    const elements: Element[] = [...project.elements, element];

    dispatch(updateProject({ elements }));
  }
}

export function updateProjectElement(payload: Element) {
  return async function (dispatch, getState) {
    const { project } = getState();
    const elements = project.elements.map(el => el.id === payload.id ? payload : el);

    dispatch(updateProject({ elements }));
  }
}

export function deleteProjectElement(payload: Element) {
  return async function (dispatch, getState) {
    const { project } = getState();
    const elements = project.elements.filter(el => el.id !== payload.id);

    dispatch(updateProject({ elements }));
  }
}

export function uploadImages(files: File[]) {
  return async function (dispatch, getState) {
    console.log(files);
  }
}