import React from 'react';

import { useSelector } from 'react-redux';
import { Designs } from '@components/builder/trays/designs/designs';
import { Photos } from '@components/builder/trays/photos/photos';
import { Shapes } from '@components/builder/trays/shapes/shapes';
import { Emojis } from '@components/builder/trays/emojis/emojis';
import { Text } from '@components/builder/trays/text/text';
import { layoutSelector } from '@lib/layout/selectors';
import { projectSelector } from '@lib/projects/selectors';

// TODO: performance will be better if these are all rendered but hidden with CSS

export function Tray(): JSX.Element {
  const project = useSelector(projectSelector());
  const { menuSelected } = useSelector(layoutSelector);

  if (!project) {
    return null;
  }

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
