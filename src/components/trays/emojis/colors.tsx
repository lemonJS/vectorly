import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { Opacity } from '@components/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  padding: 0 1.5rem;
`;

export const Colors = (props: Props): JSX.Element => {
  const { opacity } = props.element.props;

  const handleOpacity = (value: number) => {
    props.handleUpdate({ opacity: value });
  };

  return (
    <div className={styles}>
      <Opacity selected={opacity || 1} handleUpdate={handleOpacity} />
    </div>
  );
};
