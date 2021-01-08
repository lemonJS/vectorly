import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Paths } from '@components/svg/drawing/paths';
import { drawingSelector } from '@lib/editor/selectors';
import { createElement } from '@lib/projects/actions';

export const Drawing = (): JSX.Element => {
  const dispatch = useDispatch();
  const drawing = useSelector(drawingSelector);

  const handleCreate = (path: string) => {
    const drawing = {
      type: 'drawing',
      element: 'path',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1] as [number, number]
      },
      props: {
        d: path,
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: '#000000',
        strokeDasharray: 'none',
        strokeWidth: 2,
        vectorEffect: 'non-scaling-stroke'
      }
    };

    dispatch(createElement(drawing));
  };

  return <Paths handleCreate={handleCreate} active={drawing} />
};
