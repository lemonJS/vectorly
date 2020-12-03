import React from 'react';

import { useSelector } from 'react-redux';
import { layoutSelector } from '../../lib/layout/selectors';
import { Designs } from './designs';
import { Photos } from './photos';
import { Shapes } from './shapes/shapes';
import { Emojis } from './emojis/emojis';
import { Text } from './text/text';

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
