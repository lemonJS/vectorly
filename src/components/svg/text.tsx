import React from 'react';

import type { Element } from '../../types/project';

interface Props {
  element: Element;
}

export function Text(props: Props): JSX.Element {
  const { text } = props.element;

  if (!text) return null;

  const height = Number(props.element.props.fontSize) + 4;
  const lines = text.split('\n');

  return (
    <React.Fragment>
      {lines.map((line, index) => (
        <tspan key={line} y={index * height} x={0}>{line}</tspan>
      ))}
    </React.Fragment>
  );
}
