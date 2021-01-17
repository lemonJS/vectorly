import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { Label } from '@components/trays/label';
import { Scale } from '@components/scale';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  .scale {
    margin: 0 1rem;
  }
`;

export const Size = (props: Props): JSX.Element => {
  const { fontSize } = props.element.props;

  const handleSize = (value: number) => {
    props.handleUpdate({ fontSize: value });
  };

  return (
    <div className={styles}>
      <Label>Size</Label>
      <Scale max={12} min={100} value={Number(fontSize)} handleChange={handleSize} />
    </div>
  );
};
