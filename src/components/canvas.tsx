import React from 'react';

import type { EditorElement } from '../types/editor';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { Element } from './svg/element';
import { setSelectionId } from '../lib/selection/actions';
import { createProjectElement } from '../lib/project/actions';

type Canvas = SVGGraphicsElement & HTMLElement;

interface Props {
  elements: EditorElement[];
}

declare global {
  interface Window {
    canvas: Canvas;
  }
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
  const [mounted, setMounted] = React.useState(false);

  function handleMouseUp(event: React.MouseEvent<SVGElement>) {
    const element = event.target as Element;

    if (element.tagName === 'svg') {
      event.stopPropagation();
      dispatch(setSelectionId(null));
    }
  }

  function handleDrop(event: React.DragEvent<SVGGElement>) {
    event.preventDefault();
    const data = event.dataTransfer.getData('element');
    const payload = JSON.parse(data);
    dispatch(createProjectElement(payload));
  }

  function handleDragOver(event: React.DragEvent<SVGGElement>) {
    event.preventDefault();
  }

  React.useEffect(() => {
    // Store this against the window as a cache for the
    // SVG element positioning
    window.canvas = document.getElementById('canvas') as Canvas;
    setMounted(true);
  }, []);

  return (
    <div className={styles}>
      <svg id='canvas' viewBox='0 0 500 800' onMouseUp={handleMouseUp} onDrop={handleDrop} onDragOver={handleDragOver}>
        {mounted && props.elements.map(element => (
          <Element key={element.id} element={element} />
        ))}
      </svg>
    </div>
  );
}
