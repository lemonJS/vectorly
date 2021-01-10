import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Transform } from '@type/project';
import { Filters } from '@components/svg/filters/filters';
import { Drawing } from '@components/svg/drawing/drawing';
import { Elements } from '@components/svg/elements/elements';
import { projectSelector } from '@lib/projects/selectors';
import { setSelectionId } from '@lib/editor/actions';
import { createElement } from '@lib/projects/actions';
import { zoomSelector } from '@lib/editor/selectors';

type Svg = SVGSVGElement & HTMLElement;

declare global {
  interface Window {
    canvas: Svg;
  }
}

const styles = css`
  display: flex;
  height: 100%;
  width: 100%;
  
  #canvas {
    box-shadow: 0 0 3rem rgba(0, 0, 0, .02);
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
  const size = project?.size || [0, 0];

  const handleMouseDown = (event: React.MouseEvent<SVGElement>) => {
    const element = event.target as HTMLElement;

    if (element.tagName === 'svg') {
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
    <div className={styles} style={{ transform: `scale(${zoom / 100})`, height: size[1], width: size[0] }}>
      <svg id='canvas' onMouseDown={handleMouseDown} onDrop={handleDrop} onDragOver={handleDragOver}>
        <Elements elements={elements} />
        <Drawing />
        <Filters />
      </svg>
    </div>
  );
};
