import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { selectedElementSelector } from '@store/editor';
import { Positioning } from '@components/trays/positioning';
import { Divider } from '@components/divider';
import { Style } from '@components/trays/text/style';
import { StyleAdvanced } from '@components/trays/text/style-advanced';
import { Alignment } from '@components/trays/text/alignment';
import { Colors } from '@components/trays/text/colors';
import { Element, ElementProps, updateElement } from '@store/project';

const styles = css`
  padding: 1.5rem 0;
`;

export const Text = (): JSX.Element | null => {
  const dispatch = useDispatch();

  const element = useSelector(selectedElementSelector);

  const handlePropsUpdate = (update: Partial<ElementProps>) => {
    dispatch(updateElement(element.id, { props: update }));
  };

  const handleUpdate = (update: Partial<Element>) => {
    dispatch(updateElement(element.id, update));
  };

  if (!element) return null;

  return (
    <div className={styles}>
      <Positioning element={element} handleUpdate={handleUpdate} />
      <Divider />
      <Style element={element} handleUpdate={handlePropsUpdate} />
      <StyleAdvanced element={element} handleUpdate={handlePropsUpdate} />
      <Divider />
      <Alignment element={element} handleUpdate={handlePropsUpdate} />
      <Divider />
      <Colors element={element} handleUpdate={handlePropsUpdate} />
    </div>
  );
};
