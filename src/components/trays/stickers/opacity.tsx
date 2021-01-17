import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { Opacity as OpacitySlider } from '@components/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  padding: 0 1.5rem;
`;

export const Opacity = (props: Props): JSX.Element => {
  const handleOpacity = (value: number) => {
    props.handleUpdate({ opacity: value });
  };

  return (
    <div className={styles}>
      <OpacitySlider selected={props.element.props.opacity} handleUpdate={handleOpacity} />
    </div>
  );
};
