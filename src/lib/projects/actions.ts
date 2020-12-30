import { v4 as uuid } from 'uuid';
import { merge } from 'lodash';
import { Dispatch } from 'redux';
import { Project, Element } from '@type/project';
import { GetState } from '@type/redux';
import { ProjectsAction } from '@lib/projects/reducers';
import { setSelectionId } from '@lib/editor/actions';
import { projectSelector } from '@lib/projects/selectors';
import { syncWithServer } from '@lib/projects/sync';

export const getProject = () => (dispatch: Dispatch<any>) => {
  const project = localStorage.getItem('project');

  return project
    ? dispatch({ type: 'PROJECT', payload: JSON.parse(project) })
    : dispatch(createProject());
};

export const createProject = () => (dispatch: Dispatch<ProjectsAction>) => {
  dispatch({ type: 'PROJECT', payload: { elements: [], images: [] } });
};

export const updateProject = (payload: Partial<Project>) => (dispatch: Dispatch<ProjectsAction>, getState: GetState) => {
  const project = projectSelector(getState());
  const update: Project = { ...project, ...payload };

  syncWithServer(dispatch, update);
  dispatch({ type: 'PROJECT', payload: update });
};

export const createProjectElement = (payload: Partial<Element>) => (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const element = { ...payload, id: uuid() } as Element;

  dispatch(updateProject({ elements: [...project.elements, element] }));
  // Set the newly created element as selected
  setTimeout(() => dispatch(setSelectionId(element.id)), 10);
};

export const updateProjectElement = (id: string, payload: Partial<Element>) => (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const elements = project.elements.map(el => el.id === id ? merge(el, payload) : el);

  dispatch(updateProject({ elements }));
};

export const deleteProjectElement = (id: string) => (dispatch: Dispatch<any>, getState: GetState) => {
  const project = projectSelector(getState());
  const elements = project.elements.filter(el => el.id !== id);

  dispatch(updateProject({ elements }));
};

export const uploadImages = (_files: File[]) => (_dispatch: Dispatch<any>, _getState: GetState) => {
  // TODO
};

export const deleteImage = (_imageId: string) => (_dispatch: Dispatch<any>, _getState: GetState) => {
  // TODO
};
