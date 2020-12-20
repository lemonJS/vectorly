import React from 'react';

import { Label } from '@components/common/label';
import { Radio } from '@components/common/radio';

export function Trim(): JSX.Element {
  const options = [
    {
      value: 'Square',
      element: 'Square'
    },
    {
      value: 'Rounded',
      element: 'Rounded'
    }
  ];

  return (
    <React.Fragment>
      <Label htmlFor='trim'>Trim</Label>

      <Radio id='trim' name='trim' options={options} />
    </React.Fragment>
  );
}
