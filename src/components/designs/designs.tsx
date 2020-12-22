import React from 'react';

import { Design as DesignType } from '@type/design';
import { DesignList } from '@components/designs/design-list';
import { Loading } from '@components/designs/loading';

interface Props {
  designs: DesignType[];
}

export function Designs(props: Props): JSX.Element {
  return (
    <React.Fragment>
      {props.designs.length
        ? <DesignList designs={props.designs} />
        : <Loading />
      }
    </React.Fragment>
  );
}
