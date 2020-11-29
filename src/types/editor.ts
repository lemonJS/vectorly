import React from 'react';

export interface EditorElement {
  id: string;
  element: string;
  rotate: number;
  transform: [number, number];
  props: React.SVGProps<SVGElement>;
  children?: string;
}

export interface SidebarElement {
  id: string;
  type: string;
  props: React.SVGProps<SVGElement>;
}

export type Transform = { x: number, y: number, r: number };

export type SVG = HTMLElement & SVGSVGElement;