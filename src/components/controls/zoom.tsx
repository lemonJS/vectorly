import React from 'react';

import { useDispatch } from 'react-redux';
import { Button } from '@components/button';
import { setZoom } from '@lib/editor/actions';

export const Zoom = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleZoom = (direction: 'up' | 'down') => () => dispatch(setZoom(direction));

  return (
    <React.Fragment>
      <Button onClick={handleZoom('up')}>
        Zoom in
        <i className='ri-zoom-in-line' />
      </Button>
      <span className='divider' />
      <Button onClick={handleZoom('down')}>
        Zoom out
        <i className='ri-zoom-out-line' />
      </Button>
      <span className='divider' />
    </React.Fragment>
  );
};
