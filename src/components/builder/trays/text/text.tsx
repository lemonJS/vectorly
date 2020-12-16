import React from 'react';

import { css } from '@emotion/css';
import { Edit } from '@components/builder/trays/text/edit';
import { Create } from '@components/builder/trays/text/create';
import { useContext } from '@components/builder/store';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 100%;
`;

export function Text(): JSX.Element {
  const [state] = useContext();
  const element = state.selectedElement;

  return (
    <div className={styles}>
      {element?.type === 'text'
        ? <Edit element={element} />
        : <Create />
      }
    </div>
  );
}
