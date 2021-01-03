import React from 'react';

import { Element, ElementProps } from '@type/project';
import { Opacity as OpacitySlider } from '@components/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

export const Opacity = (props: Props): JSX.Element => {
  const handleOpacity = (value: number) => {
    props.handleUpdate({ opacity: value });
  };

  return (
    <OpacitySlider selected={props.element.props.opacity} handleUpdate={handleOpacity} />
  );
};
