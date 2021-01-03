import React from 'react';

import { useSelector } from 'react-redux';
import { Create } from '@components/trays/stickers/create';
import { Edit } from '@components/trays/stickers/edit';
import { selectedElementSelector } from '@lib/editor/selectors';

export const Stickers = (): JSX.Element => {
  const element = useSelector(selectedElementSelector);

  return (
    <React.Fragment>
      {element?.type === 'sticker'
        ? <Edit element={element} />
        : <Create />
      }
    </React.Fragment>
  );
};
