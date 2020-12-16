import React from 'react'

import { Element } from '@type/project';
import { Close } from '@components/builder/trays/close';
import { Contents } from '@components/builder/trays/text/contents';
import { Actions } from '@components/builder/trays/actions';
import { FontAndSize } from '@components/builder/trays/text/font-and-size';
import { Style } from '@components/builder/trays/text/style';
import { Alignment } from '@components/builder/trays/text/alignment';
import { Colors } from '@components/builder/trays/text/colors';
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
    // TODO
  }

  return (
    <div>
      <Close title='Edit Text' />
      <Contents element={props.element} handleUpdate={handleUpdate} />
      <FontAndSize element={props.element} handleUpdate={handlePropsUpdate} />
      <Style element={props.element} handleUpdate={handlePropsUpdate} />
      <Alignment />
      <Colors element={props.element} handleUpdate={handlePropsUpdate} />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
