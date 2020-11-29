import React from 'react';

import type { Transform } from '../../types/editor';
import { css } from '@emotion/css';
import { Move } from './move';
import { Rotate } from './rotate';

interface Props {
  box: SVGRect;
  handleTransform: (transform: Partial<Transform>) => void;
}

const styles = css`
  rect {
    fill: none;
    stroke: var(--primary-accent-color);
    stroke-width: 1;
  }
  
  circle {
    fill: var(--primary-accent-color);
  }
`;

export const Selection = React.memo((props: Props) => {
  const padding = 8;
  const { width, height } = props.box;

  return (
    <g className={styles}>
      <rect
        height={height + (padding * 2)}
        transform={`translate(-${padding}, -${padding})`}
        width={width + (padding * 2)}
      />

      <circle cx={padding} cy={padding} r={padding} transform={`translate(-${padding * 2}, -${padding * 2})`} />
      <circle cx={padding} cy={padding} r={padding} transform={`translate(${width}, -${padding * 2})`} />
      <circle cx={padding} cy={padding} r={padding} transform={`translate(${width}, ${height})`} />
      <circle cx={padding} cy={padding} r={padding} transform={`translate(-${padding * 2}, ${height})`} />

      <Move padding={padding} box={props.box} handleTransform={props.handleTransform} />
      <Rotate padding={padding} box={props.box} handleTransform={props.handleTransform} />
    </g>
  );
}, () => true);
