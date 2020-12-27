import React from 'react';

import { useSelector } from 'react-redux';
import { Edit } from '@components/builder/trays/text/edit';
import { Create } from '@components/builder/trays/text/create';
import { selectedElementSelector } from '@lib/editor/selectors';

export function Text(): JSX.Element {
  const element = useSelector(selectedElementSelector);

  return (
    <React.Fragment>
      {element?.type === 'text'
        ? <Edit element={element} />
        : <Create />
      }
    </React.Fragment>
  );
}
