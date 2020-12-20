import React from 'react';

import { css } from '@emotion/css';
import { Design } from '@type/design';
import { Preview } from '@components/design/preview';
import { Create } from '@components/design/create';

interface Props {
  design?: Design;
}

const styles = css`
  display: flex;
  margin-top: 1.5rem;
  
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export function Details(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <Preview design={props.design} />
      <Create design={props.design} />
    </div>
  );
}
