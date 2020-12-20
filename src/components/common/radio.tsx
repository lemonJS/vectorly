import React from 'react';

import { css } from '@emotion/css';

interface Props {
  id?: string;
  name?: string;
  options: RadioOption[];
}

interface RadioOption {
  element: React.ReactNode | string;
  value: string;
}

const styles = css`
  margin: 0;
  padding: 0;
  
  li {
    list-style: none;
    
    &:hover {
      background: var(--background-color);
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
      color: var(--primary-accent-color);
      display: none;
    }
    
    label {
      align-items: center;
      cursor: pointer;
      display: flex;
      font-size: 14px;
      padding: .25rem 0;
    }
    
    i {
      font-size: 1.25rem;
      margin-right: .5rem;
    }
  }
`;

export function Radio(props: Props): JSX.Element {
  return (
    <ul className={styles}>
      {props.options.map(option => (
        <li key={option.value}>
          <input type='radio' id={`${props.id}-${option.value}`} name={props.name} value={option.value} />
          <label htmlFor={`${props.id}-${option.value}`}>
            <i className='unchecked ri-checkbox-blank-circle-line' />
            <i className='checked ri-checkbox-circle-line' />
            {option.element}
          </label>
        </li>
      ))}
    </ul>
  );
}
