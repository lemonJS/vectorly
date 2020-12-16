import React from 'react';

import { Designs } from '@components/builder/trays/designs/designs';
import { Photos } from '@components/builder/trays/photos/photos';
import { Shapes } from '@components/builder/trays/shapes/shapes';
import { Emojis } from '@components/builder/trays/emojis/emojis';
import { Text } from '@components/builder/trays/text/text';
import { useContext } from '@components/builder/store';

export function Tray(): JSX.Element {
  const [state] = useContext();

  if (!state.project) {
    return null;
  }

  switch(state.menuSelected) {
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
