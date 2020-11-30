import type { EditorElement } from './editor';

export interface Project {
  id: string;
  title: string;
  elements: EditorElement[];
  createdAt: string;
  updatedAt: string;
}
