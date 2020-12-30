import React from 'react';

import { useSelector } from 'react-redux';
import { Create } from '@components/trays/emojis/create';
import { Edit } from '@components/trays/emojis/edit';
import { selectedElementSelector } from '@lib/editor/selectors';

export function Emojis(): JSX.Element {
  const element = useSelector(selectedElementSelector);

  return (
    <React.Fragment>
      {element?.type === 'emoji'
        ? <Edit element={element} />
        : <Create />
      }
    </React.Fragment>
  );
}
