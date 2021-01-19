import React from 'react';

import { useSelector } from 'react-redux';
import { positionSelector } from '@lib/editor/selectors';
import { canvasContainer } from '@lib/constants';

interface Props {
  children: React.ReactNode;
}

export const Position = (props: Props): JSX.Element => {
  const { s, x, y } = useSelector(positionSelector);

  return (
    <g id={canvasContainer} transform={`scale(${s}) translate(${x}, ${y})`}>
      {props.children}
    </g>
  );
};
