import React from 'react'

import { css } from '@emotion/css';
import { texts } from '@components/trays/data/texts';
import { TextType } from '@components/trays/text/text-type';
import { CreateButton } from '@components/trays/text/create-button';

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
    <CreateButton />

    <div className='text-types'>
      {texts.map(type => (
        <TextType key={type.type} textType={type.type}>
          {type.title}
        </TextType>
      ))}
    </div>
  </div>
);

