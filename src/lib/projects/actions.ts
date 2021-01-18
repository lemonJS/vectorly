import { v4 as uuid } from 'uuid';
import { clone, merge, pick } from 'lodash';
import { Dispatch } from 'redux';
import { Project, Element } from '@type/project';
import { GetState } from '@type/redux';
import { ProjectsAction } from '@lib/projects/reducers';
import { setSelectionId } from '@lib/editor/actions';
import { projectSelector } from '@lib/projects/selectors';
import { sync } from '@lib/projects/sync';
import { loadImages } from '@lib/images';
import { presets } from '@lib/presets';

export const getProject = () => (dispatch: Dispatch<any>, getState: GetState) => {
  let project: Project;
  const data = localStorage.getItem('project');

  if (data) {
    project = JSON.parse(data);
    dispatch({ type: 'PROJECT', payload: project });
  } else {
    project = projectSelector(getState());
  }

  // The undo stack needs a base line so that the user can
  // roll back to the very start
  dispatch({ type: 'EDITOR', payload: { undoStack: [JSON.stringify(project)] } });
};

export const updateProject = (payload: Partial<Project>) => (dispatch: Dispatch<ProjectsAction>, getState: GetState) => {
  const project = projectSelector(getState());
  const update: Project = { ...project, ...payload };

  sync(dispatch, update);
  dispatch({ type: 'PROJECT', payload: update });
};

export const createElement = (payload: Partial<Element>) => (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const element = { id: uuid(), ...payload } as Element;

  dispatch(updateProject({ elements: [...project.elements, element] }));
  // Set the newly created element as selected
  setTimeout(() => dispatch(setSelectionId(element.id)), 10);
  return element;
};

export const updateElement = (id: string, payload: Partial<Element>) => (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const elements = project.elements.map(el => el.id === id ? merge(el, payload) : el);

  dispatch(updateProject({ elements }));
};

export const updateElementIndex = (oldIndex: number, newIndex: number) => (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const elements = clone(project.elements);

  [elements[oldIndex], elements[newIndex]] = [elements[newIndex], elements[oldIndex]];

  dispatch(updateProject({ elements }));
};

export const deleteElement = (id: string) => (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const elements = project.elements.filter(el => el.id !== id);

  dispatch(updateProject({ elements }));
};

export const uploadImages = (files: File[]) => async (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const images = await loadImages(files);

  dispatch(updateProject({ images: [...project.images, ...images] }));
};

export const deleteImage = (id: string) => (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const images = project.images.filter(image => image.id !== id);
  const elements = project.elements.filter(element => element.props['data-id'] !== id);

  dispatch(updateProject({ images, elements }));
};

export const setPreset = (id: string) => (dispatch: Dispatch<any>) => {
  const preset = presets.find(p => p.id === id);

  if (preset) {
    dispatch(updateProject({
      preset: pick(preset, ['id', 'height', 'width'])
    }));
  }
};
