import React from 'react'

import { css } from '@emotion/css';
import { texts } from '@components/builder/trays/data/texts';
import { Button } from '@components/common/button';
import { TextType } from '@components/builder/trays/text/text-type';

const styles = css`
  button {
    width: 100%;
  }
  
  .text-types {
    display: grid;
    padding-top: 1.5rem;
  }
`;

export function Create(): JSX.Element {
  return (
    <div className={styles}>
      <Button className='secondary'>
        Add Text
        <i className='ri-add-line' />
      </Button>

      <div className='text-types'>
        {texts.map(type => (
          <TextType key={type.type} textType={type.type}>
            {type.title}
          </TextType>
        ))}
      </div>
    </div>
  );
}
