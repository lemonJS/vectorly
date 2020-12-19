import React from 'react';

import { Transform } from '@type/editor';

export interface Image {
  imageId: string;
  name: string;
  height: number;
  url: string;
  width: number;
}

export interface Element {
  elementId: string;
  type: string;
  element: string;
  transform: Transform;
  props: React.SVGProps<SVGElement>;
  text?: string;
}

export interface Project {
  userId: string;
  projectId: string;
  title: string;
  elements: Element[];
  images: Image[];
  createdAt: string;
  updatedAt: string;
}
