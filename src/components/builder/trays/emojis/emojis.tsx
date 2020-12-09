import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { selectedElementSelector } from '@lib/selection/selectors';
import { Create } from '@components/builder/trays/emojis/create';
import { Edit } from '@components/builder/trays/emojis/edit';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 100%;
`;

export function Emojis(): JSX.Element {
  const element = useSelector(selectedElementSelector);

  return (
    <div className={styles}>
      {element && element.type === 'emoji'
        ? <Edit element={element} />
        : <Create />
      }
    </div>
  );
}
