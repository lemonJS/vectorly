import React from 'react';

import { Design as DesignType } from '@type/design';
import { DesignList } from '@components/shelf/designs/design-list';

interface Props {
  designs: DesignType[];
}

export function Designs(props: Props): JSX.Element {
  return (
    <React.Fragment>
      <DesignList designs={props.designs} />
    </React.Fragment>
  );
}
