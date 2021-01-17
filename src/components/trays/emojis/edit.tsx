import React from 'react';

import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { Size } from '@components/trays/emojis/size';
import { Colors } from '@components/trays/emojis/colors';
import { Positioning } from '@components/trays/positioning';
import { updateElement } from '@lib/projects/actions';
import { Divider } from '@components/divider';

interface Props {
  element: Element;
}

const styles = css`
  padding: 1.5rem 0;
`;

export const Edit = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handlePropsUpdate = (update: Partial<ElementProps>) => {
    dispatch(updateElement(props.element.id, { props: update }));
  };

  const handleUpdate = (update: Partial<Element>) => {
    dispatch(updateElement(props.element.id, update));
  };

  return (
    <div className={styles}>
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Divider />
      <Size element={props.element} handleUpdate={handlePropsUpdate} />
      <Divider />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
    </div>
  );
};
