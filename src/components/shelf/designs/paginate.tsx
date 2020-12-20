import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/common/button';

interface Props {
  hasNext: boolean;
  handleClick: VoidFunction;
}

const styles = css`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export function Paginate(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <Button onClick={props.handleClick}>Load more</Button>
    </div>
  );
}
