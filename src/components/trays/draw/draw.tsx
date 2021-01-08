import React from 'react';

import { useSelector } from 'react-redux';
import { Edit } from '@components/trays/draw/edit';
import { Create } from '@components/trays/draw/create';
import { selectedElementSelector } from '@lib/editor/selectors';

export const Draw = (): JSX.Element => {
  const element = useSelector(selectedElementSelector);

  return (
    <React.Fragment>
      {element?.type === 'drawing'
        ? <Edit element={element} />
        : <Create />
      }
    </React.Fragment>
  );
}
