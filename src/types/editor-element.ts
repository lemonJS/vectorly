import React from 'react';

export interface EditorElement {
  id: string;
  element: string;
  transform: [number, number];
  props: React.SVGProps<SVGElement>;
  children?: string;
}
