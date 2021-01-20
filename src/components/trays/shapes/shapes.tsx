import React from 'react';

import { useSelector } from 'react-redux';
import { Create } from '@components/trays/shapes/create';
import { Edit } from '@components/trays/shapes/edit';
import { selectedElementSelector } from '@store/editor';

export const Shapes = (): JSX.Element => {
  const element = useSelector(selectedElementSelector);

  return (
    <React.Fragment>
      {element?.type === 'shape'
        ? <Edit element={element} />
        : <Create />
      }
    </React.Fragment>
  );
};
