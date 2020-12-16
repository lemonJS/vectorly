import React from 'react';

import { Design as DesignType } from '@type/design';
import { Spinner } from '@components/common/spinner';
import { DesignList } from '@components/shelf/designs/design-list';

interface Props {
  loading: boolean;
  designs: DesignType[];
}

export function Designs(props: Props): JSX.Element {
  return (
    <React.Fragment>
      {props.loading
        ? <Spinner />
        : <DesignList designs={props.designs} />
      }
    </React.Fragment>
  );
}
