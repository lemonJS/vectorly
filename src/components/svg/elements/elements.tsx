import React from 'react';

import { useSelector } from 'react-redux';
import { Element } from '@components/svg/elements/element';
import { projectSelector } from '@store/project';
import { selectedElementSelector } from '@store/editor';

export const Elements = (): JSX.Element => {
  const project = useSelector(projectSelector);
  const selectedElement = useSelector(selectedElementSelector);
  const elements = project.elements || [];

  return (
    <React.Fragment>
      {elements.map(element => (
        <Element
          key={element.id}
          element={element}
          selected={selectedElement?.id === element.id}
        />
      ))}
    </React.Fragment>
  );
}
