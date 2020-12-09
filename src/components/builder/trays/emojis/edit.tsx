import React from 'react';

import { useDispatch } from 'react-redux';
import { Element } from '@type/project';
import { Close } from '@components/builder/trays/close';
import { Size } from '@components/builder/trays/emojis/size';
import { Actions } from '@components/builder/trays/actions';
import { Colors } from '@components/builder/trays/emojis/colors';
import { Positioning } from '@components/builder/trays/positioning';
import { updateProjectElement } from '@lib/project/actions';

interface Props {
  element: Element;
}

export function Edit(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handlePropsUpdate(update: Partial<React.SVGProps<SVGElement>>) {
    dispatch(updateProjectElement(props.element.id, { props: update }));
  }

  function handleUpdate(update: Partial<Element>) {
    dispatch(updateProjectElement(props.element.id, update));
  }

  return (
    <div>
      <Close title='Edit emoji' />
      <Size element={props.element} handleUpdate={handlePropsUpdate} />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
