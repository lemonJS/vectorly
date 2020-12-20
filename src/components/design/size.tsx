import React from 'react';

import { Label } from '@components/common/label';
import { Radio } from '@components/common/radio';

export function Size(): JSX.Element {
  const options = [
    {
      value: '4x8',
      element: '4" x 8"'
    },
    {
      value: '5x7',
      element: '5" x 7"'
    }
  ];

  return (
    <React.Fragment>
      <Label htmlFor='size'>Size</Label>

      <Radio id='size' name='size' options={options} />
    </React.Fragment>
  );
}
