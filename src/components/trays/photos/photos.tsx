import React from 'react';

import { useSelector } from 'react-redux';
import { Create } from '@components/trays/photos/create';
import { Edit } from '@components/trays/photos/edit';
import { selectedElementSelector } from '@lib/editor/selectors';

export function Photos(): JSX.Element {
  const element = useSelector(selectedElementSelector);

  return (
    <React.Fragment>
      {element?.type === 'photo'
        ? <Edit element={element} />
        : <Create />
      }
    </React.Fragment>
  );
}
