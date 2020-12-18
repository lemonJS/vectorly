import React from 'react';

import { css } from '@emotion/css';
import { Edit } from '@components/builder/trays/text/edit';
import { Create } from '@components/builder/trays/text/create';
import { useSelector } from 'react-redux';
import { selectedElementSelector } from '@lib/selection/selectors';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 100%;
`;

export function Text(): JSX.Element {
  const element = useSelector(selectedElementSelector);

  return (
    <div className={styles}>
      {element.type === 'text'
        ? <Edit element={element} />
        : <Create />
      }
    </div>
  );
}
