import React from 'react';

import { Transform } from './editor';

export interface Image {
  id: string;
  name: string;
  height: string;
  url: string;
  width: string;
}

export interface Element {
  id: string;
  type: string;
  element: string;
  transform: Transform;
  props: React.SVGProps<SVGElement>;
  children?: string;
}

export interface Project {
  id: string;
  title: string;
  elements: Element[];
  images: Image[];
  createdAt: string;
  updatedAt: string;
}
