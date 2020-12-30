import React from 'react';

import { useSelector } from 'react-redux';
import { Edit } from '@components/trays/text/edit';
import { Create } from '@components/trays/text/create';
import { selectedElementSelector } from '@lib/editor/selectors';

export const Text = (): JSX.Element => {
  const element = useSelector(selectedElementSelector);

  return (
    <React.Fragment>
      {element?.type === 'text'
        ? <Edit element={element} />
        : <Create />
      }
    </React.Fragment>
  );
};
