import React from 'react';

import { Element } from '@components/svg/elements/element';
import { Element as ProjectElement } from '@type/project';

interface Props {
  elements: ProjectElement[];
}

export const Elements = (props: Props): JSX.Element => (
  <React.Fragment>
    {props.elements.map(element => (
      <Element key={element.id} element={element} />
    ))}
  </React.Fragment>
);
