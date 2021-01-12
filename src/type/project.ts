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

export interface Preset {
  id: string;
  height: number;
  width: number;
}

export interface Project {
  elements: Element[];
  images: Image[];
  preset: Preset;
}
