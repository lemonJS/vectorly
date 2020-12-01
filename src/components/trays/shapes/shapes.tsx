import React from 'react';

import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { Create } from './create';
import { Edit } from './edit';
import { selectedElementSelector } from '../../../lib/selection/selectors';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 100%;
`;

export function Shapes(): JSX.Element {
  const element = useSelector(selectedElementSelector);

  return (
    <div className={styles}>
      {element && element.type === 'shape'
        ? <Edit element={element} />
        : <Create />
      }
    </div>
  );
}
