import React from 'react';

import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { OptionsLink } from '@components/controls/options-link';
import { download } from '@lib/download';
import { clearProject } from '@lib/projects/actions';

const styles = css`
  background: var(--foreground-color);
  border-radius: .25rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  right: 1.5rem;
  top: 3.5rem;
  width: 200px;
  z-index: 2;

  ul {
    margin: 0;
    padding: 0;
  }
`;

export const OptionsLinks = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClear = () => dispatch(clearProject());

  return (
    <div className={styles}>
      <ul>
        <OptionsLink name='Clear' icon='ri-delete-bin-2-line' handleClick={handleClear} />
        <OptionsLink name='Download' icon='ri-download-cloud-line' handleClick={download} />
      </ul>
    </div>
  );
};
