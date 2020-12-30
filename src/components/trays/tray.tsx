import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Designs } from '@components/trays/designs/designs';
import { Photos } from '@components/trays/photos/photos';
import { Shapes } from '@components/trays/shapes/shapes';
import { Emojis } from '@components/trays/emojis/emojis';
import { Text } from '@components/trays/text/text';
import { editorSelector } from '@lib/editor/selectors';
import { projectSelector } from '@lib/projects/selectors';

interface Props {
  open: boolean;
}

const styles = css`
  display: none;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 100%;

  &.show {
    display: flex;
  }
  
  @media only screen and (max-width: 1024px) {
    background: var(--sidebar-background-color);
    bottom: 80px;
    height: 360px;
    position: absolute;
  }
  
  @media only screen and (max-width: 768px) {
    bottom: 48px;
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
      Component: Shapes,
      name: 'shapes'
    },
    {
      Component: Emojis,
      name: 'emojis'
    },
    {
      Component: Text,
      name: 'text'
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
