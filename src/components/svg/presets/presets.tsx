import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Dropdown } from '@components/dropdown';
import { presets } from '@lib/presets';
import { PresetsList } from '@components/svg/presets/presets-list';
import { projectSelector } from '@lib/projects/selectors';
import { setPreset } from '@lib/projects/actions';

interface Props {
  scale: number;
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
        color: var(--primary);
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
  const dispatch = useDispatch();
  const { preset } = useSelector(projectSelector);

  const ref: React.MutableRefObject<Dropdown> = React.useRef(null);

  // This component is zoomed in and out with the
  // art board but it should remain at one size.
  // We nee to revert the scale of the parent
  const scale = 1 / props.scale;

  const translateX = 0;
  const translateY = -24;

  const handleClick = () => {
    ref.current.toggle();
  };

  const handleChange = (id: string) => {
    ref.current.close();
    dispatch(setPreset(id));
  };

  const { category, name, height, width } = presets.find(p => p.id === preset.id);

  return (
    <div className={styles} style={{ transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)` }}>
      <button onClick={handleClick}>
        {category} {name} {width} x {height}
        <i className='ri-settings-3-line' />
      </button>

      <Dropdown ref={ref}>
        <PresetsList
          preset={preset}
          handleChange={handleChange}
        />
      </Dropdown>
    </div>
  );
};
