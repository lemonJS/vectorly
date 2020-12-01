import React from 'react';

import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { setSelectionId } from '../../../lib/selection/actions';
import { Divider } from '../../divider';

const styles = css`
  margin-bottom: 1.5rem;
  
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  
  p {
    color: white;
  }
  
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export function Close(): JSX.Element {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setSelectionId(null));
  }

  return (
    <div className={styles}>
      <div className='header'>
        <p>Edit Text</p>
        <button onClick={handleClick}>
          <i className='ri-close-line' />
        </button>
      </div>
      <Divider />
    </div>
  );
}