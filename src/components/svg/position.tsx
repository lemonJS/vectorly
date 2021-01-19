import React from 'react';

import { useSelector } from 'react-redux';
import { positionSelector } from '@lib/editor/selectors';

interface Props {
  children: React.ReactNode;
}

export const Position = (props: Props): JSX.Element => {
  const { s, x, y } = useSelector(positionSelector);

  return (
    <g transform={`scale(${s}) translate(${x}, ${y})`}>
      {props.children}
    </g>
  );
};
