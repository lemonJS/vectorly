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
  .heading {
    padding: 0 1.5rem;
  }
  
  .group {
    border: 1px solid transparent;
    border-radius: .25rem;
    display: flex;
    margin: 0 1.5rem;
    width: 6rem;

    button {
      align-items: center;
      border: none;
      display: flex;
      height: 2rem;
      justify-content: center;
      padding: 0;
      width: 2rem;

      i {
        margin: 0;
      }
      
      &:hover,
      &.selected {
        background: #eee;
        color: var(--primary-accent-color);
      }
    }
    
    &:hover {
      border-color: #bbb;
    }
  }
`;

export const Alignment = (props: Props): JSX.Element => {
  const { textAnchor } = props.element.props;

  const handleTextAnchor = (direction: string) => () => {
    props.handleUpdate({ textAnchor: direction });
  };

  return (
    <div className={styles}>
      <Label className='heading'>Text Alignment</Label>

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
};
