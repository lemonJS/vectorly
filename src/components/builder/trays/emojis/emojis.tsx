import React from 'react';

import { useSelector } from 'react-redux';
import { Create } from '@components/builder/trays/emojis/create';
import { Edit } from '@components/builder/trays/emojis/edit';
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
