import React from 'react';

import { css } from '@emotion/css';
import { Divider } from '@components/common/divider';
import { useContext } from '@components/builder/store';

interface Props {
  title: String;
}

const styles = css`
  margin-bottom: 2rem;
  
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

export function Close(props: Props): JSX.Element {
  const { setState } = useContext();

  function handleClick() {
    setState({ selectedElement: null });
  }

  return (
    <div className={styles}>
      <div className='header'>
        <p>{props.title}</p>
        <button onClick={handleClick}>
          <i className='ri-close-line' />
        </button>
      </div>
      <Divider />
    </div>
  );
}
