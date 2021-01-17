import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const styles = css`
  margin: 0;
  padding: 0;
  width: 100%;
  
  label {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    width: 100%;
    
    &:hover {
      i {
        color: var(--primary);
      }
    }
  }
  
  input {
    display: none;
    
    &:checked {
      + label {
        .unchecked {
          display: none;
        }
        
        .checked {
          display: block;
        }
      }
    }
  }
    
  .checked {
    color: var(--primary);
    display: none;
  }
  
  i {
    color: var(--gray-300);
    font-size: 1.5rem;
    margin-right: .5rem;
  }
`;

export function Radio(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <input type='radio' id={props.id} name={props.name} value={props.value} checked={props.checked} onChange={props.onChange} />
      <label htmlFor={props.id}>
        <i className='unchecked ri-checkbox-blank-circle-line' />
        <i className='checked ri-checkbox-circle-line' />
        {props.children}
      </label>
    </div>
  );
}
