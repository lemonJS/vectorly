import React from 'react';

import { useSelector } from 'react-redux';
import { layoutSelector } from '@lib/layout/selectors';
import { Designs } from '@components/builder/trays/designs/designs';
import { Photos } from '@components/builder/trays/photos/photos';
import { Shapes } from '@components/builder/trays/shapes/shapes';
import { Emojis } from '@components/builder/trays/emojis/emojis';
import { Text } from '@components/builder/trays/text/text';

export function Tray(): JSX.Element {
  const { menuSelected } = useSelector(layoutSelector);

  switch(menuSelected) {
    case 'designs':
      return <Designs />;
    case 'photos':
      return <Photos />;
    case 'shapes':
      return <Shapes />;
    case 'emojis':
      return <Emojis />;
    case 'text':
      return <Text />;
    default:
      return null;
  }
}
