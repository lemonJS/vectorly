import React from 'react';

import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { setMenuOpen, setSelectionId } from '@lib/editor/actions';

interface Props {
  title: String;
}

const styles = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  p {
    margin: 0;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    
    &:hover {
      color: var(--primary-accent-color);
      transform: scale(1.2);
    }
  }
`;

export const Close = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectionId(null));
    dispatch(setMenuOpen(false));
  }

  return (
    <div className={styles}>
      <p>{props.title}</p>
      <button onClick={handleClick}>
        <i className='ri-close-line' />
      </button>
    </div>
  );
};
