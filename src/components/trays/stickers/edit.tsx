import React from 'react';

import { useDispatch } from 'react-redux';
import { Element, ElementProps } from '@type/project';
import { Positioning } from '@components/trays/positioning';
import { updateElement } from '@lib/projects/actions';
import { Opacity } from '@components/trays/stickers/opacity';

interface Props {
  element: Element;
}

export const Edit = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handlePropsUpdate = (update: Partial<ElementProps>) => {
    dispatch(updateElement(props.element.id, { props: update }));
  };

  const handleUpdate = (update: Partial<Element>) => {
    dispatch(updateElement(props.element.id, update));
  };

  return (
    <div>
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Opacity element={props.element} handleUpdate={handlePropsUpdate} />
    </div>
  );
};
