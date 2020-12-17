import React from 'react';

import { v4 as uuid } from 'uuid';
import { merge } from 'lodash';
import { Project, Element, Image } from '@type/project';

interface Props {
  children: React.ReactNode;
}

interface State {
  menuOpen: boolean;
  menuSelected: string | null;
  project: Project | null;
  selectedElement: Element | null;
}

interface Context {
  state: State;
  setState: (state: Partial<State>) => void;
  createProjectElement: (element: Partial<Element>) => void;
  removeProjectElement: (element: Element) => void;
  updateProjectElement: (id: string, element: Partial<Element>) => void;
  createImages: (files: File[]) => void;
  removeImage: (image: Image) => void;
}

export const initialState: State = {
  menuOpen: true,
  menuSelected: 'photos',
  project: null,
  selectedElement: null
};

export const context = React.createContext({});

export const useContext = () => React.useContext(context) as Context;

export const ContextProvider = (props: Props) => {
  const [state, setState] = React.useState(initialState);

  function partialStateUpdate(update: Partial<State>) {
    setState({ ...state, ...update });
  }

  function createProjectElement(payload: Partial<Element>) {
    const element = { ...payload, id: uuid() } as Element;

    const project = {
      ...state.project,
      elements: [ ...state.project.elements, element ]
    };

    partialStateUpdate({ project });
  }

  function removeProjectElement(element: Element) {
    const project = {
      ...state.project,
      elements: state.project.elements.filter(e => e.id !== element.id)
    };

    partialStateUpdate({ project });
  }

  function updateProjectElement(id: string, update: Partial<Element>) {
    const elements = state.project.elements.map(el => el.id === id ? merge(el, update) : el);

    const project = {
      ...state.project,
      elements
    };

    partialStateUpdate({ project });
  }

  function createImages(files: File[]) {
    console.log(files);
  }

  function removeImage(image: Image) {
    const project = {
      ...state.project,
      images: state.project.images.filter(i => i.id !== image.id)
    };

    partialStateUpdate({ project });
  }

  const value = {
    state,
    createProjectElement,
    removeProjectElement,
    updateProjectElement,
    createImages,
    removeImage,
    setState: partialStateUpdate
  };

  return (
    <context.Provider value={value}>
      {props.children}
    </context.Provider>
  );
};
