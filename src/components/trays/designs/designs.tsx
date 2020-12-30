import React from 'react';

import { Select } from '@components/select';
import { DesignsList } from '@components/trays/designs/designs-list';

export function Designs(): JSX.Element {
  return (
    <React.Fragment>
      <Select className='sort'>
        <option>Most popular</option>
        <option>Newest</option>
        <option>Top rated</option>
      </Select>

      <DesignsList />
    </React.Fragment>
  );
}
