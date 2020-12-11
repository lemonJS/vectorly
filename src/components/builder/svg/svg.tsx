import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { Transform } from '@type/editor';
import { Element } from '@components/builder/svg/element';
import { setSelectionId } from '@lib/selection/actions';
import { createProjectElement } from '@lib/project/actions';
import { projectSelector } from '@lib/project/selectors';

type Svg = SVGGraphicsElement & HTMLElement;

declare global {
  interface Window {
    canvas: Svg;
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
    user-select: none;
    width: 100%;
  }
`;

export function SVG(): JSX.Element {
  const dispatch = useDispatch();
  const { elements } = useSelector(projectSelector);

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
      r: 0,
      s: [1, 1]
    };
  }

  function getElementFromDataTransfer(data: string) {
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  function handleDrop(event: React.DragEvent<SVGGElement>) {
    event.preventDefault();

    const data = event.dataTransfer.getData('element');
    const payload = getElementFromDataTransfer(data);

    if (payload) {
      const transform = getDropTransform(event);
      dispatch(createProjectElement({ ...payload, transform }));
    }
  }

  function handleDragOver(event: React.DragEvent<SVGGElement>) {
    event.preventDefault();
  }

  React.useEffect(() => {
    // Store this against the window as a cache for the
    // SVG element positioning
    window.canvas = document.getElementById('canvas') as Svg;
  }, []);

  return (
    <div className={styles}>
      <svg id='canvas' viewBox='0 0 500 800' onMouseDown={handleMouseDown} onDrop={handleDrop} onDragOver={handleDragOver}>
        {elements.map(element => (
          <Element key={element.id} element={element} />
        ))}
      </svg>
    </div>
  );
}