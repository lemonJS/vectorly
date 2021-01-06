import React from 'react';

import { Button } from '@components/button';
import { download } from '@lib/download';

export const Download = (): JSX.Element => {
  return (
    <Button onClick={download}>
      Download
      <i className='ri-download-cloud-line' />
    </Button>
  );
};
