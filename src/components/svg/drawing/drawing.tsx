import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Element, Transform } from '@type/project';
import { Paths } from '@components/svg/drawing/paths';
import { editorSelector } from '@lib/editor/selectors';
import { createElement } from '@lib/projects/actions';
import { setControl } from '@lib/editor/actions';

export const Drawing = (): JSX.Element => {
  const dispatch = useDispatch();
  const { control, position } = useSelector(editorSelector);

  const handleCreate = (path: string, transform: Transform) => {
    const drawing: Partial<Element> = {
      type: 'drawing',
      element: 'path',
      transform,
      props: {
        d: path,
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: '#000000',
        strokeDasharray: 'none',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 5,
        vectorEffect: 'non-scaling-stroke'
      }
    };

    dispatch(createElement(drawing));
    dispatch(setControl('select'));
  };

  return <Paths handleCreate={handleCreate} position={position} active={control === 'draw'} />;
};
