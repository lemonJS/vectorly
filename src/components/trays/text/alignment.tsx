import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from "@type/project";
import { Button } from '@components/button';
import { Label } from '@components/label';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  label {
    margin-top: 2rem;
  }
  
  .group {
    display: flex;
  }
  
  button {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 0;
    
    i {
      margin: 0;
    }
    
    &:nth-of-type(1) {
      border-radius: .25rem 0 0 .25rem;
      border-right-width: 0;
    }
    
    &:nth-of-type(2) { 
      border-radius: 0;
      border-left-width: 0;
      border-right-width: 0;
    }
    
    &:nth-of-type(3) {
      border-radius: 0 .25rem .25rem 0;
      border-left-width: 0;
    }
    
    &.selected {
      background: var(--secondary-button-border-color);
      border-color: var(--secondary-button-border-color);
      color: var(--secondary-button-background-color);
    }
  }
`;

export function Alignment(props: Props): JSX.Element {
  const { textAnchor } = props.element.props;

  function handleTextAnchor(direction: string) {
    return function() {
      props.handleUpdate({ textAnchor: direction });
    }
  }

  return (
    <div className={styles}>
      <Label>Text Alignment</Label>

      <div className='group'>
        <Button className={`${textAnchor === 'start' ? 'selected' : '' } secondary`} onClick={handleTextAnchor('start')}>
          <i className='ri-align-left' />
        </Button>
        <Button className={`${textAnchor === 'middle' ? 'selected' : '' } secondary`} onClick={handleTextAnchor('middle')}>
          <i className='ri-align-center' />
        </Button>
        <Button className={`${textAnchor === 'end' ? 'selected' : '' } secondary`} onClick={handleTextAnchor('end')}>
          <i className='ri-align-right' />
        </Button>
      </div>
    </div>
  );
}
