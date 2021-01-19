import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Wrapper } from '@components/svg/wrapper';
import { Drawing } from '@components/svg/drawing/drawing';
import { Elements } from '@components/svg/elements/elements';
import { projectSelector } from '@lib/projects/selectors';

type Svg = SVGSVGElement & HTMLElement;

declare global {
  interface Window {
    canvas: Svg;
  }
}

const styles = css`
  box-shadow: 0 0 3rem rgba(0, 0, 0, .02);
  height: 100%;
  outline: none;
  overflow: visible;
  user-select: none;
  width: 100%;
`;

export const SVG = (): JSX.Element => {
  const project = useSelector(projectSelector);
  const elements = project.elements || [];

  React.useEffect(() => {
    // Store this against the window as a cache for the
    // SVG element positioning
    window.canvas = document.getElementById('canvas') as Svg;
  });

  return (
    <Wrapper>
      <svg id='canvas' className={styles}>
        <Elements elements={elements} />
        <Drawing />
      </svg>
    </Wrapper>
  );
};
