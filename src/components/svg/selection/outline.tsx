import React from 'react';

interface Props {
  height: number;
  width: number;
}

export const Outline = (props: Props): JSX.Element => (
  <rect
    fill='transparent'
    height={props.height}
    stroke='var(--primary-accent-color)'
    strokeWidth={2}
    width={props.width}
    vectorEffect='non-scaling-stroke'
  />
);
