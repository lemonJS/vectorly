import React from 'react';

import { Element } from '@type/project';
import { Close } from '@components/builder/trays/close';
import { Background } from '@components/builder/trays/shapes/background';
import { Border } from '@components/builder/trays/shapes/border';
import { Actions } from '@components/builder/trays/actions';
import { Positioning } from '@components/builder/trays/positioning';
import { useContext } from '@components/builder/store';

interface Props {
  element: Element;
}

export function Edit(props: Props): JSX.Element {
  const { updateProjectElement } = useContext();

  function handlePropsUpdate(update: Partial<React.SVGProps<SVGElement>>) {
    updateProjectElement(props.element.id, { props: update });
  }

  function handleUpdate(update: Partial<Element>) {
    updateProjectElement(props.element.id, update);
  }

  return (
    <div>
      <Close title='Edit Shape' />
      <Border element={props.element} handleUpdate={handlePropsUpdate} />
      <Background element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
