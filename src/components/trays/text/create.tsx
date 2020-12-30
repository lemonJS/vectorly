import React from 'react'

import { css } from '@emotion/css';
import { texts } from '@components/trays/data/texts';
import { Button } from '@components/button';
import { TextType } from '@components/trays/text/text-type';

const styles = css`
  button {
    width: 100%;
  }
  
  .text-types {
    display: grid;
    padding-top: 1.5rem;
  }
`;

export const Create = (): JSX.Element => (
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

