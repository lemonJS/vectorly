import React from 'react';

import { useSelector } from 'react-redux';
import { Create } from '@components/trays/shapes/create';
import { Edit } from '@components/trays/shapes/edit';
import { selectedElementSelector } from '@lib/editor/selectors';

export function Shapes(): JSX.Element {
  const element = useSelector(selectedElementSelector);

  return (
    <React.Fragment>
      {element?.type === 'shape'
        ? <Edit element={element} />
        : <Create />
      }
    </React.Fragment>
  );
}
