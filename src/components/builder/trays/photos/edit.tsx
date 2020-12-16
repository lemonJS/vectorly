import React from 'react';

import { Element } from '@type/project';
import { Close } from '@components/builder/trays/close';
import { Actions } from '@components/builder/trays/actions';
import { Colors } from '@components/builder/trays/photos/colors';
import { Positioning } from '@components/builder/trays/positioning';

interface Props {
  element: Element;
}

export function Edit(props: Props): JSX.Element {
  function handlePropsUpdate(_update: Partial<React.SVGProps<SVGElement>>) {
    // dispatch(updateProjectElement(props.element.id, { props: update }));
    // TODO
  }

  function handleUpdate(_update: Partial<Element>) {
    // dispatch(updateProjectElement(props.element.id, update));
  }

  return (
    <div>
      <Close title='Edit Photo' />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
