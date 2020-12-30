import React from 'react';

import { Element, ElementProps } from '@type/project';
import { Opacity } from '@components/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

export const Colors = (props: Props): JSX.Element => {
  const { opacity } = props.element.props;

  const handleOpacity = (value: number) => {
    props.handleUpdate({ opacity: value });
  };

  return (
    <div>
      <Opacity selected={opacity} handleUpdate={handleOpacity} />
    </div>
  );
};
