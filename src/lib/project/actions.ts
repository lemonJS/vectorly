import type { ProjectAction } from './reducers';
import type { EditorElement } from '../../types/editor';
import type { Project, Image } from '../../types/project';
import { v4 as uuid } from 'uuid';

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

export function createProjectElement(payload: Partial<EditorElement>) {
  return async function(dispatch, getState) {
    const { project } = getState();

    const element: EditorElement = {
      id: uuid(),
      element: payload.element,
      transform: payload.transform,
      props: payload.props,
      children: payload.children
    };

    const elements: EditorElement[] = [...project.elements, element];

    dispatch(updateProject({ elements }));
  }
}

export function updateProjectElement(payload: EditorElement) {
  return async function (dispatch, getState) {
    const { project } = getState();
    const elements = project.elements.map(el => el.id === payload.id ? payload : el);

    dispatch(updateProject({ elements }));
  }
}

export function uploadImages(files: File[]) {
  return async function (dispatch, getState) {
    const { project } = getState();

    const images = files.map(file => ({
      id: uuid(),
      name: file.name,
      url: URL.createObjectURL(file),
      height: 50,
      width: 50
    }));

    project.images.push(...images);

    const action: ProjectAction = {
      type: 'PROJECT',
      payload: project
    };

    dispatch(action);

    // dispatch(updateProject({ images: [...project.images, ...images] }));
  }
}