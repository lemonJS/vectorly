import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Designs } from '@components/trays/designs/designs';
import { Photos } from '@components/trays/photos/photos';
import { Shapes } from '@components/trays/shapes/shapes';
import { Emojis } from '@components/trays/emojis/emojis';
import { Canvas } from '@components/trays/canvas/canvas';
import { Text } from '@components/trays/text/text';
import { editorSelector } from '@lib/editor/selectors';
import { projectSelector } from '@lib/projects/selectors';
import { Stickers } from '@components/trays/stickers/stickers';
import { Draw } from '@components/trays/draw/draw';

interface Props {
  open: boolean;
}

const styles = css`
  display: none;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  scrollbar-width: none;
  width: 100%;
  
  &::-webkit-scrollbar {
    display: none;
  }

  &.show {
    display: flex;
  }
`;

export const Tray = (props: Props): JSX.Element => {
  const project = useSelector(projectSelector);
  const { menuSelected } = useSelector(editorSelector);

  if (!project) {
    return null;
  }

  const trays = [
    {
      Component: Designs,
      name: 'designs'
    },
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
    },
    {
      Component: Canvas,
      name: 'canvas'
    }
  ];

  return (
    <React.Fragment>
      {trays.map(({ name, Component }) => (
        <div key={name} className={`${styles} ${props.open && menuSelected === name ? 'show' : ''}`}>
          <Component />
        </div>
      ))}
    </React.Fragment>
  );
};
