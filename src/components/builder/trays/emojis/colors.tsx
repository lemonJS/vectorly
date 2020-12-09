import React from 'react';

import { Element } from '@type/project';
import { Opacity } from '../opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<React.SVGProps<SVGElement>>) => void;
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
