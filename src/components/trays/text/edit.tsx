import React from 'react'

import type { Element } from '../../../types/project';
import { Close } from './close';
import { Actions } from './actions';
import { FontAndSize } from './font-and-size';
import { Style } from './style';
import { Alignment } from './alignment';
import { Colors } from './colors';

interface Props {
  element: Element;
}

export function Edit(props: Props): JSX.Element {
  return (
    <div>
      <Close />
      <FontAndSize />
      <Style />
      <Alignment />
      <Colors />
      <Actions />
    </div>
  );
}