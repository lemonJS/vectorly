import React from 'react';

import { Design as DesignType } from '@type/design';
import { Design } from '@components/shelf/designs/design';
import { css } from '@emotion/css';

interface Props {
  designs: DesignType[];
}

const styles = css`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-top: 1.5rem;
`;

export function DesignList(props: Props): JSX.Element {
  return (
    <div className={styles}>
      {props.designs.map((design: DesignType) => (
        <Design key={design.designId} design={design} />
      ))}
    </div>
  );
}
