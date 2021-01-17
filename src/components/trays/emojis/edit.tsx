import React from 'react';

import { useDispatch } from 'react-redux';
import { Element, ElementProps } from '@type/project';
import { Size } from '@components/trays/emojis/size';
import { Colors } from '@components/trays/emojis/colors';
import { Positioning } from '@components/trays/positioning';
import { updateElement } from '@lib/projects/actions';

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
      <Size element={props.element} handleUpdate={handlePropsUpdate} />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
    </div>
  );
};
