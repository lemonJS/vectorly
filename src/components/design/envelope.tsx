import React from 'react';

import { Label } from '@components/common/label';
import { Radio } from '@components/common/radio';

export function Envelope(): JSX.Element {
  const options = [
    {
      value: 'Blank',
      element: 'Blank'
    },
    {
      value: 'With return address',
      element: 'With return address'
    }
  ];

  return (
    <React.Fragment>
      <Label htmlFor='envelope'>Envelope</Label>

      <Radio id='envelope' name='envelope' options={options} />
    </React.Fragment>
  );
}
