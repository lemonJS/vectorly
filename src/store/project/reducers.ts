import React from 'react';

export interface ElementProps extends React.SVGProps<SVGElement> {
  'data-id'?: string;
}

export type Transform = {
  x: number,
  y: number,
  r: number,
  s: [number, number]
};

export interface Image {
  id: string;
  data: string;
  height: number;
  name: string;
  width: number;
}

export interface Element {
  id: string;
  type: string;
  element: string;
  transform: Transform;
  readonly?: boolean;
  props: ElementProps;
  text?: string;
}

export interface Project {
  title: string;
  elements: Element[];
  images: Image[];
}

export type ProjectsState = Project;

export interface ProjectsAction {
  type: string;
  payload: ProjectsState;
}

export const initialState: ProjectsState = {
  title: 'Untitled Project',
  images: [],
  elements: [
    {
      id: '__background__',
      type: 'shape',
      element: 'rect',
      readonly: true,
      props: {
        fill: 'white',
        height: 768,
        pointerEvents: 'none',
        width: 1024
      },
      transform: {
        x: 1,
        y: 1,
        r: 0,
        s: [1, 1]
      }
    }
  ]
};

export const project = (state = initialState, action: ProjectsAction): Project => {
  switch (action.type) {
    case 'PROJECT':
      return action.payload;
    default:
      return state;
  }
};
