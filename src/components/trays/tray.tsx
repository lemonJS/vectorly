import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Photos } from '@components/trays/photos/photos';
import { Shapes } from '@components/trays/shapes/shapes';
import { Emojis } from '@components/trays/emojis/emojis';
import { Text } from '@components/trays/text/text';
import { editorSelector } from '@lib/editor/selectors';
import { projectSelector } from '@lib/projects/selectors';
import { Stickers } from '@components/trays/stickers/stickers';
import { Draw } from '@components/trays/draw/draw';

const styles = css`
  background: var(--foreground-color);
  border-radius: .5rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, .1);
  display: none;
  flex-direction: column;
  height: calc(100% - 3rem);
  overflow-y: auto;
  padding: 1.5rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 20rem;
  
  &::-webkit-scrollbar {
    display: none;
  }

  &.show {
    display: flex;
  }
`;

export const Tray = (): JSX.Element => {
  const project = useSelector(projectSelector);
  const { menuOpen, menuSelected } = useSelector(editorSelector);

  if (!project) {
    return null;
  }

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
      Component: Emojis,
      name: 'emojis'
    },
    {
      Component: Draw,
      name: 'draw'
    },
    {
      Component: Shapes,
      name: 'shapes'
    },
    {
      Component: Stickers,
      name: 'stickers'
    }
  ];

  return (
    <React.Fragment>
      {trays.map(({ name, Component }) => (
        <div key={name} className={`${styles} ${menuOpen && menuSelected === name ? 'show' : ''}`}>
          <Component />
        </div>
      ))}
    </React.Fragment>
  );
};
