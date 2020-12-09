import React from 'react';

interface Props {
  height: number;
  width: number;
}

export function Outline(props: Props): JSX.Element {
  return (
    <rect
      fill='transparent'
      height={props.height}
      stroke='var(--primary-accent-color)'
      strokeWidth={2}
      width={props.width}
      vectorEffect='non-scaling-stroke'
    />
  );
}
