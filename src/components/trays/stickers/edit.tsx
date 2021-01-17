import React from 'react';

import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { Positioning } from '@components/trays/positioning';
import { updateElement } from '@lib/projects/actions';
import { Opacity } from '@components/trays/stickers/opacity';
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
      <Opacity element={props.element} handleUpdate={handlePropsUpdate} />
    </div>
  );
};
