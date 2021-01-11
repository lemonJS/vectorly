import React from 'react';

import { css } from '@emotion/css';
import { Dropdown } from '@components/dropdown';
import { PresetsList } from '@components/svg/presets/presets-list';

const styles = css`
  left: 0;
  position: absolute;
  top: -1.25rem;
  
  button {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: 10px;
    margin: 0;
    padding: 0;

    i {
      font-size: 12px;
      margin-left: .25rem;
    }

    &:hover {
      i {
        color: var(--primary-accent-color);
      }
    }
  }
  
  .dropdown {
    top: -1rem;
    right: -20rem;
  }
`;

export const Presets = (): JSX.Element => {
  const ref: React.MutableRefObject<Dropdown> = React.useRef(null);

  const handleClick = () => {
    ref.current.toggle();
  };

  return (
    <div className={styles}>
      <button onClick={handleClick}>
        Facebook Post 1200 x 900
        <i className='ri-settings-3-line' />
      </button>

      <Dropdown ref={ref}>
        <PresetsList />
      </Dropdown>
    </div>
  );
};
