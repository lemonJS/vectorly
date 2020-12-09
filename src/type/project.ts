import React from 'react';

import { Transform } from '@type/editor';

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
  props: React.SVGProps<SVGElement>;
  text?: string;
}

export interface Project {
  id: string;
  title: string;
  elements: Element[];
  images: Image[];
  createdAt: string;
  updatedAt: string;
}
