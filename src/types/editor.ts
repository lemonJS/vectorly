import React from 'react';

export interface EditorElement {
  id: string;
  element: string;
  transform: Transform;
  props: React.SVGProps<SVGElement>;
  children?: string;
}

export interface SidebarElement {
  id: string;
  type: string;
  props: React.SVGProps<SVGElement>;
  children?: string;
}

export type Transform = { x: number, y: number, r: number };

export type SVG = HTMLElement & SVGSVGElement;