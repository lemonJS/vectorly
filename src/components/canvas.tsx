import React from 'react';

import type { EditorElement } from '../types/editor-element';
import { css } from '@emotion/css';
import { Element } from './svg/element';

const styles = css`
  background: var(--foreground-color);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 800px;
  width: 500px;
  
  svg {
    height: 100%;
    width: 100%;
  }
`;

export function Canvas(): JSX.Element {
  const elements: EditorElement[] = [
    {
      id: 'sdfsdfd',
      element: 'text',
      transform: [50, 50],
      props: {
        color: 'black',
        fontSize: 24
      },
      children: 'Hello world'
    },
    {
      id: '3423423',
      element: 'circle',
      transform: [100, 100],
      props: {
        cx: 100,
        cy: 100,
        r: 100,
        fill: 'red',
        stroke: 'blue',
        strokeWidth: 5
      }
    },
    {
      id: '34534345',
      element: 'rect',
      transform: [50, 400],
      props: {
        width: 300,
        height: 100,
        stroke: 'green',
        strokeDasharray: 5,
        fill: 'none'
      }
    }
  ];

  return (
    <div className={styles}>
      <svg id='#canvas' viewBox='0 0 500 800'>
        {elements.map(element => (
          <Element key={element.id} element={element} />
        ))}
      </svg>
    </div>
  );
}
