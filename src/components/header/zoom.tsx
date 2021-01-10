import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Button } from '@components/header/button';
import { zoomSelector } from '@lib/editor/selectors';
import { setZoom } from '@lib/editor/actions';

const styles = css`
  align-items: center;
  display: flex;
  
  span {
    font-size: 1rem;
  }
`;

export const Zoom = (): JSX.Element => {
  const dispatch = useDispatch();

  const zoom = useSelector(zoomSelector);

  const handleZoom = (direction: 'up' | 'down') => () => {
    dispatch(setZoom(direction));
  };

  return (
    <div className={styles}>
      <Button onClick={handleZoom('down')} label='Zoom out'>
        <i className='ri-zoom-out-line' />
      </Button>
      <span>{zoom}%</span>
      <Button onClick={handleZoom('up')} label='Zoom in'>
        <i className='ri-zoom-in-line' />
      </Button>
    </div>
  );
};
