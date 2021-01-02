import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Transform } from '@type/project';
import { Element } from '@components/svg/element';
import { Filters } from '@components/svg/filters/filters';
import { projectSelector } from '@lib/projects/selectors';
import { setSelectionId } from '@lib/editor/actions';
import { createElement } from '@lib/projects/actions';
import { zoomSelector } from '@lib/editor/selectors';

type Svg = SVGGraphicsElement & HTMLElement;

declare global {
  interface Window {
    canvas: Svg;
  }
}

const styles = css`
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 800px;
  width: 500px;
  
  #canvas {
    height: 100%;
    outline: none;
    overflow: visible;
    user-select: none;
    width: 100%;
  }
`;

export const SVG = (): JSX.Element => {
  const dispatch = useDispatch();

  const zoom = useSelector(zoomSelector);
  const project = useSelector(projectSelector);
  const elements = project?.elements || [];

  const handleMouseDown = (event: React.MouseEvent<SVGElement>) => {
    const element = event.target as HTMLElement;

    if (element.tagName === 'svg') {
      event.stopPropagation();
      dispatch(setSelectionId(null));
    }
  };

  const getDropTransform = (event: React.DragEvent<SVGGElement>): Transform => {
    const bounds = window.canvas.getBoundingClientRect();

    return {
      x: event.clientX - bounds.x,
      y: event.clientY - bounds.y,
      r: 0,
      s: [1, 1]
    };
  };

  const getElementFromDataTransfer = (data: string) => {
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  };

  const handleDrop = (event: React.DragEvent<SVGGElement>) => {
    event.preventDefault();

    const data = event.dataTransfer.getData('element');
    const payload = getElementFromDataTransfer(data);

    if (payload) {
      const transform = getDropTransform(event);
      const element = { ...payload, transform };
      dispatch(createElement(element));
    }
  };

  const handleDragOver = (event: React.DragEvent<SVGGElement>) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    // Store this against the window as a cache for the
    // SVG element positioning
    window.canvas = document.getElementById('canvas') as Svg;
  }, []);

  return (
    <div className={styles} style={{ transform: `scale(${zoom / 100})` }}>
      <svg id='canvas' height='800' width='500' onMouseDown={handleMouseDown} onDrop={handleDrop} onDragOver={handleDragOver}>
        {elements.map(element => (
          <Element key={element.id} element={element} />
        ))}
      </svg>

      <Filters />
    </div>
  );
};
