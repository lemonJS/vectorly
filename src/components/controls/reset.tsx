import React from 'react';

import { useDispatch } from 'react-redux';
import { Button } from '@components/button';
import { clearProject } from '@lib/projects/actions';

export const Reset = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClear = () => dispatch(clearProject());

  return (
    <React.Fragment>
      <Button onClick={handleClear}>
        Reset
        <i className='ri-restart-line' />
      </Button>
      <span className='divider' />
    </React.Fragment>
  );
};
