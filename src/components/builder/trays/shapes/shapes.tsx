import React from 'react';

import { css } from '@emotion/css';
import { Create } from '@components/builder/trays/shapes/create';
import { Edit } from '@components/builder/trays/shapes/edit';
import { useContext } from '@components/builder/store';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 100%;
`;

export function Shapes(): JSX.Element {
  const [state] = useContext();
  const element = state.selectedElement;

  return (
    <div className={styles}>
      {element?.type === 'shape'
        ? <Edit element={element} />
        : <Create />
      }
    </div>
  );
}
