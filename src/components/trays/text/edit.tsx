import React from 'react'

import { useDispatch } from 'react-redux';
import { Element, ElementProps } from '@type/project';
import { Style } from '@components/trays/text/style';
import { StyleAdvanced } from '@components/trays/text/style-advanced';
import { Divider } from '@components/divider';
import { Alignment } from '@components/trays/text/alignment';
import { Colors } from '@components/trays/text/colors';
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
      <Divider />
      <Style element={props.element} handleUpdate={handlePropsUpdate} />
      <StyleAdvanced element={props.element} handleUpdate={handlePropsUpdate} />
      <Divider />
      <Alignment element={props.element} handleUpdate={handlePropsUpdate} />
      <Divider />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
    </div>
  );
};
