import React from 'react';

import { Label } from '@components/common/label';
import { Radio } from '@components/common/radio';

export function Paper(): JSX.Element {
  const options = [
    {
      value: 'Matt',
      element: 'Matt'
    },
    {
      value: 'Glossy',
      element: 'Glossy'
    },
    {
      value: 'Premium',
      element: 'Premium'
    }
  ];

  return (
    <React.Fragment>
      <Label htmlFor='paper'>Paper</Label>

      <Radio id='paper' name='paper' options={options} />
    </React.Fragment>
  );
}
