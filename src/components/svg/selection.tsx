import React from 'react';

import { css } from '@emotion/css';

interface Props {
  box: SVGRect;
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
  
  line {
    stroke: var(--primary-accent-color);
    stroke-width: 1;
  }
`;

export function Selection(props: Props): JSX.Element {
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

      <circle cx={padding} cy={padding} r={padding} transform={`translate(${(width - padding) / 2}, -${padding * 7})`} />
      <line x1={(width / 2) + (padding / 2)} x2={(width / 2) + (padding / 2)} y1={-padding * 6} y2={-padding} />
    </g>
  );
}
