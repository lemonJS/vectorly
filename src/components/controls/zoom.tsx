import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Button } from '@components/button';
import { setZoom } from '@lib/editor/actions';
import { zoomSelector } from '@lib/editor/selectors';

const styles = css`
  background: var(--foreground-color);
  border-radius: .25rem;
  bottom: 1.5rem;
  color: var(--primary-text-color);
  height: 42px;
  left: 1.5rem;
  position: absolute;
  
  button {
    background: none;
    border: none;
    font-size: 14px;
    padding: 0 .5rem;
    
    i {
      color: var(--primary-text-color);
      margin: 0;
    }
    
    &:hover {
      i {
        color: var(--primary-accent-color);
      }
    }
  }
  
  span {
    font-size: 14px;
    user-select: none;
  }
`;

export const Zoom = (): JSX.Element => {
  const dispatch = useDispatch();
  const zoom = useSelector(zoomSelector);

  const handleZoom = (direction: 'up' | 'down') => () => dispatch(setZoom(direction));

  return (
    <div className={styles}>
      <Button onClick={handleZoom('down')}>
        <i className='ri-subtract-line' />
      </Button>
      <span>{zoom}%</span>
      <Button onClick={handleZoom('up')}>
        <i className='ri-add-line' />
      </Button>
    </div>
  );
};
