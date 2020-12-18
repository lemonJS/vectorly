import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';

interface Props {
  link: string;
  name: string;
  icon: string;
}

const styles = css`
  border-bottom: 1px solid var(--background-color);
  list-style: none;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  &:hover {
    background: var(--background-color);
  }
  
  a {
    align-items: center;
    color: var(--primary-text-color);
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 1rem;
    text-decoration: none;
  }
`;

export function UserLink(props: Props) {
  return (
    <li className={styles}>
      <Link href={props.link}>
        <a>
          <span>{props.name}</span>
          <i className={props.icon} />
        </a>
      </Link>
    </li>
  );
}
