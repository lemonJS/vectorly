import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Photos } from '@components/trays/photos/photos';
import { Shapes } from '@components/trays/shapes/shapes';
import { Text } from '@components/trays/text/text';
import { selectedElementSelector } from '@store/editor';
import { getLayoutForElement } from '@lib/helpers';

const styles = css`
  background: var(--foreground);
  border-radius: var(--border-radius-md);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, .1);
  display: none;
  flex-direction: column;
  height: calc(100% - 3rem);
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translate(0, -50%);
  width: 20rem;
  
  &::-webkit-scrollbar {
    display: none;
  }

  &.show {
    display: flex;
  }
`;

export const Tray = (): JSX.Element => {
  const element = useSelector(selectedElementSelector);
  const activeTray = getLayoutForElement(element);

  const trays = [
    {
      Component: Photos,
      name: 'photos'
    },
    {
      Component: Text,
      name: 'text'
    },
    {
      Component: Shapes,
      name: 'shapes'
    }
  ];

  return (
    <React.Fragment>
      {trays.map(({ name, Component }) => (
        <div key={name} className={`${styles} ${activeTray === name ? 'show' : ''}`}>
          <Component />
        </div>
      ))}
    </React.Fragment>
  );
};
