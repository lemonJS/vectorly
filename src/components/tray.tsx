import React from 'react';

import { useSelector } from 'react-redux';
import { layoutSelector } from '../lib/layout/selectors';
import { Designs } from './trays/designs';
import { Photos } from './trays/photos';
import { Shapes } from './trays/shapes';
import { Text } from './trays/text';

export function Tray(): JSX.Element {
  const { menuSelected } = useSelector(layoutSelector);

  switch(menuSelected) {
    case 'designs':
      return <Designs />;
    case 'photos':
      return <Photos />;
    case 'shapes':
      return <Shapes />;
    case 'text':
      return <Text />;
    default:
      return null;
  }
}
