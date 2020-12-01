import React from 'react';

import type { Element as ProjectElement } from '../types/project';
import type { Transform } from '../types/editor';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { Element } from './svg/element';
import { setSelectionId } from '../lib/selection/actions';
import { createProjectElement } from '../lib/project/actions';

type Canvas = SVGGraphicsElement & HTMLElement;

interface Props {
  elements: ProjectElement[];
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

  function handleMouseDown(event: React.MouseEvent<SVGElement>) {
    const element = event.target as HTMLElement;

    if (element.tagName === 'svg') {
      event.stopPropagation();
      dispatch(setSelectionId(null));
    }
  }

  function getDropTransform(event: React.DragEvent<SVGGElement>): Transform {
    const bounds = window.canvas.getBoundingClientRect();

    return {
      x: event.clientX - bounds.x,
      y: event.clientY - bounds.y,
      r: 0
    };
  }

  function handleDrop(event: React.DragEvent<SVGGElement>) {
    event.preventDefault();
    const data = event.dataTransfer.getData('element');
    const payload = JSON.parse(data);
    const transform = getDropTransform(event);
    dispatch(createProjectElement({ ...payload, transform }));
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
      <svg id='canvas' viewBox='0 0 500 800' onMouseDown={handleMouseDown} onDrop={handleDrop} onDragOver={handleDragOver}>
        {mounted && props.elements.map(element => (
          <Element key={element.id} element={element} />
        ))}
      </svg>
    </div>
  );
}
