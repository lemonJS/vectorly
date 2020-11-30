import type { EditorElement } from './editor';

export interface Image {
  id: string;
  name: string;
  height: string;
  url: string;
  width: string;
}

export interface Project {
  id: string;
  title: string;
  elements: EditorElement[];
  images: Image[];
  createdAt: string;
  updatedAt: string;
}
