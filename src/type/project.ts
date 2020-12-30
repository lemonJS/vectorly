import React from 'react';

export interface ElementProps extends React.SVGProps<SVGElement> {}

export type Transform = {
  x: number,
  y: number,
  r: number,
  s: [number, number]
};

export interface Image {
  id: string;
  name: string;
  height: number;
  url: string;
  width: number;
}

export interface Element {
  id: string;
  type: string;
  element: string;
  transform: Transform;
  props: ElementProps;
  text?: string;
}

export interface Project {
  elements: Element[];
  images: Image[];
}
