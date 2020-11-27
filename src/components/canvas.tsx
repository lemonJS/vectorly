import React from 'react';

import type { EditorElement } from '../types/editor';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { Element } from './svg/element';
import { setSelectionId } from '../lib/selection/actions';

interface Props {
  elements: EditorElement[];
}

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

export function Canvas(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handleClick(event: React.MouseEvent<SVGElement>) {
    const element = event.target as Element;

    if (element.tagName === 'svg') {
      // Clear the selection
      event.stopPropagation();
      dispatch(setSelectionId(null));
    }
  }

  return (
    <div className={styles}>
      <svg id='#canvas' viewBox='0 0 500 800' onClick={handleClick}>
        {props.elements.map(element => (
          <Element key={element.id} element={element} />
        ))}
      </svg>
    </div>
  );
}
