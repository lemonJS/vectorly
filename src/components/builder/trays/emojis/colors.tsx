import React from 'react';

import { Element, ElementProps } from '@type/project';
import { Opacity } from '@components/builder/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

export function Colors(props: Props): JSX.Element {
  const { opacity } = props.element.props;

  function handleOpacity(value: number) {
    props.handleUpdate({ opacity: value });
  }

  return (
    <div>
      <Opacity selected={opacity} handleUpdate={handleOpacity} />
    </div>
  );
}
