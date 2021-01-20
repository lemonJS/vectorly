import React from 'react';

import { useSelector } from 'react-redux';
import { editorSelector } from '@store/editor';

export const Text = (): JSX.Element => {
  const { control } = useSelector(editorSelector);

  if (control !== 'text') return null;

  return (
    <React.Fragment>

    </React.Fragment>
  );
};
