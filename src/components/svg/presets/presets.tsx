import React from 'react';

import { css } from '@emotion/css';
import { Dropdown } from '@components/dropdown';
import { PresetsList } from '@components/svg/presets/presets-list';

interface Props {
  zoom: number;
}

const styles = css`
  left: 0;
  position: absolute;
  top: 0;
  transform-origin: top left;
  
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
    right: -17rem;
    width: 254px;
  }
`;

export const Presets = (props: Props): JSX.Element => {
  const ref: React.MutableRefObject<Dropdown> = React.useRef(null);

  // This component is zoomed in and out with the
  // art board but it should remain at one size.
  // We nee to revert the scale of the parent
  const scale = 1 / (props.zoom / 100);

  const translateX = 0;
  const translateY = -24;

  const handleClick = () => {
    ref.current.toggle();
  };

  return (
    <div className={styles} style={{ transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)` }}>
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
