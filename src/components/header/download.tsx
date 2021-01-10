import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/header/button';
import { Dropdown } from '@components/dropdown';

const styles = css`
  position: relative;
  
  .dropdown {
    left: 0;
    top: 3.5rem;
  }
`;

export const Download = (): JSX.Element => {
  const ref: React.MutableRefObject<Dropdown> = React.useRef();

  const handleClick = () => {
    ref.current.toggle();
  };

  return (
    <div className={styles}>
      <Button label='Download' onClick={handleClick}>
        <i className='ri-download-line' />
      </Button>

      <Dropdown ref={ref} />
    </div>
  );
}
