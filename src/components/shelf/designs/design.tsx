import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';
import { Design as DesignType } from '@type/design';

interface Props {
  design: DesignType;
}

const styles = css`
  background: var(--foreground-color);
  border: 2px solid transparent;
  border-radius: .25rem;
  cursor: pointer;
  height: 400px;
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
`;

export function Design(props: Props): JSX.Element {
  return (
    <Link href={`/designs/${props.design.id}`}>
      <a className={styles}>

      </a>
    </Link>
  );
}
