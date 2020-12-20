import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';
import { Carousel } from '@components/common/carousel';

const styles = css`
  .slide-link {
    border: 2px solid transparent;
    display: block;
    height: 100%;
    padding: 1.5rem;
    width: 100%;
    
    &:hover {
      border-color: var(--primary-accent-color);
    }
  }
`;

export function Featured(): JSX.Element {
  return (
    <div className={styles}>
      <Carousel
        slides={[
          <Link href='/#'><a className='slide-link'>Slide 1</a></Link>,
          <Link href='/#'><a className='slide-link'>Slide 2</a></Link>,
          <Link href='/#'><a className='slide-link'>Slide 3</a></Link>
        ]}
      />
    </div>
  );
}
