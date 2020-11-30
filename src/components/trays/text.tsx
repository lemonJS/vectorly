import React from 'react';

import { css } from '@emotion/css';
import { Button } from '../button';
import { TextType } from './text-type';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 100%;
  
  .text-types {
    display: grid;
    padding-top: 1.5rem;
  }
  
  .text {
    align-items: center;
    background: var(--sidebar-navigation-background-color);
    border-radius: .25rem;
    color: var(--secondary-text-color);
    cursor: pointer;
    display: flex;
    height: 100px;
    justify-content: center;
    margin-bottom: 1.5rem;
    
    &:hover {
      transform: translate(-2px, -2px);
    }
    
    &.heading {
      font-size: 2.5rem;
    }
    
    &.sub-heading {
      font-size: 1.5rem;
    }
    
    &.regular {
      font-size: 1rem;
    }
    
    &.small {
      font-size: 14px;
    }
  }
`;

export function Text(): JSX.Element {
  const textTypes = [
    {
      title: 'Heading',
      type: 'heading'
    },
    {
      title: 'Sub Heading',
      type: 'sub-heading'
    },
    {
      title: 'Regular Text',
      type: 'regular'
    },
    {
      title: 'Small Text',
      type: 'small'
    }
  ];

  return (
    <div className={styles}>
      <Button className='secondary'>
        Add Text
        <i className='ri-add-line' />
      </Button>

      <div className='text-types'>
        {textTypes.map(type => (
          <TextType key={type.type} textType={type.type}>
            {type.title}
          </TextType>
        ))}
      </div>
    </div>
  );
}
